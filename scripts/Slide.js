// = Slide =
//
// A single experiment slide. Exposes methods to render
// the slide contents to a <div/> and to manage
// visibility.
// 
var EXPORTED_SYMBOLS = ["Slide"];

define(["jquery", "jsrender", "ChatSimulator", "jquery.validate"], function($, jsrender, ChatSimulator){
    function Slide(defn) {
        slide = this;
        $.each(defn, function(k,v){
            slide[k] = v;
        });
        this.state = $.ExperimentState;
        this.chatSimulator = null;
        
        return true;
    }

    // ** {{{ Slide.render() }}} **
    //
    // Returns a <div/> containing the rendered
    // slide contents. Slides are rendered
    // using {{{jsrender.js}}}.

    Slide.prototype.render = function(state){
            var slide = this;

            this.state = state;
            var processMethod = this['render_' + this.style];
            if (processMethod != undefined) {
                processMethod.apply(this);
            }
            this.chat = this.state.EXPERIMENT_SETUP.CHAT[this.name];
            if (this.chat) {
                this.chatWindow = $('#chat-box-template').render({});
            }
            if (!this.div) {
                this.div = div = $('<div/>').addClass('slide');
                this.div.html($('#' + this.style + '-template').render(this));
                this.hide();
            }
            if (this.chat) {
                this.chatSimulator = new ChatSimulator(this.div, this.state);
                this.chatSimulator.acceleration = this.state.ACCELERATION;
                this.div.find('.chat-box-textarea').keydown(function(event){
                    if (event.keyCode == '13') {
                        var message = event.target.value;
                        slide.chatSimulator.addUserChatMessage(message);
    
                        // Clear the chat message box.
                        event.target.value = "";
    
                        // Don't allow this event to bubble upwards.
                        return false;
                    }
                });
            }
            this.div.find('form').keypress(function(e){
                e = e || event;
                return (e.keyCode || event.which || event.charCode || 0) !== 13;
            });
            return this.div;
    };

    // ** {{{ Slide.show() }}} **
    //
    // Sets the Slide's <div/> to visible.

    Slide.prototype.show = function(){
            var slide = this;
            if (this.startTimer) {
                this.state.startTimer();
            }
            if (this.acceptdecline) {
                $('#acceptButton').show();
                $('#declineButton').show();
                $('#nextSlide').hide();
            } else {
                $('#acceptButton').hide();
                $('#declineButton').hide();
                $('#nextSlide').show();
            }
            $('#acceptButton').text(this.acceptbuttonlabel ? this.acceptbuttonlabel : 'Accept');
            $('#declineButton').text(this.declinebuttonlabel ? this.declinebuttonlabel : 'Decline');
            if (this.nextbuttonlabel) {
                $('#nextSlide').text(this.nextbuttonlabel);
            } else {
                $('#nextSlide').text('Continue');
            }
            /*if (this.continuedelay && this.state.config.collaborate) {
                $('#nextSlide').hide();
                setTimeout(function(){
                    $('#nextSlide').show();
                }, this.continuedelay * 1000 / this.state.ACCELERATION);
            }*/

            this.div.show();
            var showMethod = this['show_' + this.style];
            if (showMethod != undefined) {
                showMethod.apply(this);
            }
            if (this.chatSimulator != null) {
                this.chatSimulator.runScript(this.chat);
            }
            if (this.hidebuttons) {
                $("#nextSlide").hide();
            }
    };


    // ** {{{ Slide.hide() }}} **
    //
    // Sets the Slide's <div/> to hidden.

    Slide.prototype.hide = function(){
        this.div.hide();
    };

    Slide.prototype.validate = function(){
        var validateMethod = this['validate_' + this.style];
        if (validateMethod != undefined) {
            return validateMethod.apply(this);
        } else {
            return true;
        }
    };

    Slide.prototype.show_second_saliva = function() {
        $('#secondSalivaUserid').text(this.state.config.UserId);
    }

    Slide.prototype.show_saliva_collection = function() {
        this.validator = $('#pretestSaliva').validate();
        if (this.state.DEBUG) {
            $('[name=UserId]').val('5002-7A'); 
        }
    };
    Slide.prototype.validate_saliva_collection = function() {
        var validateNumber = function(n){
            var elements = n.split('-');
            if (elements.length != 2) {
                return false;
            }
            var mainNumber = Number(elements[0]);
            if (isNaN(mainNumber)) {
                return false;
            }
            checkDigit = mainNumber % 9;
            if (Number(elements[1][0]) != checkDigit) {
                return false;
            }
            return true;
        }
        var isValid = this.validator.form();
        if (isValid) {
            userId = $('#pretestSaliva').find('[name=UserId]').val();
            if (!validateNumber(userId)){
                alert('Invalid Tube Number. Please check you have entered your tube number correctly.');
                return false;
            }
            this.state.config.UserId = userId;
            return true;
        } else {
            return false;
        }
    }

    Slide.prototype.show_group_score = function() {
        var table = this.div.find('#groupScoreTable');
        var slide = this;
        $.each(this.groupScores, function(idx, tuple){
            var tr = $('<tr/>');
            [idx + 1, 'Team ' + tuple[0], tuple[1] + ' / 55'].forEach(function(txt){
                tr.append($('<td/>').text(txt));
            });
            if (tuple[0] == 'D') {
                tr.addClass('red-text');
            }
            table.append(tr);
        });

        if (this.chat) {
            var lastchattime = this.chat[this.chat.length-1][0];
            $('#nextSlide').hide();
            setTimeout(function(){
                $('#nextSlide').show();
            }, (lastchattime+3) * 1000 / this.state.ACCELERATION);
        }
    }

    Slide.prototype.show_personal_information = function() {
        var customShowErrors = function(errorMap, errorList) {
            errorList.forEach(function(error){
                $(error.element).parents('.control-group').addClass('error');
                $(error.element).attr('placeholder', error.message);
            });
        };
        var customUnhighlight = function(element, errorClass, validClass){
            $(element).parents('.control-group').removeClass('error').attr('placeholder', '');
        };
        this.validator = $("#personalInformation").validate({
            focusCleanup: true
        });
        if (this.state.DEBUG) {
            $('[name=firstname]').val('James');
            $('[name=age]').val(27);
            $('[name=surname]').val('Brotchie');
            $('[name=major]').val('Engineering');
            $('#genderMale').attr('checked', true);
            $('#gpa7').attr('checked', true);
        }
    };

    Slide.prototype.validate_personal_information = function(){
        var slide = this;
        var isValid = this.validator.form();

        if (isValid) {
            $('#personalInformation').serializeArray().forEach(function(item){
                slide.state.config[item.name] = item.value; 
            });
            var query = $('#personalInformation').serialize() + '&userid=' + this.state.config.UserId + '&condition=' + CONDITION;
            $.post('personalinfo.php', query);
            return true;
        } else {
            return false;
        }
    };

    Slide.prototype.validate_team_mate_selection = function(){
        if (this.choices.length != 4){
            alert('Please select 4 team mates.');
            return false;
        } else {
            this.state.config.preferences = this.choices.slice();
            // Correct for easy results.
            if (CONDITION > 2) {
                for (var i = 0; i < this.state.config.preferences.length; i++){
                    if (this.state.config.preferences[i][7] < 4) {
                        this.state.config.preferences[i][7] = 5;
                    }
                }
            }
            return true;
        }
    }

    Slide.prototype.show_team_mate_selection = function(){
        var slide = this;
        slide.buttons = [];
        slide.choices = [];

        this.div.find('.notloading').hide();
        $('#nextSlide').hide();
        setTimeout(function(){
            slide.div.find('.loading').hide();
            slide.div.find('.notloading').show();
            $('#nextSlide').show();
        }, 10*1000 / this.state.ACCELERATION);

        var table = $('#teammateSelectionTable');

        var resetButton = $('#resetTeammateSelection');
        resetButton.hide();

        resetButton.click(function(){
            $.each(slide.buttons, function(index, button){
                button.text('Select');
                button.removeClass('btn-success');
                button.addClass('btn-primary');
                button.show();
                slide.choices = [];
            });
            resetButton.hide();
            return false;
        });

        $.each(this.state.EXPERIMENT_SETUP.FakeParticipants, function(index, item){
            if (item[0] != '$participant'){
                var tr = $('<tr/>');
                tr.append(
                    $('<td/>').text(item[0]),
                    $('<td/>').text(item[2]),
                    $('<td/>').text(item[3]),
                    $('<td/>').text(item[4]),
                    $('<td/>').text(item[5]),
                    $('<td/>').text(item[1] + '/6'),
                    $('<td/>').text('"' + item[6] + '"')
                );
                var button = $('<a href="#" class="btn btn-primary"/>').text('Select');
                slide.buttons.push(button);
                button.click(function(){
                    if (button.hasClass('btn-primary')) {
                        button.removeClass('btn-primary');
                        button.addClass('btn-success');
                        slide.choices.push(item);
                        button.text('Selection ' + slide.choices.length);
                    }
                    if (slide.choices.length == 4) {
                        $.each(slide.buttons, function(index, button){
                            if (!button.hasClass('btn-success')) {
                                button.hide();
                            }
                        });
                        resetButton.show();
                    }
                    return false;
                });
                tr.append($('<td/>').append(button));
                table.append(tr);
            }
        });
    };

    Slide.prototype.show_team_request_results = function() {
        if (this.state.DEBUG && !this.state.config.preferences) {
            this.state.config.preferences = this.state.EXPERIMENT_SETUP.FakeParticipants.slice(0,4);
        }
        var slide = this;
        $('#nextSlide').hide();
        this.div.find('#teamRequestResultsMessage').addClass(this.positive ? 'green-text' : 'red-text');

        var table = this.div.find('#teamRequestResultsTable');
        if (this.positive) {
            $.each([[12, this.state.config.firstname],
                    [4, this.state.config.preferences[0][0]],
                    [3, this.state.config.preferences[1][0]],
                    [3, this.state.config.preferences[2][0]],
                    [2, this.state.config.preferences[3][0]]], function(idx, tuple){
                table.append($('<tr/>').append(
                    $('<td/>').text(idx+1),
                    $('<td/>').text(tuple[0]).addClass('red-text'),
                    $('<td/>').text(tuple[1]).addClass(idx == 0 ? 'red-text': '')
                ));
            });
        } else {
            [1,2,3,4].forEach(function(idx){
                table.append($('<tr/>').append(
                    $('<td/>').text(idx),
                    $('<td/>').text(0),
                    $('<td/>').text('none').addClass('red-text')
                ));
            });
        }
        setTimeout(function(){
            slide.div.find('div').show(); 
            slide.div.find('.loading').hide();
            $('#nextSlide').show();
        }, 10*1000/this.state.ACCELERATION);
    };

    Slide.prototype.show_task_performance_scores = function(){
        $('#nextSlide').hide();
        var slide = this;
        var table = $('#' + this.tableid);
        var sortedScores = this.state.EXPERIMENT_SETUP.FakeParticipants.slice();
        sortedScores.sort(function(x,y){
            var scoresEqual = x[slide.scoreindex] == y[slide.scoreindex];
            if(scoresEqual){
                if (x[0]=='$participant'){
                    return -1;
                } else if (y[0]=='$participant'){
                    return 1;
                }
            }
            if(x[slide.scoreindex] < y[slide.scoreindex]) {
                return 1;
            } else {
                return -1; 
            }
        });
        table.hide();
        if (this.easy) {
            setTimeout(function(){
                slide.div.find('.loading').hide();
                slide.div.find('.easy-text').show();
                $('#nextSlide').show();
            }, this.delay*1000 / this.state.ACCELERATION);
        } else {
            table.append($('<tr/>').append(
                        $('<th/>').text('Rank'),
                        $('<th/>').text('Participant'),
                        $('<th/>').text('Score')));
            $.each(sortedScores, function(index, item){
                var tr = $('<tr/>');
                var firstname = item[0];
                if (firstname == '$participant') {
                    firstname = slide.state.config.firstname;
                    tr.addClass('red-text');
                }
                tr.append(
                        $('<td/>').text(index+1),
                        $('<td/>').text(firstname),
                        $('<td/>').text(item[slide.scoreindex] + '/' + slide.scoretotal)
                    );
                table.append(tr);
            });
            setTimeout(function(){
                slide.div.find('.loading').hide();
                table.show();
                slide.div.find('.text-content').show();
                $('#nextSlide').show();
            }, this.delay*1000 / this.state.ACCELERATION);
        }
    };

    Slide.prototype.show_team_introduction = function() {
        var slide = this;
        var team = null;

        $('#nextSlide').hide();
        setTimeout(function(){
            slide.div.find('.hidden').show();
            $('#nextSlide').show();
        }, (this.chat[this.chat.length-1][0] + 5) * 1000 / this.state.ACCELERATION);

        if (CONDITION == 2 || CONDITION == 3){
            team = this.state.config.preferences.slice();
        } else {
            team = this.state.EXPERIMENT_SETUP.FakeParticipants.filter(function(x){
                return slide.state.EXPERIMENT_SETUP.Team.indexOf(x[0]) != -1;
            });
        }
        team.push([this.state.config.firstname,
         this.easy ? this.scoreobtained : 1,
         this.state.config.gender,
         this.state.config.age,
         this.state.config.major,
         this.state.config.expectedGPA]);

        var table = this.div.find('#teamIntroductionTable');
        team.forEach(function(member){
            var row = $('<tr/>');
            [0, 2, 3, 4, 5].forEach(function(i){
                row.append($('<td/>').text(member[i]));
            });
            row.append($('<td/>').text(member[1] + '/6'));
            table.append(row);
        });
        table.find('tr').last().addClass('red-text');
    };

    Slide.prototype.show_internal_score_tasks = function() {
        var slide = this;
        var table = this.div.find('#internalScoreTasksTable');

        var team = null;
        if (CONDITION == 2 || CONDITION == 3) {
            team = this.state.config.preferences.slice();
        } else {
            team = this.state.EXPERIMENT_SETUP.FakeParticipants.filter(function(x){
                return slide.state.EXPERIMENT_SETUP.Team.indexOf(x[0]) != -1;
            });
        }
        team.push(['$participant',
                    null, null, null, null, null, null,
                    this.easy ? this.scoreobtained : 2]);
        team.sort(function(x,y){
            if(x[7] < y[7]){
                return 1;
            } else {
                return -1;
            }
        });
        $.each(team, function(index, member){
            var row = $('<tr/>');
            row.append($('<td/>').text(index+1),
                       $('<td/>').text(member[0] == '$participant' ? slide.state.config.firstname : member[0]),
                       $('<td/>').text(member[7]),
                       $('<td/>').text((member[7]/5.0)*100));
            if (member[0] == '$participant') {
                row.addClass('red-text');
            }
            table.append(row);
        });
        if (this.chat) {
            var lastchattime = this.chat[this.chat.length-1][0];
            $('#nextSlide').hide();
            setTimeout(function(){
                $('#nextSlide').show();
            }, (lastchattime+3) * 1000 / this.state.ACCELERATION);
        }

    }

    Slide.prototype.validate_survey = function() {
        if (this.state.DEBUG){
            return true;
        }
        if (Object.keys(this.survey_choices).length != this.surveyItems.length) {
            alert('Please complete survey before continuting.');
            return false;
        } else {
            var choices = [];
            $.each(this.survey_choices, function(k, v){
                choices.push([k,v]);
            });
            var query = $.param({
                'userid' : this.state.config.UserId,
                'name'  : this.name,
                'survey' : JSON.stringify(choices).replace(/\\/g, '')
            });
            $.post('survey.php', query);
            return true;
        }
    }

    Slide.prototype.set_multi_choice_timeout = function(totaltime) {
        if (!totaltime) {
            totaltime = 60;
        }
        var slide = this;
        this.complete = false;
        setTimeout(function(){
            if (!slide.complete) {
                slide.div.find('.time-limit-alert').text('You have 20 seconds left to answer this question!')
                slide.div.find('.time-limit-alert').addClass(CONDITION <= 2 ? 'red-text' : 'green-text');
            }
        }, (totaltime-20)*1000 / this.state.ACCELERATION);
        setTimeout(function(){
            if (!slide.complete) {
                slide.div.find('.time-limit-alert').text('You have 10 seconds left to answer this question! An answer will be automatically selected if you do not select one.');
            }
        }, (totaltime-10)*1000 / this.state.ACCELERATION);
        setTimeout(function(){
            if (!slide.complete) {
                if(slide.div.find('input[checked]').length == 0){
                    slide.div.find('input').first().attr('checked', true);
                    $('#nextSlide').click();
                }
            }
        }, totaltime*1000);
    }

    Slide.prototype.show_business_case = function() {
        var slide = this;
        if (this.chat) {
            var lastchattime = this.chat[this.chat.length-1][0];
            $('#nextSlide').hide();
            setTimeout(function(){
                $('#nextSlide').show();
            }, (lastchattime+3) * 1000 / this.state.ACCELERATION);
        }
    }

    Slide.prototype.show_business_case_question = function() {
        var slide = this;
        this.validator = this.div.find('form').validate();

        if (this.chat) {
            var lastchattime = this.chat[this.chat.length-1][0];
            this.set_multi_choice_timeout(lastchattime + 25);
            $('#nextSlide').hide();
            setTimeout(function(){
                $('#nextSlide').show();
            }, (lastchattime+3) * 1000 / this.state.ACCELERATION);
        } else {
            this.set_multi_choice_timeout();
        }

        if (this.state.DEBUG) {
            $('#nextSlide').show();
        }
    }

    Slide.prototype.validate_business_case_question = function() {
        if (this.state.DEBUG) {
            this.complete = true;
            return true;
        }
        if (this.validator.form()) {
            this.complete = true;
            return true;
        } else {
            return false;
        }
    }

    Slide.prototype.show_survey = function() {
        this.survey_choices = {};

        var slide = this;
        var table = $('#' + this.tableid);
        $.each(this.surveyItems, function(index, emotion){
            var row = $('<tr/>');
            row.append($('<td/>').text(index + 1));
            row.append($('<td/>').text(emotion));
            $.each(slide.surveyOptions, function(index, rating){
                var button = $('<a href="#"/>');
                button.text(rating);
                button.addClass('btn');

                button.click(function(){
                    //if (!slide.survey_choices[emotion]) {
                        slide.survey_choices[emotion] = rating;
                        //button.parents('tr').find('.btn').addClass('disabled');
                        button.parents('tr').find('.btn').removeClass('btn-primary');
                        button.addClass('btn-primary');
                        //button.removeClass('disabled');
                    //}
                    return false;
                });
                row.append($('<td/>').append(button));
            });
            table.append(row);
        });
    }
    Slide.prototype.validate_selection_justification = function() {
        if($('#pitchMessage').val() != '') {
            return true;
        } else {
            alert('Please enter a personal pitch!');
            return false;
        }
    }
    Slide.prototype.show_multi_choice_question = function() {
        this.set_multi_choice_timeout();
        this.validator = this.div.find('form').validate();
    }
    Slide.prototype.validate_multi_choice_question = function() {
        if (this.state.DEBUG || this.validator.form()) {
            this.complete = true;
            return true;
        } else {
            return false;
        }
    }
    return Slide;
});
