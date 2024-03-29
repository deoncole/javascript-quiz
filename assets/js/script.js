// create elements for each of the div by getting the id's
var topInfoEl = document.getElementById("topInfo");
var quizQuestionEl = document.getElementById("quizQuestion");
var quizResultEl = document.getElementById("quizAnswers");

// create divs for each of the elements to display content to the user
var highScoreEl = document.createElement("div");
highScoreEl.className = "highScoreText";
var quizTimeEl = document.createElement("div");
var mainQuestionEl = document.createElement("div");
var choiceEl = document.createElement("div");
var resultEl = document.createElement("div");

// append the div's to the parent containers
topInfoEl.append(highScoreEl, quizTimeEl);
quizQuestionEl.append(mainQuestionEl, choiceEl);
quizResultEl.appendChild(resultEl);

// variable to hold the time  
var timeCounter = "";

// set text to the displayed elements
highScoreEl.textContent = "View High Scores";
quizTimeEl.textContent = "Time: " + timeCounter;
// resultEl.textContent = "results go here";

// set the styling of the displayed div's
highScoreEl.setAttribute("style", "color:#177648");
mainQuestionEl.setAttribute("style", "width:400px; margin: 0 auto; font-style:bold; font-size:30px;");
// choiceEl.setAttribute("style", "width:400px; margin: 15px auto 0;");
resultEl.setAttribute("style", "margin:30px auto 0; border-top: 2px solid #75170b; width:400px; color: #777777; font-size:25px; font-style: italic;");

// variable to hold the time
var timer;
// varaible to hold the user's score
var score = 0;

// create an array to hold all of the high scores
var allHighScore = [];

// create an object to hold the user's name and score
var userNameScore = {name:"", score:""};

// function to show the high scores
var showAllScores = function(){
    // create elements
    var scoreTitleEL = document.createElement("div");
    var scoreList = document.createElement("div");
    var scoreLi = document.createElement("li");
    var startOverBtn = document.createElement("button");
    var clearScoreBtn = document.createElement("button")

    // create classes for styling
    scoreList.className = "scoreList"
    startOverBtn.className = "submitBtn";
    clearScoreBtn.className = "submitBtn";

    // append the children to the parent elements
    mainQuestionEl.appendChild(scoreTitleEL);
    mainQuestionEl.appendChild(scoreList);
    mainQuestionEl.appendChild(startOverBtn);
    mainQuestionEl.appendChild(clearScoreBtn);

    // set the text content of each element
    scoreTitleEL.textContent = "High Scores";
    startOverBtn.textContent = "Start Over";
    clearScoreBtn.textContent = "Clear All Scores";

    // get the info from local storage
    var users = localStorage.getItem("highScores");
    var allScores = JSON.parse(users);

    //add the score from the local storage
    scoreList.textContent = allScores.name + " - " + allScores.score;

    var scoreCleared = false;
    // start the quiz over by clearing out the child nodes
    startOverBtn.addEventListener("click", function(){
        if (scoreCleared){
            mainQuestionEl.removeChild(scoreTitleEL);
            mainQuestionEl.removeChild(startOverBtn);
            mainQuestionEl.removeChild(clearScoreBtn);
            // document.location.reload();
        } else {
            mainQuestionEl.removeChild(scoreTitleEL);
            mainQuestionEl.removeChild(scoreList);
            mainQuestionEl.removeChild(startOverBtn);
            mainQuestionEl.removeChild(clearScoreBtn);
        }

        // reload the page to start over
        document.location.reload();
    });

    // clear the local stoarage
    clearScoreBtn.addEventListener("click", function(){
        mainQuestionEl.removeChild(scoreList);
        scoreCleared = true
        localStorage.clear();
    });

}

// function to show the user's score and allow input to save
var showScore = function (){
    mainQuestionEl.textContent = "";
    choiceEl.style.display = "none";
    resultEl.style.display = "none";
    var finishedEl = document.createElement("div");
    var scoreEl = document.createElement("div");
    var initialsEl = document.createElement("div");
    var initialsFormEl = document.createElement("form");
    var initialsBtnEl = document.createElement("button");
    var initialsInput = document.createElement("input");
    initialsInput.type = "text";
    initialsInput.name = "initials-text";
    initialsFormEl.appendChild(initialsInput);
    initialsBtnEl.textContent = "Submit";
    initialsBtnEl.className = "submitBtn";

    mainQuestionEl.appendChild(finishedEl);
    mainQuestionEl.appendChild(scoreEl);
    mainQuestionEl.appendChild(initialsEl);

    initialsEl.setAttribute("style", "display:flex justify-content:center;");
    initialsEl.textContent = "Enter your initials to save your score: ";
    initialsEl.appendChild(initialsFormEl);
    initialsEl.appendChild(initialsBtnEl);

    scoreEl.setAttribute("style", "font-style:italic;");

    finishedEl.textContent = "Quiz Complete!!";
    scoreEl.textContent = "Your Score is " + score;

    // function to save the user's score to local storage
    initialsBtnEl.addEventListener("click", function(){
        userNameScore.name = initialsInput.value;
        userNameScore.score = score;
        allHighScore.push(userNameScore);
        localStorage.setItem("highScores", JSON.stringify(userNameScore));
        mainQuestionEl.removeChild(finishedEl);
        mainQuestionEl.removeChild(scoreEl);
        mainQuestionEl.removeChild(initialsEl);

        // call the function to show all the scores
        showAllScores();
    });

}

// create a function that will hold the question object and return the array of objects
var questionsAndAnswers = function () {
    // create a class to hold the objects needed
    class quizQuesAns {
        constructor(question, answer1, answer2, answer3, answer4, correctAns) {
            this.question = question;
            this.answer1 = answer1;
            this.answer2 = answer2;
            this.answer3 = answer3;
            this.answer4 = answer4;
            this.correctAns = correctAns;
        }
    }

    // create a empty array
    let quiz = [];

    // create new objects of the quizQuesAns class that holds the questions and answers
    let ques1 = new quizQuesAns("If a button is clicked, what event Handler is invoked?", "OnSubmit()", "onLoad()", "IsPostBack()", "OnClick()", "OnClick()");
    let ques2 = new quizQuesAns("JavaScript file has an extension of:", ".java", ".js", ".javascript", ".xml", ".js");
    let ques3 = new quizQuesAns("Which of the dialog box display a message and a data entry field?", "alert()", "prompt()", "confirm()", "msg()", "prompt()");
    let ques4 = new quizQuesAns("Inside which HTML element do we put the JavaScript", "Js", "JavaScript", "Script", "Scripting", "JavaScript");
    let ques5 = new quizQuesAns("What is a function associated with an object called?", "Function", "Method", "Link", "None", "Method");
    let ques6 = new quizQuesAns("Inside what element do you put the JavaScript?", "<var>", "<script>", "<section>", "<code>", "<script>");
    let ques7 = new quizQuesAns("How do you declare a new date in JavaScript?", "var date=Date()", "var date=date('now')", "var date=new Date()", "var date=date().current()", "var date=new Date()");
    let ques8 = new quizQuesAns("Which array method sorts the elements of an array?", "sort()", "changeOrder(order)", "order()", "None of the above", "sort()");
    let ques9 = new quizQuesAns("How do you round the number 5.35 to the nearest Integer?", "rnd(5.35)", "Math.rnd(5.35)", "round(5.35)", "Math.round(5.35)", "Math.round(5.35)");
    let ques10 = new quizQuesAns("How do you get cookies in JavaScript?", "window.cookies", "location.cookies", "document.cookie", "document.cookies", "document.cookie");

    // set the array to the objects
    quiz = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10];

    // return the array
    return quiz;
}

// make a empty global array to hold seen questions and answers
var seenQuestion = [];

// set a variable to get the array of questions and answers
var quizQA = questionsAndAnswers();

// function to get a random number from the object
var randomQuestion = function () {
    // get a random number from the array
    var question = Math.floor(Math.random() * quizQA.length);
    return question;
};

// function to check the the question isn't repeating and show a new one
var checkQA = function (question) {

        if (seenQuestion.length === 10) {

            showScore();
            clearInterval(timer);
            quizTimeEl.style.display = "none";

        } else if (!seenQuestion.includes(question)) {
        mainQuestionEl.textContent = quizQA[question].question;
        seenQuestion.push(question);

        // create an unordered list element to hold the list elements
        var choicesEl = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        li1.className = "choicesList";
        li2.className = "choicesList";
        li3.className = "choicesList";
        li4.className = "choicesList";

        // set the text of the list to the index of the choices to the question from the object array and style the list
        li1.textContent = quizQA[question].answer1;
        li2.textContent = quizQA[question].answer2;
        li3.textContent = quizQA[question].answer3;
        li4.textContent = quizQA[question].answer4;
        li1.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px; list-style:none;");
        li2.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px; list-style:none;");
        li3.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px; list-style:none;");
        li4.setAttribute("style", "color: #ffffff; background-color:#2d2275; padding:10px; margin: 10px 0; border-radius: 10px; font-size: 20px; list-style:none;");

        // append the list items to the parent ul element
        choicesEl.appendChild(li1);
        choicesEl.appendChild(li2);
        choicesEl.appendChild(li3);
        choicesEl.appendChild(li4);

        //append the ul element to the container
        choiceEl.appendChild(choicesEl);

        // function to run when user clicks on a choice. use a conditional to check if the answer is correct or wrong. remove the elements from the parent and run the fuunction to show the next question and answer
        function makeChoice(event) {
            var text = event.target;

            if (text.textContent === quizQA[question].correctAns) {
                resultEl.textContent = "Correct";
                choicesEl.removeChild(li1);
                choicesEl.removeChild(li2);
                choicesEl.removeChild(li3);
                choicesEl.removeChild(li4);
                choiceEl.removeChild(choicesEl);
                score = score + 10;
                showQuesAnswer();

            } else {
                resultEl.textContent = "Wrong";
                choicesEl.removeChild(li1);
                choicesEl.removeChild(li2);
                choicesEl.removeChild(li3);
                choicesEl.removeChild(li4);
                choiceEl.removeChild(choicesEl);
                var newTime = timeCounter - 10;
                score = score - 3;
            
                // clear the timer and set the new time
                clearInterval(timer);
                timer = setInterval(function () {

                    if (newTime > 9) {
                        quizTimeEl.textContent = "Time: 00:" + newTime;
                        newTime--;
                        timeCounter = newTime;
                    } else if (newTime < 10 && newTime >= 1) {
                        quizTimeEl.textContent = "Time: 00:0" + newTime;
                        newTime--;
                        timeCounter = newTime;
                    } else if (newTime <= 0) {
                        clearInterval(timer);
                        quizTimeEl.style.display = "none";
                        timeCounter = newTime;
                        showScore();
                    }
                }, 1000);
                showQuesAnswer();
            }

        }

        // add event listener to the ul item and styling for when the mouse hovers over the selected answer
        choicesEl.addEventListener("click", makeChoice);
        choicesEl.addEventListener("mouseover", function (event) {
            event.target.style.color = "orange";

            setTimeout(function () {
                event.target.style.color = "#ffffff";
            }, 500);
        });

    } else {
        showQuesAnswer();

    }

};

// function to show quiz questions and answers
var showQuesAnswer = function () {

    // get a random number from the array
    var question = randomQuestion();

    checkQA(question);

};

// function to start the quiz
var startQuiz = function () {

    //Hide the high score element
    highScoreEl.style.display = "none";
    resultEl.style.display = "block";

    choiceEl.setAttribute("style", "width:300px; margin: 15px auto 0;");

    showQuesAnswer();

};

// create a function to launch when the user opens the application and clicks the start button
var openQuiz = function () {

    // set the styling for the main question container to display the instructions
    mainQuestionEl.style.textAlign = "center";
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
    resultEl.style.display = "none";

    // add event listener to view the scores. if there is something go to high score page if not return
    highScoreEl.addEventListener("click", function(){
       
        if (localStorage.getItem("highScores") === null){
            console.log("user name isn't there")
            return;
        
        } else{
            
            topInfoEl.style.display = "none";
            startButtonEl.style.display = "none";
            mainQuestionEl.textContent = "";
    
            showAllScores();
        }
    });

    startButtonEl.addEventListener("click", function () {

        // var timeRemaining = 59;
        var time = 59;

        // setTime(timeRemaining);
        timer = setInterval(function () {

            if (time > 9) {
                quizTimeEl.textContent = "Time: 00:" + time;
                time--;
                timeCounter = time;
            } else if (time <= 9 && time >= 1) {
                quizTimeEl.textContent = "Time: 00:0" + time;
                time--;
                timeCounter = time;
            } else if (time === 0) {
                clearInterval(timer);
                quizTimeEl.style.display = "none";
                timeCounter = time;
                showScore();
            }
        }, 1000);

        choiceEl.removeChild(startEl);
        startQuiz();
    });

};

// open the quiz
openQuiz();