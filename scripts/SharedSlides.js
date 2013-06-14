BUSINESS_CASE_MCQ_CONTINUE_DELAY = 30;
BUSINESS_CASE_EASY_CONTENT='<p>GooDrug Inc. is a multinational company with over 3500 employees located across three countries. The head quarters and main distribution area are in the US, while the countries of production are China and India. With its historically best selling product “PainStop” the company held a market leading position on the painkiller US market until 2007. During the years 2008 and 2009 however GooDrug Inc. lost 15% of its market share.</p><p>The board of directors of GooDrug have called you, an independent business consultant, to meeting of all department heads to learn about the potential reasons for the losses and to work out strategies how to win back the market share.</p>';
BUSINESS_CASE_HARD_CONTENT='<p>GooDrug Inc. is a multinational corporation with over 3500 employees located across three countries. The headquarters and main distribution centre is in the US while the production is undertaken in subsidiaries located China and India. With its best selling product #FH1395 the company held a market leading position on the US market for analgesic drugs until the end of 2007. During the years 2008 and 2009, however, GooDrug Inc. lost 25% of its market share.</p><p>The board of directors called upon you, an independent business consultant, to a meeting of all department heads of GooDrug Inc. You learnt about market events during 2008 and 2009 and must help decide on optimal strategies to win back lost market share.</p><p>The heads of the departments have different approaches to explain the losses. The marketing team suggest the losses are due to changes in the direction of the product communication strategies initiated early 2008; the finance team insist the cause is incorrect point pricing strategies at the bottom of the distribution channels (pharmacies, hospitals, doctors); and HR believes unclear job descriptions and unrealistic performance expectations caused low morale and low production output in the offshore subsidiaries.</p><p>There have been several issues within this company. Firstly, the company merged with a large organisation that has a deeply entrenched authoritative hierarchical structure. The company is comprised of employees from diverse cultural backgrounds with disparate preferences about autonomy and power differentials; i.e. the American employees prefer a self-determined approach to task accomplishment, while the Indian and Chinese subsidiaries prefer a more directive approach.</p><p>The management team in the US is unable to identify the most probable reason for the loss.  Your task is to provide advice about different approaches to reorganise the internal management structure and production control mechanisms in order to regain the market share.</p>';

define(['Slide'], function(Slide){
    return [
        new Slide({
            name : 'ParticpantInformationSheet',
            acceptdecline : true,
            acceptbuttonlabel : 'Agree',
            declinebuttonlabel : 'Disagree',
            title : 'Welcome to MGTS1601',
            style : 'simple-text-content',
            textcontent : '<div class="align-left long-text"><hr><p><strong>Investigator:</strong> Jemma King</p><p><strong>Project title:</strong> The effect of task performance and virtual team selection on salivary hormone levels.</p><p><strong>Objectives:</strong> To investigate how task performance affects salivary hormone levels when working in a virtual team based scenario.</p><p><strong>Task process:</strong> In the first part of this study you will have your hormone levels measured using non-invasive saliva samples.  You will need to put some saliva in the small plastic tube at the start of the task (in the tube labeled <strong>PRETEST</strong>).</p><p>You will then need to compete a quick survey on how you are feeling. Following this you will be asked to solve some puzzles. When the puzzles are complete you will be asked to write a one line pitch explaining why you would be a good team member.</p><p>Students in other tutorials will be doing the same tasks at the same time you are.</p><p><p>Once everyone in your tutorial and the other classes have finished, the puzzle results, some demographic information and the team pitches from all participants will be displayed. You will use this information to choose which students you wish to be in your virtual team. The other students will see your puzzle results and one line pitch and will also choose members to be in their team. You will be matched with people you have selected who have also selected you. </p><p>Once assigned to a team you will work collaboratively to answer five multiple choice questions relating to a business case.</p><p>Results of this experiment will be completely confidential and anonymous. Participating in this study will be very helpful preparation for the final exam, although you are under no obligation to participate and may withdraw at any time. </p><p>If you participate in this study, the answers and information you provide will not be linked back to you as an individual.  The information will be stored in a secure environment and access to the data will be made available only to the members of the research team. Only aggregate data will be used in any publications. </p><p>If you are pregnant or have a diagnosed medical or psychological condition and you feel that participation in this study may affect your condition, you may withdraw from participation. </p><p>If you do participate and feel that you wish to debrief with a trained psychologist, you may contact:</p><p><strong>Professor Neal Ashkanasy.</strong><br>Professor of Management<br>UQ Business School<br>The University of Queensland<br>St Lucia QLD 4072<br><abbr title="Phone">P:</abbr> +61 7 3346 3281</p><p>This study adheres to the Guidelines of the ethical review process of The University of Queensland. You are welcome to discuss your participation in this study with the investigator Jemma King (j.king@business.uq.edu.au) or her academic advisor Neal Ashkanasy (3346 3281) at any time. </p><p>If you wish to receive your personal saliva test results please contact the investigator.</p><p>If you would like to speak to an officer of the University not involved in this study, you may contact the University\'s Ethics Officer on 336 53924.</p><hr><p><strong>I have been provided with all the relevant information about this study. I have had the opportunity to read this consent form, my questions have been answered satisfactorily, and I have been given the opportunity to withdraw without penalty.</strong></p></div>'
        }),
        new Slide({
            name : 'ParticpantInformationSheet_NoCollab',
            acceptdecline : true,
            title : 'Welcome to MGTS1601',
            style : 'simple-text-content',

            textcontent : '<div class="align-left long-text"><hr><p><strong>Investigator:</strong> Jemma King</p><p><strong>Project title:</strong> The effect of task performance and virtual team selection on salivary hormone levels.</p><p><strong>Objectives:</strong> To investigate how task performance affects salivary hormone levels when working in a virtual team based scenario.</p><p><strong>Task process:</strong> In the first part of this study you will have your hormone levels measured using non-invasive saliva samples.  You will need to put some saliva in the small plastic tube at the start of the task (in the tube labeled <strong>PRETEST</strong>).</p><p>You will then need to compete a quick survey on how you are feeling. Following this you will be asked to solve some puzzles. When the puzzles are complete you will be asked to write a one line pitch explaining why you would be a good team member.</p><p>Students in other tutorials will be doing the same tasks at the same time you are.</p><p><p>Once everyone in your tutorial and the other classes have finished, the puzzle results, some demographic information and the team pitches from all participants will be displayed. You will use this information to choose which students you wish to be in your virtual team. The other students will see your puzzle results and one line pitch and will also choose members to be in their team. You will be matched with people you have selected who have also selected you. </p><p>Results of this experiment will be completely confidential and anonymous. Participating in this study will be very helpful preparation for the final exam, although you are under no obligation to participate and may withdraw at any time. </p><p>If you participate in this study, the answers and information you provide will not be linked back to you as an individual.  The information will be stored in a secure environment and access to the data will be made available only to the members of the research team. Only aggregate data will be used in any publications. </p><p>If you are pregnant or have a diagnosed medical or psychological condition and you feel that participation in this study may affect your condition, you may withdraw from participation. </p><p>If you do participate and feel that you wish to debrief with a trained psychologist, you may contact:</p><p><strong>Professor Neal Ashkanasy.</strong><br>Professor of Management<br>UQ Business School<br>The University of Queensland<br>St Lucia QLD 4072<br><abbr title="Phone">P:</abbr> +61 7 3346 3281</p><p>This study adheres to the Guidelines of the ethical review process of The University of Queensland. You are welcome to discuss your participation in this study with the investigator Jemma King (j.king@business.uq.edu.au) or her academic advisor Neal Ashkanasy (3346 3281) at any time. </p><p>If you wish to receive your personal saliva test results please contact the investigator.</p><p>If you would like to speak to an officer of the University not involved in this study, you may contact the University\'s Ethics Officer on 336 53924.</p><hr><p><strong>I have been provided with all the relevant information about this study. I have had the opportunity to read this consent form, my questions have been answered satisfactorily, and I have been given the opportunity to withdraw without penalty.</strong></p></div>'
        }),
        new Slide({
            name : 'SalivaCollection',
            style : "saliva_collection",
            title : "Saliva sample",
            textcontent : '<p>Firstly we need to obtain a saliva sample to test your hormone levels. Please spit in the plastic tube labelled "PRE-TEST". It is very important that you do not get the tubes mixed up.</p><hr><p>Please then enter the ID number located on the tube in the space below, checking that it has been entered correctly.</p>',
        }),
        new Slide({
            name : 'PersonalInformation',
            style : "personal_information",
        }),
        new Slide({
            name : 'PreExperimentSurvey',
            style : 'survey',
            title : "How are you feeling at the moment?",
            textcontent : "Please complete this survey on how you are feeling in THIS moment",
            tableid : "preExperiemntSurvey",
			surveyOptions : [
                "Not at all"
            ,   "A little"
            ,   "Moderately"
            ,   "Quite a bit"
            ,   "Extremely"
            ],
            surveyItems : [
                "Interested", "Distressed", "Excited", "Upset", "Angry", "Strong", "Shaky", "Disgusted", "Guilty", "Scared", "Hostile", "Enthusiastic", "Proud", "Irritable", "Alert", "Ashamed", "Inspired", "Scornful", "Frightened", "Determined", "Nervous", "Loathing", "Attentive", "Jittery", "Active", "Afraid"
            ]
        }),
        new Slide({
            name : 'VirtualTeamSelection',
            title : 'Virtual Team Selection ',
            style : 'simple-text-content',
            nextbuttonlabel : 'Start',
            textcontent : '<p>You will have to form teams made up of students from this tutorial and from participants in other tutorials in the adjacent rooms. You will only communicate online do not communicate with people sitting around you.</p><p>We are looking at how individuals choose and work with team members under remote location conditions. First you will be asked to solve some puzzles. Then you will choose your team members based on their performance on the same puzzles. The other participants will do the same.</p><p>You will be given a business case to read and you will be asked to answer questions about the case with the help of your team members. Please complete these as FAST as possible! Participation is voluntary and you may opt out at any time.</p><p>Please do not speak with the people sitting next to you.</p><hr><p class="center"><strong>Click the start button if you agree to proceed.</strong></p>',
        }),
        new Slide({
            name : 'PitchRequest',
            title : "Personal Pitch",
            style : "selection_justification",
            textcontent : "Please write below ONE short statement describing why you would be a good team member, this is to convince the other students that they should select you for their team.",
            textcontent : "Proceed to the next page where you will see the other participants' information. You will use this to select your team mate preferences.",
        }),
        new Slide({
            name : 'TaskPerformanceTestScores',
            title : "Puzzle Performance Test Scores",
            tableid : "TaskPerformanceScoresTable",
            style : "task_performance_scores",
            textcontent : 'Below are your puzzle scores and how the other students performed.',
            scoreindex : 1,
            scoretotal : 6,
            easy : false,
            delay: 2
        }),
        new Slide({
            name : 'TaskPerformanceTestScores_Easy',
            title : "Puzzle Performance Test Scores",
            tableid : "TaskPerformanceScoresTable",
            style : "task_performance_scores",
            easy : true,
            scoretotal : 6,
            scoreobtained : 6,
            delay: 2
        }),
        new Slide({
            name : 'TaskPerformanceTestScores_Easy_Bad',
            title : "Puzzle Performance Test Scores",
            tableid : "TaskPerformanceScoresTable",
            style : "task_performance_scores",
            easy : true,
            scoretotal : 6,
            scoreobtained : 5,
            delay: 2
        }),

        new Slide({
            name : 'TeamMateSelection',
            title : "Select your teammates",
            style : "team_mate_selection",
            textcontent : '<p>Your team will consist of you and four other students. Please see the list underneath and decide which four people you wish to build a team with. Your request will be sent to the individuals that you select.</p><p>You have 4 preferences. Please press <strong>Select</strong> in the order of your preference.</p>'
        }),
        new Slide({
            name : 'TeamRequestResults',
            style : "team_request_results",
            positive : false,
            message : '<p>I am sorry you were NOT chosen by any participants to be in their team.</p><p>You have been randomly assigned to Team D.</p><p>Click continue to join team D!</p><hr>',
            textcontent : " Please wait and see which participants requested you to be in their team.",
        }),
        new Slide({
            name : 'TeamRequestResults_Positive',
            style : "team_request_results",
            positive : true,
            message : '<p>The team members you requested also want YOU in their team</p><p>WELL DONE!!</p><p>You are in Team D. Click proceed to join team D!</p>',

            textcontent : " Please wait and see which participants requested you to be in their team: ",
        }),
        new Slide({
            name : 'TeamIntroduction' ,
            style : "team_introduction",
            textcontent : "In the next step you will work together on a business case. To start working on the business case, please press the 'continue' button.",
            easy : false
        }),
        new Slide({
            name : 'TeamIntroduction_NoCollab' ,
            style : "team_introduction",
            textcontent : "To start working on the business case, please press the 'continue' button.",
            easy : false
        }),

        new Slide({
            name : 'TeamIntroduction_Easy' ,
            style : "team_introduction",
            textcontent : "To start working on the business case, please press the 'continue' button.",
            scoreobtained : 6,
            easy : true
        }),
        new Slide({
            name : 'TeamIntroduction_Easy_Bad',
            style : "team_introduction",
            textcontent : "In the next step you will work together on a business case. To start working on the business case, please press the 'continue' button.",
            scoreobtained : 5,
            easy : true
        }),
        new Slide({
            name : 'BusinessCase_Hard',
            style : 'business_case',
            title : 'Business Case - GooDrug Inc.',
            textcontent : "<p>Please read this business case carefully. In the next step you will have to answer five questions regarding this business case. Please use the chat function to collaborate with your team members. If you do not know the answer just select any answer randomly. You will have to work quickly.</p><hr>", 
            content: BUSINESS_CASE_HARD_CONTENT
        }),
        new Slide({
            name : 'BusinessCase_Easy',
            style : 'business_case',
            title : 'Business Case - GooDrug Inc.',
            textcontent : "<p>Please read this business case carefully. In the next step you will have to answer five questions regarding this business case. Please use the chat function to collaborate with your team members. If you do not know the answer just select any answer randomly. You will have to work quickly.</p><hr>", 
            content: BUSINESS_CASE_EASY_CONTENT
        }),
        new Slide({
            name : 'BusinessCase_Hard_NoCollab',
            style : 'business_case',
            title : 'Business Case - GooDrug Inc.',
            textcontent : "<p>Please read this business case carefully. In the next step you will have to answer five questions regarding this business case. If you do not know the answer just select any answer randomly. You will have to work quickly.</p><hr>", 
            content: BUSINESS_CASE_HARD_CONTENT
        }),
        new Slide({
            name : 'BusinessCase_Easy_NoCollab',
            style : 'business_case',
            title : 'Business Case - GooDrug Inc.',
            textcontent : "<p>Please read this business case carefully. In the next step you will have to answer five questions regarding this business case. If you do not know the answer just select any answer randomly. You will have to work quickly.</p><hr>", 
            content: BUSINESS_CASE_EASY_CONTENT
        }),


        new Slide({
            name : 'BusinessCaseMCQScores',
            textcontent : 'Below is listed your score and all student\'s scores for the Business Case MCQ\'s',
            title : "Business Case MCQ Scores",
            tableid : "businessCaseMCQScoresTable",
            style : "task_performance_scores",
            scoreindex : 7,
            scoretotal : 5,
            delay: 2,
            easy : false
        }),
        new Slide({
            name : 'BusinessCaseMCQScores_Easy',
            title : "Business Case MCQ Scores",
            tableid : "businessCaseMCQScoresTable",
            style : "task_performance_scores",
            scoreindex : 7,
            scoretotal : 5,
            scoreobtained : 5,
            delay: 2,
            easy : true
        }),
        new Slide({
            name : 'BusinessCaseMCQScores_Easy_Bad',
            title : "Business Case MCQ Scores",
            tableid : "businessCaseMCQScoresTable",
            style : "task_performance_scores",
            scoreindex : 7,
            scoretotal : 5,
            scoreobtained : 4,
            delay: 2,
            easy : true
        }),

        new Slide({
            name : 'InternalScoreTasks',
            style : 'internal_score_tasks',
            title : 'Internal Score Tasks + Business Case Questions (Team D)',
            easy : false
        }),
        new Slide({
            name : 'InternalScoreTasks_Easy',
            style : 'internal_score_tasks',
            title : 'Internal Score Tasks + Business Case Questions (Team D)',
            easy : true,
            scoreobtained : 5
        }),
        new Slide({
            name : 'InternalScoreTasks_Easy_Bad',
            style : 'internal_score_tasks',
            title : 'Internal Score Tasks + Business Case Questions (Team D)',
            easy : true,
            scoreobtained : 4
        }),
        new Slide ({
            name : 'GroupScore',
            style : 'group_score',
            title : 'Group Score',
            groupScores : [
                ['E', 52],
                ['B', 50],
                ['A', 48],
                ['D', 45],
                ['C', 43]
            ],
            textcontent : "<p>Congratulations TEAM E, you are the best performing team! Team D you came fourth. Please proceed to the next page.</p>",
        }),
        new Slide ({
            name : 'GroupScore_Easy',
            style : 'group_score',
            title : 'Group Score',
            groupScores : [
                ['B', 49],
                ['D', 48],
                ['A', 44],
                ['C', 40]
            ],
            textcontent : "",
        }),

        new Slide ({
            name : 'SecondSaliva',
            style : 'second_saliva',
            title : 'Please Give Your Second Saliva Sample',
            textcontent : "<p>We now need to test your hormone levels to see if they were affected by the task.</p><p>You now need to provide a second saliva sample. Please spit into the plastic tube labelled POSTTEST and check that the number on the tube corresponds to the number below.</p><p>Please place both samples in the plastic bag provided.</p>"
        }),
        new Slide({
            name : 'PostExperimentSurvey',
            style : 'survey',
            title : "Survey on how you felt about the study",
            tableid : 'postExperiemntSurvey',
            surveyOptions : [
                "Not at all"
            ,   "A little"
            ,   "Moderately"
            ,   "Quite a bit"
            ,   "Extremely"
            ]
            , surveyItems : [
                "Did you find this experiment stressful?",
                "Did you feel that you were included by your team members?",
                "Did you find the puzzle questions easy to answer?",
                "Did the study make you feel anxious?",
                "Did you feel left out by your team members?",
                "Did you find the puzzles frustrating?",
                "Did you have trouble completing the puzzles in time? ",
                "Did you think the business case questions were easy?",
                "Did you think your teammates were friendly?",
                "Did the chat function make you feel part of a real team?",
                "Did you feel relaxed during this experiment?",
                "Did you find the business case questions hard to understand?",
                "Did you feel that you were under time pressure?",
                "Did you think the business case questions were beyond your level of knowledge?",
                "Did you feel like you were under a lot of pressure during this study?"
            ]
        }),
        new Slide({
            name : 'ExperimentDebriefing',
            title : "UQ School of Business Experiment Debriefing",
            style : "simple-text-content",
            acceptdecline: true,
            acceptbuttonlabel : 'Consent',
            declinebuttonlabel : 'Opt-Out',
            textcontent : "<p>Thank you for participating in this research. The purpose of this study is to examine the relationship between emotional intelligence and stress regulation.</p><p>The saliva sample was for testing your levels of cortisol, which is a hormone secreted by the body when under stress. We were unable to disclose all the features of the study prior to testing your saliva, as research has shown that the mere mention of stress and intelligence testing can result in creating more stress, which would have affected the accuracy of the results.</p><p>The results of this test will be correlated with the results of the online emotional intelligence test you should have already completed. If you have not completed the emotional intelligence test yet, please do so AS SOON AS POSSIBLE. The content of the emotional intelligence test will be helpful to you for preparing for the final exam. These results will not be linked to your name, only an anonymous ID number will be used.</p><p>Participant's experience of this study was not identical, some individuals were given a hard business case study and were ostracised by their virtual team members; this condition was designed to create stress. Some were given an easy business case study, and were not ostracised. </p><p>Your virtual team members were fictitious and computer generated, they were not real participants. So please do not take what was said in the chat function as real.</p><p>The data on the answers to the performance task and the business case task will not be used for any purposes, they were included only to create stress. The participant's results will not be made public and will be destroyed after the experiment.</p><p>If you feel upset as a result of participating in this experiment, you may contact Prof. Neal Ashkanasy (certified psychologist) to talk about your experience in a confidential and supportive environment Ph: 07-3346-3281 or email for an appointment. n.ashkanasy@business.uq.edu.au</p><p>For your participation you will receive a coffee voucher.Thank you, your participation is very much appreciated. It is only with your involvement in studies like this are researchers able to further advance knowledge in important areas of research that we anticipate will benefit future students and employees in organisational contexts.</p><hr><p><strong>If you feel that you would not like your data to be included in the experiment, you may press opt-out and your results will be disregarded, if you consent please press the consent button below.</strong></p>"
        }),
        new Slide({
            name : 'ThankYou',
            title : 'Thank you for your participation!',
            style : 'simple-text-content',
            textcontent : "",
            hidebuttons : true
        }),
        /* ===========================================================
         * HARD MULTIPLE CHOICE QUESTIONS
         * ==========================================================
         */
        new Slide({
                name : "MCQuestion1_Hard"
            ,   startTimer: true
            ,   title : "Question 1"
            ,   style : "multi_choice_question"
            ,   richcontenttop: "Please select one option, you must select an answer to proceed, if you do not know the answer just select an option randomly."
            ,   richcontentleft: "<img src=\"images/Question1.jpg\"/>"
            ,   answers : [{label:'A'}
                          ,{label:'B'}
                          ,{label:'C'}
                          ,{label:'D'}
                          ,{label:'E'}]
            }),
        new Slide({
            name : "MCQuestion2_Hard"
        ,   title : "Question 2"
        ,   style : "multi_choice_question"
        ,   richcontenttop: "Which anagram will NOT spell out a clothing material?"
        ,   richcontentleft: "A. RUCKMAB<br/>B. ROCBADA<br/>C. GINMAGH<br/>D. THEREAL"
        ,   answers : [{label:'A'}
                      ,{label:'B'}
                      ,{label:'C'}
                      ,{label:'D'}]
        }),
        new Slide({
            name : "MCQuestion3_Hard"
        ,   title : "Question 3"
        ,   style : "multi_choice_question"
        ,   richcontenttop: "Which pattern comes next in the series?"
        ,   richcontentleft: "<img src=\"images/Question3.png\"/>"
        ,   answers : [{label:'1'}
                      ,{label:'2'}
                      ,{label:'3'}
                      ,{label:'4'}
                      ,{label:'5'}
                      ,{label:'6'}
                      ,{label:'7'}
                      ,{label:'8'}]
        }),
        new Slide({
            name : "MCQuestion4_Hard"
        ,   title : "Question 4"
        ,   style : "multi_choice_question"
        ,   richcontentleft: "<img src=\"images/Question4-a.png\"/><br/>Which is the missing circle?</br><img src=\"images/Question4-b.png\"/>"
        ,   answers : [{label:'A'}
                      ,{label:'B'}
                      ,{label:'C'}
                      ,{label:'D'}
                      ,{label:'E'}]

        }),
        new Slide({
            name : "MCQuestion5_Hard"
        ,   title : "Question 5"
        ,   style : "multi_choice_question"
        ,   richcontentleft: "<img src=\"images/Question5-a.png\"\><br/>When the above is folded to form a cube, which one of the following can be produced?<br/><img src=\"images/Question5-b.png\"\>"
        ,   answers : [{label:'A'}
                      ,{label:'B'}
                      ,{label:'C'}
                      ,{label:'D'}
                      ,{label:'E'}]

        }),
        new Slide({
            name : "MCQuestion6_Hard"
        ,   title : "Question 6"
        ,   style : "multi_choice_question"
        ,   richcontenttop: "Which pattern comes next?"
        ,   richcontentleft: "<img src=\"images/Question6.png\"/>"
        ,   answers : [{label:'1'}
                      ,{label:'2'}
                      ,{label:'3'}
                      ,{label:'4'}
                      ,{label:'5'}
                      ,{label:'6'}
                      ,{label:'7'}
                      ,{label:'8'}]

        }),
        /* ===========================================================
         * EASY MULTIPLE CHOICE QUESTIONS
         * ==========================================================
         */
        new Slide({
                name : "MCQuestion1_Easy"
            ,   title : "Question 1"
            ,   style : "multi_choice_question"
            ,   richcontenttop: "<p>Please select one option, you must select an answer to proceed, if you do not know the answer just select an option randomly.</p><p>Which set of blocks represents 212?</p>"
            ,   richcontentleft : '<div class="center"><img src="images/Question1-easy.png"></div>'
            //,   richcontenttop: "Question 1. Which place-value model shows 312?",
            ,   answers : [{label:'A'}
                          ,{label:'B'}]
            }),
        new Slide({
                name : "MCQuestion2_Easy"
            ,   title : "Question 2"
            ,   style : "multi_choice_question"
            ,   richcontenttop: "Pick the piece that is missing from the diagram below"
            ,   richcontentleft : '<div class="center"><img src="images/Question2-easy.png"></div>'
            ,   answers : [{label:'A'}
                          ,{label:'B'}
                          ,{label:'C'}
                          ,{label:'D'}]
            }),
        new Slide({
                name : "MCQuestion3_Easy"
            ,   title : "Question 3"
            ,   style : "multi_choice_question"
            ,   richcontentleft : '<div class="center"><img src="images/Question3-easy.png"></div>'
            //,   richcontentleft:
            ,   answers : [{label:'A ÷ , ='}
                          ,{label:'B x , ÷'}
                          ,{label:'C ÷ , x'}
                          ,{label:'D + , ='}]
// add submit answer button
            }),
        new Slide({
                name : "MCQuestion4_Easy"
            ,   title : "Question 4"
            ,   style : "multi_choice_question"
            ,   richcontentleft : '<div class="center"><img src="images/Question4-easy.png"></div>'
            //,   richcontentleft: 
            ,   answers : [{label:'A'}
                          ,{label:'B'}
                          ,{label:'C'}
                          ,{label:'D'}]
            }),
        new Slide({
                name : "MCQuestion5_Easy"
            ,   title : "Question 5"
            ,   style : "multi_choice_question"
            ,   richcontenttop: "<p>Which one of the five choices makes the best comparision?</p><p>A finger is to a hand the same as a leaf to a;</p> "
            ,   answers : [{label:'A Branch'}
                          ,{label:'B Tree'}
                          ,{label:'C Root'}
                          ,{label:'D Bark'}]

            }),
        new Slide({
                name : "MCQuestion6_Easy"
            ,   title : "Question 6"
            ,   style : "multi_choice_question"
            ,   richcontentleft : '<div class="center"><img src="images/Question6-easy.png"></div>'
            ,   answers : [{label:'A (ABC)'}
                          ,{label:'B (AAB)'}
                          ,{label:'C (ABB)'}]

            }),

        /* ===========================================================
         * HARD BUSINESS CASE QUESTIONS
         * ==========================================================
         */
        new Slide({
            name : 'BusinessCaseQuestion1_Hard',
            style : "business_case_question",
            continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
            title : "Question 1",
            question : "The board members have issued a directive to the subsidiary management teams to come up with a comprehensive organisational change strategy to respond to the loss of market share. Some of the initiatives that have been raised are listed below. In your opinion, which of the above strategies is the best approach to implement organisational change?",
            answers : [
                { label : "A",
                  answer : "Formal authority top down approach with uni-directional communication between the headquarters and subsidiaries." }
            ,   { label : "B",
                  answer : "Rewards / punishments approach with forced coercion and unilateral action \"command\"." }
            ,   { label : "C",
                  answer : "Change through expertise consultation, rational persuasion, expert testimony, demonstration projects" }
            ,   { label : "D",
                  answer : "Reference techniques, shared power, democratic consultation, empowerment, participative decisions, group process." }
            ]}),
        new Slide({
            name : 'BusinessCaseQuestion2_Hard',
            style : "business_case_question",
            continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
            title : "Question 2",
            question : "In this regard, which of the following strategies is optimal to implement the organisational change in response to the loss of market share?",
            answers : [
                { label : "A",
                  answer : "Educate stakeholders as to why change is necessary, each change decision and implementation will be preceded by intensive (although expensive) training sessions." }
            ,   { label : "B",
                  answer : "Implement change and explain later, to avoid becoming embroiled in organisational politics?" }
            ,   { label : "C",
                  answer : "Create systems of change organically, collaboratively and invent process strategies as the need arises" }
            ,   { label : "D",
                  answer : "Hire new employees that embody the characteristics the company wishes to create. Make redundant employees that are resistant to change." }
            ]}),
        new Slide({
            name : 'BusinessCaseQuestion3_Hard',
            style : "business_case_question",
            title : "Question 3",
            continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
            question : "In trying to re-gain market share in countries characterised as collective societies (i.e. India) the company would be best to channel its funds into:",
            answers : [
                { label : "A",
                  answer : "Intensive training programs espousing the benefits of Western business models that are to be implemented across the board regardless of cultural differences and nuances. This makes for a cost effective and streamlined supply chain and performance appraisal systems." }
            ,   { label : "B",
                  answer : " Transformational process architectures based on consultation with local experts in change management. This approach would result in a multitude of disparate business models, which may be advantageous in a local context but may be hard to manage on a multinational level." }
            ,   { label : "C",
                  answer : "Culturally sensitive marketing and education programs for the distributors and end users, while leaving the company structure intact." }
            ,   { label : "D",
                  answer : "Influencing team cohesiveness by homogenising the team members in all countries in terms of competence, attitude towards the leadership style, and their performance competencies." }
            ]}),
        new Slide({
            name : 'BusinessCaseQuestion4_Hard',
            style : "business_case_question",
            title : "Question 4",
            continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
            question : "Which of the following approaches is ideal to facilitate the negotiations between the management in the US headquarters and the production teams from the overseas subsidiaries?",
            answers : [
                { label : "A",
                  answer : "Classic two-party negotiation; this strategy involves the task to discover the respective reservation points and then working towards an agreement that is acceptable to each party." }
            ,   { label : "B",
                  answer : "Distributive or competitive negotiation; where the focus is on positions that conflicting entities stake out or declare." }
            ,   { label : "C",
                  answer : "Integrative or principled negotiation, where the focus is on the 'merits' of the issues. This approach is characterised as a problem solving strategy that has proven effective in horizontal negotiation processes only." }
            ,   { label : "D",
                  answer : "Vertical negotiation; a style that is more directive / authoritative and would therefore would require the teams of the overseas subsidiaries to respond sequaciously." },
            ]}),
        new Slide({
            name : 'BusinessCaseQuestion5_Hard',
            style : "business_case_question",
            title : "Question 5",
            continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
            question : "The employees of the Indian subsidiary are resistant to adopt the change strategies suggested by the US headquarters. Which of the following job arrangement and motivation strategies is optimal to achieve compliance of the Indian employees considering that the end goal is to return to the original market share",
            answers : [
                { label : "A",
                  answer : "Intrinsic motivation strategy; i.e. highlighting work factors and aspects that are perceived as pleasant and enjoyable by the Indian workers." }
            ,   { label : "B",
                  answer : "Job simplification or job engineering strategy; i.e. standardising work procedures and employing people in clearly defined and specialised tasks." }
            ,   { label : "C",
                  answer : "Job enlargement strategy; i.e. increasing the breath of the jobs by adding to the variety of tasks performed by the workers" }
            ,   { label : "D",
                  answer : "Job enrichment strategy; i.e. increasing the depth of a job (vertical loading) in contrast to job rotation (horizontal loading)." }
            ]}),
        /* ===========================================================
         * EASY BUSINESS CASE QUESTIONS
         * ==========================================================
         */
        new Slide({
                name : 'BusinessCaseQuestion1_Easy',
                continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
                style : "business_case_question",
                title : "Question 1",
                question : "The marketing team reports that in 2007 the competitor Pflatzer Inc. entered the market with a new product PainQuell using a new improved production technology, cannibalising the share of PainStop. The heads of the different departments have different proposals how to respond to the loss and how to gain back market share. Which of the following strategies would you advise to implement?",
                answers : [
                    { label : "A",
                      answer : "Slightly reduce price of PainStop to make it attractive to the lost customers;" }
                ,   { label : "B",
                      answer : "Increase production of PainStop to outnumber Pflatzers production;" }
                ,   { label : "C",
                      answer : "Invest several millions in trying to improve the product by adopting new technology;" }
                ,   { label : "D",
                      answer : "Withdraw from the market." }
                ]})
        ,   new Slide({
                name : 'BusinessCaseQuestion2_Easy',
                continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
                style : "business_case_question",
                title : "Question 2",
                question : "The board members want to implement an organisational change strategy to respond to the loss of market share. Some of the ideas raised are below. In your opinion, which of the below strategies would be the best approach to implement organisational change;",
                answers : [
                    { label : "A",
                      answer : "Consult with the management teams in each off shore subsidiary, devise individual change strategies that are culturally sensitive and implement extensive training programs for employees;" }
                ,   { label : "B",
                      answer : "Identify and promote the employees that embody the Western business characteristics that most resemble those valued by the US headquarters, and make redundant the employees that are resistant to change;" }
                ,   { label : "C",
                      answer : "Investigate which subsidiary is performing the best out of the US, India and China, and implement the business strategy of that subsidiary in all other locations regardless of cultural differences and nuances;"}
                ,   { label : "D",
                      answer : "Embed a company spy into Pflatzer, copying the strategy they use."}]}),
              
        ,   new Slide({
                name : 'BusinessCaseQuestion3_Easy',
                continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
                style : "business_case_question",
                title : "Question 3",
                question : "In trying to re-gain market share in countries characterised as collective societies (i.e India) the company would be best to channel its funds into:",
                answers : [
                    { label : "A",
                      answer : "Intensive training programs on how best to sell PainStop products within culturally specific markets;" }
                ,   { label : "B",
                      answer : " Hire consultants with local selling expertise;" }
                ,   { label : "C",
                      answer : "Bringing in high performing employees from other subsidiaries, make redundant all local non performing employees;" }
                ,   { label : "D",
                      answer : "Both A + B." }]}),
                
        ,   new Slide({
                name : 'BusinessCaseQuestion4_Easy',
                continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
                style : "business_case_question",
                title : "Question 4",
                question : "It was found that in some subsidiaries employees were hired and promoted based on social standing, family ties (nepotism) and not on merit. The best way to overcome this would be to:",
                answers : [
                    { label : "A",
                      answer : "Turn a blind eye, as it is culturally entrenched and would be too hard to change;" }
                ,   { label : "B",
                      answer : "Implement a comprehensive HR and  performance appraisal strategies  which have clearly defined hire and promotion criteria based on merit;" }
                ,   { label : "C",
                      answer : "Conduct an investigation into who had been hired or promoted this way, test the employees against the performance criteria, and terminate their position if they fail;"}
                ,   { label : "D",
                      answer : "Educate the managers and HR staff as to why this practice may jeopardise the integrity and financial stability of the company"}
                ,   { label : "E",
                      answer : " Both B + D"}]}),
        ,   new Slide({
                name : 'BusinessCaseQuestion5_Easy',
                continuedelay : BUSINESS_CASE_MCQ_CONTINUE_DELAY, 
                style : "business_case_question",
                title : "Question 5",
                question : "The company has decided that employees need to work harder without increased pay in order to save the organisation. Which is the best way to motivate employees?",
                answers : [
                    { label : "A",
                      answer : "Pressure tactics; use demands threats, intimidation, elicit fear;" }
                ,   { label : "B",
                      answer : "Exchange tactics; promise that if the employees work hard and market share is regained they will receive rewards once the company is more profitable;" }
                ,   { label : "C",
                      answer : "Rational persuasion; use logical arguments and factual evidence as to why this is necessary;" }
                ,   { label : "D",
                      answer : "Consultation tactics; seek participation in the strategy from key employees;" }
                ,   { label : "E",
                      answer : "Both B + C + D "}]})
    ];
});
