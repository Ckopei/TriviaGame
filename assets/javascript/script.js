$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    let intervalId;
    let counter = 10;
    let questionsAsked = 0;
    //reference "34-QuestionGame" classwork for q&a objects inside arrays. No idea how to work an image into it.
    //7 questions, answers, and true answer.
    var mainArray = [
        {
            question: "What kind of dog is the smallest?",
            answers: ["Chihuahua", "Labrador Retriever", "Beagle", "Husky"],
            //img here,
            answerTruth: "Chihuahua"
        },
        {
            question: "What is the largest type of dog?",
            answers: ["Beagle", "Golden Retriever", "Great Pyranese", "Poodle"],
            //img here,
            answerTruth: "Great Pyranese"
        },
        {
            question: "Which animal originated in Mexico?",
            answers: ["Maltese", "Chihuahua", "Yorkie", "Great Dane"],
            //img here,
            answerTruth: "Chihuahua"
        },
        {
            question: "What type of animal always stands on two legs?",
            answers: ["Chicken", "Snake", "Turtle", "None of the above"],
            //img here,
            answerTruth: "Chicken"
        },
        {
            question: "Which is my favorite kind of dog?",
            answers: ["Chihuahua", "Cat", "Turtle", "The correct answer is Chihuahua."],
            //img here,
            answerTruth: "Chihuahua"
        },
        {
            question: "What sound do dogs make?",
            answers: ["SQUEEEEEE", "REEEEEE", "AHHHHH", "Woof"],
            //img here,
            answerTruth: "Woof"
        },
        {
            question: "Which animal is known as the puppy of the sea?",
            answers: ["Lobster", "Narwhal", "Dolphin", "Manitee"],
            //img here,
            answerTruth: "Manitee"
        },

    ]


    //https://medium.com/@eric.stermer/setinterval-simply-put-is-a-timed-loop-652eb54bd5f8
    //brilliant explanation of for loops being just like setinterval
    var i = 0

    function decrement() {
        counter--;
        $(".time").empty()
        $(".time").html("<h2 class='text-center'>Time left: " + counter + "</h2>")
        if (counter === 0) {
            $(".killMe").empty();
            $(".killMe").append("<img class='gifYes' src='assets//images/incorrect.gif'>")
            $(".killMe").append("<h3 class='text-center'> Sorry, You have to make a choice! </h3>")
            $(".killMe").append("<h3 class='text-center'>The correct answer was: " + mainArray[i - 1].answerTruth + "</h3>")
            incorrect++;
            clearInterval(intervalId);
            appendStats();
            setTimeout(reset, 3000)
            // setTimeout(start, 5000);

        }
    }
    //I made a separate function to append my questions and answers so that my loop is not dependent or changed by my main game logic.
    //recursion was ruining my iterators.
    function reset() {

        $(".tracker").empty()
        i++
        clearInterval(intervalId)
        if (questionsAsked < mainArray.length) {
            appendQA()
        }
        else {
            $("#timer").empty()
            $(".killMe").empty();
            $(".killMe").append("<img class='gifYes' src='assets//images/finished.jpg'>")
            $(".killMe").append("<h3 class='text-center'> You finished the quiz! </h3>")
            $(".killMe").append("<button type='button' class='btn btn-danger'>Press me to restart!</button>")
            correctAnswers = 0;
            incorrectAnswers = 0;
            unansweredQuestions = 0;
            i = 0
            setTimeout(appendQA, 2000)
            // $("button").on("click", function () {
            //     correctAnswers = 0;
            //     incorrectAnswers = 0;
            //     unansweredQuestions = 0;
            //     i = 0;
            //     reset()
            // });
        }

        function appendQA() {
            counter = 10
            intervalId = setInterval(decrement, 1000)
            $(".killMe").empty();
            //append the question.
            $(".killMe").append("<h1>" + mainArray[i - 1].question + "</h1>");
            //append all answers of the object's array. use second iterator with for loop inside this timed function.
            for (var j = 0; j < mainArray[i - 1].answers.length; j++) {
                $(".killMe").append("<p>" + mainArray[i - 1].answers[j] + "</p")
            }
            questionsAsked++;
        }
    }

    //this is my function to append the correct and incorrect values after each click.
    function appendStats() {
        $(".tracker").empty()
        $(".tracker").append("<h3> Correct: " + correct + "</h3>")
        $(".tracker").append("<h3> Incorrect: " + incorrect + "</h3>")
    }


    function start() {

        //empty the button.
        //this is a set interval to run my decrement timer function every second. with Jorge's help, it's inside function(start)
        //to make it recursive. The on click starts it, and the if/else logic brings it back to start()
        clearInterval(intervalId);

        reset()
        //every time the function gets called, empty my correct and incorrect div, and append them updated.


        $(document).on("click", "p", function () {
            // var value = $(this).text refers to the CLICK. In Jquery it knows "this" is an event listener in this case.
            var value = $(this).text();

            // clearInterval(intervalId)

            if (value === mainArray[i - 1].answerTruth) {
                $("#timer").empty()
                $(".killMe").empty();
                console.log("great")
                $(".killMe").append("<img class='gifYes' src='assets//images/correct.gif'>")
                $(".killMe").append("<h3 class='text-center'> Congrats, you got that one right! </h3>")
                correct++;
                appendStats();
                clearInterval(intervalId)
                $(".time").empty()

                console.log(i);
                setTimeout(reset, 3000)

            }

            else if (value !== mainArray[i - 1].answerTruth) {
                $("#timer").empty()
                $(".killMe").empty();
                console.log("bad")
                $(".killMe").append("<img class='gifYes' src='assets//images/incorrect.gif'>")
                $(".killMe").append("<h3 class='text-center'> Sorry, that's not correct! </h3>")
                $(".killMe").append("<h3 class='text-center'>The correct answer was: " + mainArray[i - 1].answerTruth + "</h3>")
                incorrect++;
                appendStats()
                clearInterval(intervalId)
                $(".time").empty()
                console.log(i);
                setTimeout(reset, 3000)
            }

        });

        //To query dyanmic elements, always use document.element to find them. 


    };

    $("button").on("click", function () {

        start()
    });

});
