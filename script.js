let questions = [
    {
        question: "What is the capital of Australia?",
        answers:["Sydney","Melbourne","Canberra","Perth"],
        correct:0
    },
    {
        question: "What is the largest state in Australia?",
        answers:["New South Wales","Victorial","Queenslan","Western Austrailia"],
        correct:2
    },
    {
        question: "What is the Largest Planet in our solar sysytem?",
        answers:["Earth","Saturn","Jupiter","Uranus"],
        correct:3
    }
];
let currentQuestionIndex = 0;
showQuestion();
document.getElementById("next-btn").addEventListener("click", function(){
    currentQuestionIndex++;
    if(currentQuestionIndex >= questions.length){
        alert("your Quiz is completed");
    } 
    else {
        showQuestion();
    }
})
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-area").innerHTML = currentQuestion.question;
    document.getElementById("answer-0").innerHTML = currentQuestion.answers[0]
    document.getElementById("answer-1").innerHTML = currentQuestion.answers[1]
    document.getElementById("answer-2").innerHTML = currentQuestion.answers[2]
    document.getElementById("answer-3").innerHTML = currentQuestion.answers[3]

    document.getElementById("answer-0").addEventListener("click",function(){
        checkAnswer(0);
    });
    document.getElementById("answer-1").addEventListener("click",function(){
        checkAnswer(1);
    });
    document.getElementById("answer-2").addEventListener("click",function(){
        checkAnswer(2);
    });
    document.getElementById("answer-3").addEventListener("click",function(){
        checkAnswer(3);
    });
}
function checkAnswer(userAnswer){
    let currentQuestion = questions[currentQuestionIndex];
    if(userAnswer === currentQuestion.correct){
        alert("Correct Answer! Press Next to go to the other question.");
    } else {
        alert("wrong Answer! the correct answer is " + currentQuestion.answers[currentQuestion.correct]);
    }
}
