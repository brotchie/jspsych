define(['Slide', 'SharedSlides'], function(Slide, SharedSlides){
    var CONFIG = {
        EXPERIMENT_SETUP : {
            Team : ['Kellie', 'Samuel', 'Li', 'Conner'],
            SlideOrder : [
		        'ParticpantInformationSheet'
            ,   'SalivaCollection'
            ,   'PersonalInformation'
            ,   'PreExperimentSurvey'
            ,   'VirtualTeamSelection'
            ,   'MCQuestion1_Hard'
            ,   'MCQuestion2_Hard'
            ,   'MCQuestion3_Hard'
            ,   'MCQuestion4_Hard'
            ,   'MCQuestion5_Hard'
            ,   'MCQuestion6_Hard'
            ,   'TaskPerformanceTestScores'
            ,   'PitchRequest'
            ,   'TeamMateSelection'
            ,   'TeamRequestResults'
            ,   'TeamIntroduction'
            ,   'BusinessCase_Hard'
            ,   'BusinessCaseQuestion1_Hard'
            ,   'BusinessCaseQuestion2_Hard'
            ,   'BusinessCaseQuestion3_Hard'
            ,   'BusinessCaseQuestion4_Hard'
            ,   'BusinessCaseQuestion5_Hard'
            ,   'BusinessCaseMCQScores'
            ,   'InternalScoreTasks'
            ,   'GroupScore'
            ,   'SecondSaliva'
            ,   'PostExperimentSurvey'
            ,   'ExperimentDebriefing'
            ,   'ThankYou'
            ],
            /* Name, MCQ Score, Gender, Age, Major,
             * Expected GPA, Pitch, Business Case Score. */
            FakeParticipants : [
                    ['Kellie', 6, 'F', 18, 'Business Management', 7, 'Im a straight 7 student.', 5]
                ,   ['Samuel', 5, 'M', 22, 'Finance', 7, 'I am really super smart!.', 4]
                ,   ['Li', 5, 'F', 20, 'Finance', 7, 'I have done business studies in my home country 3 yrs straight.', 4]
                ,   ['Conner', 5, 'M', 18, 'Economics', 7, 'I am top bloke!!.', 5]
                ,   ['Ravi', 4, 'M', 25, 'Business Management', 7, ':) :) :) Im sexy and you know it :) :) :).', 5]
                ,   ['Scott', 4, 'M', 22, 'Engineering', 6, 'I am a great team player.', 3]
                ,   ['Ella', 4, 'F', 18, 'Marketing', 7, 'I study hard and get good marks, was dux of business studies at school.', 5]
                ,   ['James', 4, 'M', 25, 'you NEED ME in your team!!!!', 6, 'I am the best.', 4]
                ,   ['Abdul', 4, 'M', 19, 'Economics', 7, 'Please pick me! please please pleas4.', 4]
                ,   ['Erica', 4, 'F', 32, 'Commerce', 5, 'Im a mature age student, and have worked in teams ofr 4 years and I have a wealth of knowledge and experience.', 5]
                ,   ['Candice', 4, 'F', 18, 'Accounting', 7, 'I was school captain last year.', 4]
                ,   ['Zu', 3, 'M', 19, 'Business Management', 6, 'I am smart and very good at maths too.', 4]
                ,   ['Anna', 3, 'F', 23, 'Political Science', 5, 'U know you want me.....', 3]
                ,   ['Jamie', 2, 'M', 26, 'Psychology', 7, 'I dont care if you pick me (reverse psychology :).', 3]
			    ,   ['Sol', 2, 'M', 19, 'Journalism', 5, 'We analyse business cases all the time so have previous experinece.',3]
                ,   ['Ricardo', 2, 'M', 19, 'Economics', 5, 'I give you $$$$.', 2]
                ,   ['Rita', 1, 'F', 22, 'Information Technology', 6, 'this is so lame,.. I dont know what to write.', 3]
                ,   ['Xiu-Lee', 1, 'M', 22, 'Maths', 7, 'You be very sorry if I not on your team.', 1]
                ,   ['Daina', 1, 'M', 22, 'International relations', 5, '"WTF???".', 0]
                ,   ['$participant', 1, null, null, null, null, null, 2]
            ],
            Slides : []
        }
    }
    CONFIG.EXPERIMENT_SETUP.CHAT = {
        'TeamIntroduction' : [
                [6, "Kellie", "Hi everyone!"],
                [9, "Samuel", "Helloooo!!"],
                [12, "Conner", "Yo dudes!!"],
                [20, "Li", "Greetings my fellow team mates!"],
                [24, "Samuel", "Hey did you vote for $participant to be in our team?"],
                [30, "Samuel", "I didnt vote for $genderhim did you?"],
                [35, "Conner", "No i didnt"],
                [40, "Conner", "$genderhis score was sooo low"],
                [46, "Conner", "I just wanted smart people like you guys on the team.... so we do well"],
                [53, "Li", "well why bother voting???"],
                [55, "Li", "If we dont get who we want in out team???"],
                [60, "Li", "$genderhe must have been randomly assigned"],
                [66, "Samuel", "hey $participant how did you get in out team?"],
                [71, "Kellie", "hey guys seriously dont worry about that now"],
                [73, "Kellie", "lets just not talk to $genderhim"],
                [80, "Kellie", "we all have to start together"],
                [78, "Conner", "yeah ok good idea"],
                [84, "Conner", "lets just collaborate bwt us.."]
                //everyone press start NOW..cool lets DO IT!!"]
        ],
        'BusinessCase_Hard' : [
            [34, "Kellie", "Ok everyone read the case really carefully"],
            [40, "Kellie", "remember don't help $participant"],
            [36, "Li", "apparently we have to collaborate on our answers"],
            [45, "Samuel", "ok yeah only help who we voted for"],
	        [49, "Samuel", "ok beacuse we get a team score... so dont mess up guys!!"],
            [54, "Conner", "has anyone done this type of business case before?"],
            [58, "Li", "aahh this will be easy I did this last year in school"],
            [61, "Kellie", "Ok hurry up and read it guys the clock is ticking!!!"],
            [66, "Samuel", "dont let us down!"],
            [70, "Samuel", "Be smart guys everyone try and be fast"]
        ],
        'BusinessCaseQuestion1_Hard' : [
                    [18, "Conner", "oh yeah  I get it"]
                ,   [23, "Li", "I think i know the answer too"]
                ,   [28, "Samuel", "it could be either A or C"]
                ,   [34, "Kellie", "yeah but your dealing with different cultures"]
                ,   [42, "Samuel", "yeah you have to take into account their business culture"]
                ,   [49, "Kellie", "Yea yeah true so it could be B if its from HQ..come on we gotta hurry hurry!!"]
                ,   [55, "Samuel", "just put in what you think im sure youll get it right"]
        ],
        'BusinessCaseQuestion2_Hard' : [
                    [16, "Li", "has anhyone do mgts2606?? i think we did this last year"]
                ,   [24, "Kellie", "no but my friend did, i thnk i knw the answer"]
                ,   [30, "Conner", "it depends on how ruthless u wnat to be.. i say just sack em all! hahah"]
                ,   [39, "Samuel", "bahaha i think we all can work this one out, its pretty easy"]
                ,   [43, "Li", "yeah oki, lock it in guys"]
        ],
        'BusinessCaseQuestion3_Hard' : [
                    [18, "Samuel", "oh this one is pretty easy"]
                ,   [22, "Li", "i think westernising would be a big problem, but if its a big US company maybe they wont care??"]
                ,   [30, "Conner", "they dont care..yeah but it woud be a nightmare tryng to educate everyone"]
                ,   [34, "Samuel","i could be any of them?? they all make some kinda sense"]
                ,   [39, "Kellie", "just put in what you think we dont have much time"]
        ],
        'BusinessCaseQuestion4_Hard' : [
                    [20, "Kellie", "i thik i remember learning something about this last year"]
                ,   [25, "Li", "far out could be B or D??"]
                ,   [29, "Samuel", "or it could be A as well"]
                ,   [34, "Li","what are you gonna choose? what does sequaciouslty mean??? "]
                ,   [37, "Kellie", "hang on ill read again"]
                ,   [42, "kellie", " i think it means in order? in a sequence??"]
		        ,   [48, "Samuel", "could be C?"]
                ,   [52, "Li", "I really dont know, im going with gut instinct, just put what you think"]
        ],
        'BusinessCaseQuestion5_Hard' : [
                     [16, "Li", "whoa they all seem reasonable"]
                ,    [24, "Conner", "yeah i know hmmmmm"]
                ,    [30, "Samuel", "im goinna go for D i think, haven on it could be maybe A???"]
                ,    [38, "Li","but will that work ofr an INdian employee??"]
                ,    [43, "Conner", "maybe B? job simplification"]
		,    [46, "Kellie", "just put what you think we are almost put of time!"]
        ],
        'InternalScoreTasks' : [
            [6, "Kellie", "Woo hoo i blizted it"] ,
            [9, "Kellie", "well done conner too!!"], 
            [12,"Samuel", "thanks! oh my god look at $participant"], 
            [15, "Conner", "ah bad luck dude"],
            [22, "Li", "man that is sooo unfair!!"], 
            [26, "Samuel", "$participant did you even read the cases??"], 
            [31, "Kellie", "we would have done soo much better just us"], 
            [33, "Li", "far out out team score is gonna be #$%^$"]
        ],
        'GroupScore' : [
            [5, "Li", "Oh WHAT look at out team score"], 
            [9, "Kellie", "BUGGER!!!"], 
            [15, "Conner", "we would have won if it wasnt for you know who's score!!!"], 
            [23, "Li", "maybe we could ask if they can just use our scores considering we didnt vote for $genderhim?"], 
            [30, "Conner", "yeah good idea"],
            [35, "Kellie", "well at least we didnt com last."]
        ]
    }
    CONFIG.EXPERIMENT_SETUP.Slides = CONFIG.EXPERIMENT_SETUP.Slides.concat(SharedSlides);
    return CONFIG;
});
