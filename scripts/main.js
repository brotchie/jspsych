require(["jquery" ,"Condition1", 
         "Condition2", "Condition3",
         "Condition4",
         "State", "bootstrap"],
         function($, Condition1, Condition2, Condition3, Condition4, State){
    var currentSlide = 0;

    /* Add a newline to <br/> tag to jquery template engine. */
    $.views.registerTags({
        nlToBr : function(text) {
            return text.replace(/\n/g, '<br/>');
        }
    });

    /* Shows the slide at the given index. */
    var showSlide = function(index){
        $.ExperimentState.slides.forEach(function(slide){
            slide.hide();
        });
        $.ExperimentState.slides[index].show();
    };

    var fetchCondition = function(){
        var conditions = [
            Condition1,
            Condition2,
            Condition3,
            Condition4
        ];
        return conditions[CONDITION-1];
    }

    $(document).ready(function(){
        setupModule = fetchCondition();

        $('.alert').alert();
        $('#header-timer').hide();
        $.ExperimentState = new State(); 
        $.ExperimentState.EXPERIMENT_SETUP = setupModule.EXPERIMENT_SETUP;
        $.ExperimentState.config.collaborate = (CONDITION == 1 || CONDITION == 4);

        if ($.ExperimentState.DEBUG) {
          alert('The experiment is currently running in DEBUG mode. Some validation steps will be skipped and the simulate will run at 10x speed. Setting this.DEBUG = false in scripts/State.js will disable this mode.');
        }


        var substRe = /\$([a-z]+)/g;
        var subst = [];

        $.ExperimentState.EXPERIMENT_SETUP.Slides.forEach(function(slide){
            if (!slide.chat) {
                return;
            }
            var namePrinted = false;
            /* Performs regexp substitution of name, gender, etc on chat
             * transcripts. */
            slide.chat.forEach(function(c){
                if (c[2].search('\\$') != -1) {
                    if (!namePrinted) {
                        namePrinted = true;
                    }
                    var matches = c[2].match(substRe);
                    if (matches) {
                        matches.forEach(function(m){subst.push(m);});
                    }
                }
            });
        });

        /* Render slides. */
        var slide_divs = setupModule.EXPERIMENT_SETUP.Slides.forEach(function(slide){
            $('#content').append(slide.render($.ExperimentState));
        });

        /* Generates a map from slide names to slide objects. */
        var slideMap = {};
        setupModule.EXPERIMENT_SETUP.Slides.forEach(function(slide){
            slideMap[slide.name] = slide;
        });

        $.ExperimentState.slides = $.ExperimentState.EXPERIMENT_SETUP.SlideOrder.map(function(name){
            return slideMap[name];
        });

        showSlide(currentSlide);

        nextSlide = function(){
            var slide = $.ExperimentState.slides[currentSlide];
            if (slide.validate() == true) {
                currentSlide++;
                showSlide(currentSlide);
            }
            return false;
        };

        /* Bind buttons to slide transition handlers. */
        $('#nextSlide').click(nextSlide);
        $('#acceptButton').click(nextSlide);
        $('#declineButton').click(function(){
            alert('Please speak with your tutor.');
            return false;
        });
        $('#prevSlide').click(function(){
            currentSlide--;
            showSlide(currentSlide);
        });
    });
});
