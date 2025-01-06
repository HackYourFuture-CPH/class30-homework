const quiz = { "SuperQuiz" :[
    {
    "id" : 1,
    "question":"Which country has the highest life expectancy?",
    "options":[
        {"a":"Spain",
         "b":"Denmark",
         "c":"Hong Kong",
         "d":"China"
        }
    ],
    "answer":"Hong Kong",
    "score":0,
    "status": ""
},
{
    "id" : 2,
    "question":"What phone company produced the 1100?",
    "options":[
        {"a":"Nokia",isCorrect: true,
         "b":"Apple",isCorrect: false,
         "c":"Motorola",isCorrect: false,
         "d":"Samsung",isCorrect: false,
        }
    ],
    "score":0,

},
{
    "id" : 3,
"question":"What is the capital of Ireland?",
"options":[
    {"a":"Dublina",isCorrect: false,
     "b":"Dublin",isCorrect: true,
     "c":"Cork",isCorrect: false,
     "d":"Belfast",isCorrect: false,
    }
],

"score":0,

},
{
    "id" : 4,
"question":"How many bones do we have in an ear?",
"options":[
    {"a":"5",isCorrect: false,
     "b":"2",isCorrect: false,
     "c":"we don't have",isCorrect: false,
     "d":"3",isCorrect: true,
    }
],

"score":0,


},
{
    "id" : 5,
"question":"What is the scientific theory that explains the origin of the universe?",
"options":[
    {"a":"The Origin theory",isCorrect: false,
     "b":"The Steady State Theory",isCorrect: false,
     "c":"The Multiverse Theory",isCorrect: false,
     "d":"The Big Bang Theory",isCorrect: true,
    }
],

"score":0,

    }
    ]
}

function check(){
    const correct = 0;
    const correct_answers =["Hong Kong","Nokia","Dublin","3","The Big Bang Theory"];

    $("label").each(function(index){
        console.log(index +": " + $(this).text() );
        if (correct_answers.includes($(this).text())){
            this.style.color ='green'
            correct++
        }else{
            this.style.color ='red'
        }
        
    });


}
