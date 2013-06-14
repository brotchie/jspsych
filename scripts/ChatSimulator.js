// = ChatSimulator =
//
// Simulates a chat amongst individuals.

var EXPORTED_SYMBOLS = ["ChatSimulator"];

define(function(){
    function ChatSimulator(div, state) {
        this.div = div;
        this.state = state;
        this.acceleration = 1;
        this.substitutions = {};

        return true; 
    }

    ChatSimulator.prototype.setupChatSubstitutions = function() {
        this.substitutions = {
            '$genderhe' : this.state.config.gender == 'M' ? 'he' : 'she',
            '$genderhis' : this.state.config.gender == 'M' ? 'his' : 'her',
            '$genderhim' : this.state.config.gender == 'M' ? 'him' : 'her',
            '$participant' : this.state.config.firstname.toLowerCase()
        };
        if (this.state.config.preferences) {
            var chatsim = this;
            $.each(this.state.config.preferences, function (idx, item){
                chatsim.substitutions['$preference' + (idx+1)] = item[0];
            });
        }
    }

    ChatSimulator.prototype.addUserChatMessage = function(message) {
        if (message != ''){
            this.postMessage(this.state.config.firstname, message, true);
        }
    }

    ChatSimulator.prototype.runScript = function(script) {
        this.setupChatSubstitutions();

        var simulator = this;
        $.each(script, function(index, tuple){
            var delay = tuple[0] * 1000;
            var username = tuple[1];
            var message = tuple[2];
            setTimeout(function(){
                simulator.postMessage(username, message, false);
            }, delay / simulator.acceleration);
        });
    }

    ChatSimulator.prototype.subst = function(message) {
        $.each(this.substitutions, function(key, value){
            message = message.replace(key, value);
        });
        return message;
    }

    ChatSimulator.prototype.postMessage = function(username, message, isme) {
        var chatMessageDiv = $('<div class="chat-entry"/>');
        chatMessageDiv.append($('<span class="chat-username"/>').text(this.subst(username) + ': '));
        chatMessageDiv.append($('<span class="chat-message"/>').text(this.subst(message)));
        if (isme) {
            chatMessageDiv.addClass('blue-text');
        }
        this.div.find('.chat-box-outer-container').append(chatMessageDiv);
        this.div.find('.chat-box-scroll-container').scrollTop(10000);
    }
    return ChatSimulator;
});
