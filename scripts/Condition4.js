define(['Slide', 'SharedSlides'], function(Slide, SharedSlides){
    CONFIG = {
        EXPERIMENT_SETUP : {
            Team : ['Kellie', 'Samuel', 'Li', 'Conner'],
            SlideOrder : [
                'ParticpantInformationSheet'
            ,   'SalivaCollection'
            ,   'PersonalInformation'
            ,   'PreExperimentSurvey'
            ,   'VirtualTeamSelection'
            ,   'MCQuestion1_Easy'
            ,   'MCQuestion2_Easy'
            ,   'MCQuestion3_Easy'
            ,   'MCQuestion4_Easy'
            ,   'MCQuestion5_Easy'
            ,   'MCQuestion6_Easy'
            ,   'TaskPerformanceTestScores_Easy_Bad'
            ,   'PitchRequest'
            ,   'TeamMateSelection'
            ,   'TeamRequestResults'
            ,   'TeamIntroduction_Easy_Bad'
            ,   'BusinessCase_Easy'
            ,   'BusinessCaseQuestion1_Easy'
            ,   'BusinessCaseQuestion2_Easy'
            ,   'BusinessCaseQuestion3_Easy'
            ,   'BusinessCaseQuestion4_Easy'
            ,   'BusinessCaseQuestion5_Easy'
            ,   'BusinessCaseMCQScores_Easy_Bad'
            ,   'InternalScoreTasks_Easy_Bad'
            ,   'GroupScore_Easy'
            ,   'SecondSaliva'
            ,   'PostExperimentSurvey'
            ,   'ExperimentDebriefing'
            ,   'ThankYou'
            ],
            /* Name, MCQ Score, Gender, Age, Major,
             * Expected GPA, Pitch, Business Case Score. */
            FakeParticipants : [
                    ['Kellie', 6, 'F', 18, 'Business Management', 7, 'Im a straight 7 student.', 5]
                ,   ['Samuel', 6, 'M', 22, 'Finance', 7, 'I am really super smart!.', 4]
                ,   ['Li', 6, 'F', 20, 'Finance', 7, 'I have done business studies in my home country 3 yrs straight.', 4]
                ,   ['Conner', 6, 'M', 18, 'Economics', 7, 'I am top bloke!!.', 5]
                ,   ['Ravi', 6, 'M', 25, 'Business Management', 7, ':) :) :) Im sexy and you know it :) :) :).', 5]
                ,   ['Scott', 6, 'M', 22, 'Engineering', 6, 'I am a great team player.', 3]
                ,   ['Ella', 6, 'F', 18, 'Marketing', 7, 'I study hard and get good marks, was dux of business studies at school.', 5]
                ,   ['James', 6, 'M', 25, 'you NEED ME in your team!!!!', 6, 'I am the best.', 4]
                ,   ['Abdul', 5, 'M', 19, 'Economics', 7, 'Please pick me! please please pleas4.', 4]
                ,   ['Erica', 5, 'F', 32, 'Commerce', 5, 'Im a mature age student, and have worked in teams ofr 4 years and I have a wealth of knowledge and experience.', 5]
                ,   ['Candice', 5, 'F', 18, 'Accounting', 7, 'I was school captain last year.', 4]
                ,   ['Zu', 5, 'M', 19, 'Business Management', 6, 'I am smart and very good at maths too.', 4]
                ,   ['Anna', 4, 'F', 23, 'Political Science', 5, 'U know you want me.....', 3]
                ,   ['Jamie', 4, 'M', 26, 'Psychology', 7, 'I dont care if you pick me (reverse psychology :).', 3]
			    ,   ['Sol', 4, 'M', 19, 'Journalism', 5, 'We analyse business cases all the time so have previous experinece.',3]
                ,   ['Ricardo', 4, 'M', 19, 'Economics', 5, 'I give you $$$$.', 2]
                ,   ['Rita', 3, 'F', 22, 'Information Technology', 6, 'this is so lame,.. I dont know what to write.', 3]
                ,   ['Xiu-Lee', 3, 'M', 22, 'Maths', 7, 'You be very sorry if I not on your team.', 1]
                ,   ['Daina', 2, 'M', 22, 'International relations', 5, '"WTF???".', 0]
            ],
            Slides : []
        }
    }
    CONFIG.EXPERIMENT_SETUP.CHAT = {
        'TeamIntroduction_Easy_Bad' : [
                [6, "Kellie", "Hi everyone!"],
                [9, "Samuel", "Helloooo!!"],
                [12, "Conner", "Yo dudes!!"],
                [18, "Li", "Greetings my fellow team mates!"],
                [23, "Samuel", "Hey did you vote for $participant to be in our team?"],
                [30, "Samuel", "I didnt vote for $genderhim did you?"],
                [36, "Conner", "No i didnt"],
                [40, "Conner", "I didnt like $genderhis pitch"],
                [46, "Conner", "I just wanted cool people like you guys on the team... so we do well"],
                [52, "Li", "well why bother voting???"],
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
        'BusinessCase_Easy' : [
            [19, "Kellie", "Ok everyone read the case really carefully"],
            [23, "Kellie", "remember don't help $participant"],
            [29, "Li", "apparently we have to collaborate on our answers"],
            [35, "Samuel", "ok yeah only help who we voted for"],
	        [39, "Samuel", "ok because we get a team score.. so dont mess up guys!!"],
            [44, "Conner", "has anyone done this type of business case before?"],
            [58, "Li", "aahh this will be easy I did this last year in school"],
            [63, "Kellie", "Ok hurry up and read it guys the clock is ticking!!!"],
            [68, "Samuel", "dont let us down!"],
            [71, "Samuel", "Be smart guys everyone try and be fast"]
        ],
        'BusinessCaseQuestion1_Easy' : [
                    [16, "Conner", "oh yeah  I get it"]
                ,   [20, "Li", "I think i know the answer"]
                ,   [24, "Samuel", "it could be either a or C"]
                ,   [29, "Kellie", "yeah but your dealing with different cultures"]
                ,   [33, "Samuel", "yeah you have to take into account their business culture"]
                ,   [40, "Kellie", "Yea yeah true so it could be B if its from HQ..come on we gotta hurry hurry!!"]
                ,   [45, "Samuel", "just put in what you think im sure youll get it right"]
        ],
        'BusinessCaseQuestion2_Easy' : [
                [9, 'Li', 'did anyone do MGTS2606?? I think we did this last year'],
                [16, 'Kellie', ' no I didnt but my friend did,  think i know..'],
                [21, 'Conner', 'it depends on how ruthless u want to be... Just sack em all i say!!'],
                [29, 'Samuel', 'hahahah i think we all know what the answer to this one its A!!'],
                [35, 'Li', 'yeah lock it in guys']
        ],
        'BusinessCaseQuestion3_Easy' : [
            [12, 'Samuel', 'oh this one is easy too'],
            [16, 'Li', 'i think bringing in employees from other subsidiaries would be a big problem'],
            [21, 'Conner', 'I think its D both A + B'],
            [29, 'Kellie', 'yeah I agree']
        ],
        'BusinessCaseQuestion4_Easy' : [
            [10, 'Samuel', 'yeah apprently this happens all the time'],
            [14, 'Li', 'happens in my home country it not really fair'],
            [20, 'Conner', 'Ok guys what u reckon, I think we go for E both B and D'],
            [25, 'Kellie', 'yep I agree thats the one']
        ],
        'BusinessCaseQuestion5_Easy' : [
                [9, 'Li', 'what u think guys?'],
                [13, 'Kellie', ' I reckon it B'],
                [19, 'Conner', 'hang on read C and D they all sound legit'],
                [24, 'Samuel', 'yeah true I think its E then'],
                [31, 'Li', 'yeah Im sure E is correct']
        ],
        'InternalScoreTasks_Easy_Bad' : [
            [6, 'Li', 'wooo hoooo guys you all did great!!!! Man how the hell did I get one of those wrong???'],
             [12, 'Kellie', 'dont worry!! but far out that was pretty easy, well done everyone who got full marks'], 
             [16,'Kellie', ' yeah bad luck $participant'],
            [25, 'Conner', 'holy ^&*& how could u get any of those wrong?? were so easy !!'],
            [31, 'Samuel', 'well I suppose we didnt do too badly considering we didnt get all the team members we voted for']
        ],
        'GroupScore_Easy' : [
            [5, 'Li', 'Oh look at our team score!! '],
            [9, 'Kellie', 'BUGGER!!'],
            [12, 'Samuel', 'we would have won if it wasnt for you know who’s score!! '],
            [20, 'Kellie', ' maybe we can ask if they can just use our scores considering we didnt vote for $genderhim'],
            [28, 'Conner', 'well come on second is pretty good'],
            [33, 'Li', 'yeah good idea'],
            [39, 'Samuel', 'ok then well done to you guys']
        ]
    }
    CONFIG.EXPERIMENT_SETUP.Slides = CONFIG.EXPERIMENT_SETUP.Slides.concat(SharedSlides);
    return CONFIG;
});
