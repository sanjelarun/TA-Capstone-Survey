Survey
    .StylesManager
    .applyTheme("modern");

var json = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "question1",
     "title": "Reviewer Name"
    },
    {
     "type": "text",
     "name": "question2",
     "title": "Student Name"
    },
    {
     "type": "dropdown",
     "name": "question3",
     "title": "Week ",
     "choices": [
      {
       "value": "item1",
       "text": "Week 1"
      },
      {
       "value": "item2",
       "text": "Week 2"
      },
      {
       "value": "item3",
       "text": "Week 3"
      },
      {
       "value": "item4",
       "text": "Week 4"
      },
      {
       "value": "item5",
       "text": "Week 5"
      },
      {
       "value": "item6",
       "text": "Week 6"
      },
      {
       "value": "item7",
       "text": "Week 8"
      }
     ]
    },
    {
     "type": "comment",
     "name": "question4",
     "title": "What are the tasks performed by the student this week?"
    },
    {
     "type": "text",
     "name": "question5",
     "title": "How many hours has the student worked? (this might include their research hours as well)"
    },
    {
     "type": "comment",
     "name": "question6",
     "title": "What task is the student going to work for coming weeks?"
    },
    {
     "type": "text",
     "name": "question7",
     "title": "Git commits and quality of commits this week by the student? "
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "title": "Is the student working on the same task as mentioned in the previous week?",
     "choices": [
      {
       "value": "item1",
       "text": "Yes "
      },
      {
       "value": "item2",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question9",
     "title": "Is there good communication and team work with in the group?",
     "choices": [
      {
       "value": "item1",
       "text": "Yes"
      },
      {
       "value": "item2",
       "text": "In the middle"
      },
      {
       "value": "item3",
       "text": "No"
      }
     ]
    },
    {
     "type": "rating",
     "name": "question10",
     "title": "Grade for this week? ( 1 -  Worst  and 5 - Best)"
    },
    {
     "type": "comment",
     "name": "question11",
     "title": "Remarks or Comments about the student? "
    }
   ],
   "title": "Capstone Weekly Review",
   "description": "Individual Student Review"
  }
 ]
}; 
window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});