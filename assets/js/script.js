// create elements for each of the div by getting the id's
var topInfoEl = document.getElementById("topInfo");
var quizQuestionEl = document.getElementById("quizQuestion");
var quizResultEl = document.getElementById("quizAnswers");

// create divs for each of the elements to display content to the user
var highScoreEl = document.createElement("div");
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
choiceEl.setAttribute("style", "width:400px; margin: 15px auto 0;");
resultEl.setAttribute("style", "margin:30px auto 0; border-top: 2px solid #75170b; width:400px; color: #777777; font-size:25px; font-style: italic;");

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
};

openQuiz();