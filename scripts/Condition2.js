define(['Slide', 'SharedSlides'], function(Slide, SharedSlides){
    CONFIG = {
        EXPERIMENT_SETUP : {
            Team : [], //(insert particiapnt preferences)
            SlideOrder : [
		        'ParticpantInformationSheet_NoCollab'
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
            ,   'TeamRequestResults_Positive'
            ,   'TeamIntroduction_NoCollab'
            ,   'BusinessCase_Hard_NoCollab'
            ,   'BusinessCaseQuestion1_Hard'
            ,   'BusinessCaseQuestion2_Hard'
            ,   'BusinessCaseQuestion3_Hard'
            ,   'BusinessCaseQuestion4_Hard'
            ,   'BusinessCaseQuestion5_Hard'
            ,   'BusinessCaseMCQScores'
            ,   'InternalScoreTasks'
            ,   'SecondSaliva'
            ,   'PostExperimentSurvey'
            ,   'ExperimentDebriefing'
            ,   'ThankYou'
            ],
            /* Name, MCQ Score, Gender, Age, Major,
             * Expected GPA, Pitch, Business Case Score. */
            FakeParticipants : [
                    ['Kellie', 5, 'F', 18, 'Business Management', 7, 'Im a straight 7 student.', 5]
                ,   ['Samuel', 5, 'M', 22, 'Finance', 7, 'I am really super smart!.', 4]
                ,   ['Li', 5, 'F', 20, 'Finance', 7, 'I have done business studies in my home country 3 yrs straight.', 4]
                ,   ['Conner', 4, 'M', 18, 'Economics', 7, 'I am top bloke!!.', 5]
                ,   ['Ravi', 4, 'M', 25, 'Business Management', 7, ':) :) :) Im sexy and you know it :) :) :).', 5]
                ,   ['Scott', 3, 'M', 22, 'Engineering', 6, 'I am a great team player.', 3]
                ,   ['Ella', 3, 'F', 18, 'Marketing', 7, 'I study hard and get good marks, was dux of business studies at school.', 5]
                ,   ['James', 2, 'M', 25, 'you NEED ME in your team!!!!', 6, 'I am the best.', 4]
                ,   ['Abdul', 2, 'M', 19, 'Economics', 7, 'Please pick me! please please pleas4.', 4]
                ,   ['Erica', 2, 'F', 32, 'Commerce', 5, 'Im a mature age student, and have worked in teams ofr 4 years and I have a wealth of knowledge and experience.', 5]
                ,   ['Candice', 2, 'F', 18, 'Accounting', 7, 'I was school captain last year.', 4]
                ,   ['Zu', 2, 'M', 19, 'Business Management', 6, 'I am smart and very good at maths too.', 4]
                ,   ['Anna', 2, 'F', 23, 'Political Science', 5, 'U know you want me.....', 3]
                ,   ['Jamie', 2, 'M', 26, 'Psychology', 7, 'I dont care if you pick me (reverse psychology :).', 3]
			    ,   ['Sol', 2, 'M', 19, 'Journalism', 5, 'We analyse business cases all the time so have previous experinece.',3]
                ,   ['Ricardo', 2, 'M', 19, 'Economics', 5, 'I give you $$$$.', 2]
                ,   ['Rita', 1, 'F', 22, 'Information Technology', 6, 'this is so lame,.. I dont know what to write.', 3]
                ,   ['Xiu-Lee', 1, 'M', 22, 'Maths', 7, 'You be very sorry if I not on your team.', 1]
                ,   ['Daina', 0, 'M', 22, 'International relations', 5, '"WTF???".', 0]
                ,   ['$participant', 1, null, null, null, null, null, 2]
            ],
            Slides : [],
        }
    }
    CONFIG.EXPERIMENT_SETUP.CHAT = {
        'TeamIntroduction_NoCollab' : [
            [6, "$preference1", "Hi everyone!"],
            [10, "$preference2", "Helloooo!!"],
			[15, "$preference3", "Yo dudes!!"],
            [19, "$preference4", "Greetings my fellow team mates!"],
            [24, "$preference1", "Hey glad to have you on our team $participant u seem pretty cool!!"],
			[30, "$preference3", "yeah were gonna do great, well i hope :)"],
			[33, "$preference2", "yeah happy to have all of you in the team too "],
			[37, "$preference4", "so good luck everyone, make sure you read the questions really well"]
        ],
        'InternalScoreTasks' :  [
            [6, "$preference4", "Hey well done team"],
            [9, "$preference1", "hola! we all did great they were pretty hard questions"],
            [14, "$preference4", "yeah thanks for trying your hardest"],
            [19, "$preference2",  "yeh i think we make a pretty good team"],
            [22, "$preference3", "best of luck with the rest of the semester guys"]
        ], 
    }
    CONFIG.EXPERIMENT_SETUP.Slides = CONFIG.EXPERIMENT_SETUP.Slides.concat(SharedSlides);
    return CONFIG;
});
