
var correct = 0;
var incorrect = 0;
//reference "34-QuestionGame" classwork for q&a objects inside arrays. No idea how to work an image into it.
var mainArray = [
    {
        question: "What kind of dog is the smallest?",
        answers: ["Chihuahua", "Labrador Retriever", "Beagle", "Husky"],
        //img here,
        answerLocation: 0
    },
    {
        question: "What is the largest type of dog?",
        answers: ["Beagle", "Golden Retriever", "Great Pyranese", "Poodle"],
        //img here,
        answerLocation: 2  
    },
    {
        question: "Which animal originated in Mexico?",
        answers: ["Maltese", "Chihuahua", "Yorkie", "Great Dane"],
        //img here,
        answerLocation: 1
    },
    {
        question: "Which is my favorite kind of dog?",
        answers: ["Chihuahua", "Cat", "Turtle", "The correct answer is Chihuahua."],
        //img here,
        answerLocation: 0
    }
]

//https://medium.com/@eric.stermer/setinterval-simply-put-is-a-timed-loop-652eb54bd5f8
//brilliant explanation of for loops being just like setinterval
var i = 0


function start() {
    //empty the button.
    i = 0;
    $("#fillMeIn").empty();
    //append the question.
    $("#fillMeIn").append("<h1>" + mainArray[i].question + "</h1>");
    //append all answers of the object's array. use second iterator with for loop inside this timed function.
    for (var j = 0; j < mainArray[i].answers.length; j++) {
    $("#fillMeIn").append("<p>" + mainArray[i].answers[j] + "</p")
    }
    i++;
    
}
//i want to use a setinterval to run start every 30 seconds
$("button").on("click",start)
// I need a start button that initiates my timer. 
//reference classwork "10-Stopwatch" and "08-SimpleTimer"
//setTimeout(function(){ alert("Hello"); }, 3000);

//do i need to wrap my entire code in the timeout?

//loop through my array of question and answer objects.

//for (var i = 0; if i < mainArray.length; i++) {}

//append questions to the page
    //$("parentelement").append("what-im-appending")
//append image below question
//append answers to the page, they function like buttons. maybe use all <p> tags as buttons.
    //$("p").on("click", answerFunction)

//if else's?
//↓ ↓ ↓ ↓ ↓ ↓
//maybe set answered to "false" before click, and on click set it to "True", for the timeout part below.
//event timer. in 15 seconds and nothing clicked, show "times up", show correct answer, wait 3secs, append next set.
//if correct, append funny doge .gif to page, timer for a few seconds, append next set iterate correct variable
//if incorrect, append sad doge.gif to page, timer for a few seconds, append next set. iterate incorrect variable.
// ↑ ↑ ↑ ↑ ↑
//if else's?

//at the end of the quiz, show the number of correct answers, incorrect, show percentage, and button to restart.
//whooooo boy, lots of jquery going on here. 