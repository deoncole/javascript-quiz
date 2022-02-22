// create elements for each of the div by getting the id's
var topInfoEl = document.getElementById("topInfo");
var quizQuestionEl = document.getElementById("quizQuestion");
var quizResultEl = document.getElementById("quizAnswers");

// create divs for each of the elements to display content to the user
var highScoreEl = document.createElement("div");
highScoreEl.className = "highScoreText";
var quizTimeEl = document.createElement ("div");
var mainQuestionEl = document.createElement ("div");
var choiceEl = document.createElement("div");
var resultEl = document.createElement("div");


// append the div's to the parent containers
topInfoEl.append(highScoreEl, quizTimeEl);
quizQuestionEl.append(mainQuestionEl, choiceEl);
quizResultEl.appendChild(resultEl);

// variable to hold the time  
var timeCounter="";

// set text to the displayed elements
highScoreEl.textContent = "View High Scores";
quizTimeEl.textContent = "Time: " + timeCounter;
// resultEl.textContent = "results go here";

// set the styling of the displayed div's
highScoreEl.setAttribute("style", "color:#177648");
mainQuestionEl.setAttribute("style", "width:400px; margin: 0 auto; font-style:bold; font-size:30px;");
// choiceEl.setAttribute("style", "width:400px; margin: 15px auto 0;");
resultEl.setAttribute("style", "margin:30px auto 0; border-top: 2px solid #75170b; width:400px; color: #777777; font-size:25px; font-style: italic;");

// create a function that will hold the question object and return the array of objects
var questionsAndAnswers = function (){
    // create a class to hold the objects needed
    class quizQuesAns{
        constructor(question, answer1, answer2, answer3, answer4){
            this.question = question;
            this.answer1 = answer1;
            this.answer2 = answer2;
            this.answer3 = answer3;
            this.answer4 = answer4;
        }
    }

    // create a empty array
    let quiz = [];

    // create new objects of the quizQuesAns class that holds the questions and answers
    let ques1 = new quizQuesAns("If a button is clicked, what event Handler is invoked?", "OnSubmit()", "onLoad()", "IsPostBack()", "OnClick()");
    let ques2 = new quizQuesAns("JavaScript file has an extension of:", ".java", ".js", ".javascript", ".xml");
    let ques3 = new quizQuesAns("Which of the dialog box display a message and a data entry field?", "alert()", "prompt()", "confirm()", "msg()");
    let ques4 = new quizQuesAns("Inside which HTML element do we put the JavaScript", "Js", "JavaScript", "Script", "Scripting");
    let ques5 = new quizQuesAns("What is a function associated with an object called?", "Function", "Method", "Link", "None");
    let ques6 = new quizQuesAns("Inside what element do you put the JavaScript?", "<var>", "<script>", "<section>", "<code>");
    let ques7 = new quizQuesAns("How do you declare a new date in JavaScript?", "var date=Date()", "var date=date('now')", "var date=new Date()", "var date=date().current()");
    let ques8 = new quizQuesAns("Which array method sorts the elements of an array?", "sort()", "changeOrder(order)", "order()", "None of the above");
    let ques9 = new quizQuesAns("How do you round the number 5.35 to the nearest Integer?", "rnd(5.35)", "Math.rnd(5.35)", "round(5.35)", "Math.round(5.35)");
    let ques10 = new quizQuesAns("How do you get cookies in JavaScript?", "window.cookies", "location.cookies", "document.cookie", "document.cookies");

    // set the array to the objects
    quiz=[ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10];
    
    // return the array
    return quiz;
}

var showQuesAnswer = function(){

    var quizQA = questionsAndAnswers();
    var question = Math.floor(Math.random() * quizQA.length);
    console.log(question);

    var seenQuestion = [];

    var choicesEl = document.createElement("ul");
    
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    li1.className="choicesList";
    li2.className="choicesList";
    li3.className="choicesList";
    li4.className="choicesList";

    li1.textContent = quizQA[question].answer1;
    li2.textContent = quizQA[question].answer2;
    li3.textContent = quizQA[question].answer3;
    li4.textContent = quizQA[question].answer4;

    li1.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px;");
    li2.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px;");
    li3.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px;");
    li4.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px;");

    choicesEl.append(li1, li2, li3, li4);
    choiceEl.appendChild(choicesEl);

    function makeChoice(event){
        console.log(event.target)
    }

    if(!seenQuestion.includes(question)){
        mainQuestionEl.textContent = quizQA[question].question;
        seenQuestion.push(question);
    }

    choicesEl.addEventListener("click", makeChoice);

};

// function to start the quiz
var startQuiz = function(){

    //Hide the high score element
    highScoreEl.style.display="none";
    resultEl.style.display="block";

    // mainQuestionEl.textContent = "Main questions go here";
    choiceEl.setAttribute("style", "width:300px; margin: 15px auto 0;");
    // choiceEl.textContent = "Choices go here";

    showQuesAnswer();

};

// create a function to launch when the user opens the application and clicks the start button
var openQuiz = function(){

    // set the styling for the main question container to display the instructions
    mainQuestionEl.style.textAlign="center";
    mainQuestionEl.innerHTML = "<p>Javascript Quiz Challenge</p> \r <span class='quizDesc'>Try to answer the code related javascript questions within the time limit. Remember, time will be deducted for every wrong answer. Good Luck!<span/>"
    
    // create a div to hold the start button. set a class for styling in css
    var startEl = document.createElement("div");
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start";
    startButtonEl.className = "startBtn"

    // set the styling for the choice container, append the start button container to it and the button to the start container. hide the results container
    choiceEl.setAttribute("style", "display:flex; justify-content:center; align-items:center;");
    startEl.appendChild(startButtonEl);
    choiceEl.appendChild(startEl);
    resultEl.style.display="none";

    startButtonEl.addEventListener("click", function(){
        
        var timeRemaining = 15;
        var countDown = setInterval(function () {
    
            if (timeRemaining > 9){
                quizTimeEl.textContent = "Time: 00:" + timeRemaining;
                timeRemaining--;
                timeCounter = timeRemaining;
            }  else if (timeRemaining < 10 && timeRemaining >= 1){
                quizTimeEl.textContent = "Time: 00:0" + timeRemaining;
                timeRemaining--;
                timeCounter = timeRemaining;
            }  else if (timeRemaining === 0) {
                clearInterval(countDown);
                quizTimeEl.style.display="none";
                timeRemaining=59;
            }
        }, 1000);

        startQuiz();
        choiceEl.removeChild(startEl);
    });

};

openQuiz();