define(['Slide', 'SharedSlides'], function(Slide, SharedSlides){
    CONFIG = {
        EXPERIMENT_SETUP : {
            Team : [],
            SlideOrder : [
                'ParticpantInformationSheet_NoCollab'
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
            ,   'TaskPerformanceTestScores_Easy'
            ,   'PitchRequest'
            ,   'TeamMateSelection'
            ,   'TeamRequestResults_Positive'
            ,   'TeamIntroduction_Easy'
            ,   'BusinessCase_Easy_NoCollab'
            ,   'BusinessCaseQuestion1_Easy'
            ,   'BusinessCaseQuestion2_Easy'
            ,   'BusinessCaseQuestion3_Easy'
            ,   'BusinessCaseQuestion4_Easy'
            ,   'BusinessCaseQuestion5_Easy'
            ,   'BusinessCaseMCQScores_Easy'
            ,   'InternalScoreTasks_Easy'
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
        'TeamIntroduction_Easy' : [
            [6, "$preference1", "Hi everyone!"],
            [10, "$preference2", "Helloooo!!"],
			[15, "$preference3", "Yo dudes!!"],
            [17, "$preference4", "Greetings my fellow team mates!"],
            [19, "$preference1", "Hey glad to have you on our team $participant u seem pretty cool!!"],
			[23, "$preference3", "yeah were gonna do great, well i hope :)"],
			[27, "$preference2", "yeah happy to have all of you in the team too "],
			[30, "$preference4", "so good luck everyone, make sure you read the questions really well"]
        ],
        'InternalScoreTasks_Easy' :  [
            [5, "$preference4", "Hey well done team"],
            [8, "$preference1", "hola! we all did great they were super easy questions"],
            [12, "$preference4", "yeah thanks for trying your hardest"],
            [16, "$preference2",  "yeh i think we make a pretty good team"],
            [21, "$preference3", "best of luck with the rest of the semester guys"]
        ]
    };

    CONFIG.EXPERIMENT_SETUP.Slides = CONFIG.EXPERIMENT_SETUP.Slides.concat(SharedSlides);
    return CONFIG;
});
