var topInfoEl = document.getElementById("topInfo");
var highScoreEl = document.createElement("div");
var quizTimeEl = document.createElement ("div");

var quizQuestionEl = document.getElementById("quizQuestion");
var mainQuestionEl = document.createElement ("div");
var choiceEl = document.createElement("div");

var quizAnswerEl = document.getElementById("quizAnswers");
var answerEl = document.createElement("div");

topInfoEl.append(highScoreEl, quizTimeEl);
quizQuestionEl.append(mainQuestionEl, choiceEl);
quizAnswerEl.appendChild(answerEl);

var timeCounter=0;

highScoreEl.textContent = "View High Scores";
quizTimeEl.textContent = "Time remaining: " + timeCounter;
mainQuestionEl.textContent = "questions go here"
choiceEl.textContent = "choices go here";
answerEl.textContent = "answers go here";

highScoreEl.setAttribute("style", "color:#177648");
mainQuestionEl.setAttribute("style", "background-color:#5683df; width:400px; margin: 0 auto;");
choiceEl.setAttribute("style", "background-color:#5683df; width:400px; margin: 0 auto;");
answerEl.setAttribute("style", "margin:30px auto 0; border-top: 2px solid #75170b; width:400px; color: #777777; font-size:25px; font-style: italic;")