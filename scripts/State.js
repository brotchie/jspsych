// = State =
//
// This class represents the current state of the
// experiment. The state can be saved and loaded
// from local storage so that the user doesn't
// loose their context if they refresh or close
// their browser.

var EXPORTED_SYMBOLS = ["State"];

define(function(){
    function State() {
        this.config = {'UserId' : null};
        this.DEBUG = true;
        this.ACCELERATION = this.DEBUG ? 10 : 1;
        this.startTime = null;
        this.config.firstname = 'unknown';
        return true;
    }

    // ** {{{ State.save }}} **
    //
    // Saves the current state to {{{localStorage}}}.
    // Not implemented!
    State.prototype.save = function() {
        /* JSON.stringify
         * window.localStorage */
    };

    // ** {{{ State.load }}} **
    //
    // Replaces the current state with a state
    // loaded from {{{localStorage}}}.
    // Not implemented!
    State.prototype.load = function() {

    };

    State.prototype.startTimer = function() {
        var state = this;
        $('#header-timer').show();
        this.startTime = Date.now();
        this.endTime = this.startTime + 25*60*1000;

        setInterval(function(){
            var totalSecondsRemaining = (state.endTime - Date.now())/1000;
            totalSecondsRemaining = Math.max(totalSecondsRemaining, 0);
            var minutesRemaining = Math.floor(totalSecondsRemaining/60);
            var secondsRemaining = Math.floor(totalSecondsRemaining % 60);
            $('#time-remaining').text(minutesRemaining.toString() + ':' + (secondsRemaining < 10 ? '0' + secondsRemaining.toString() : secondsRemaining.toString()));
        }, 200);
    };

    return State;
});
