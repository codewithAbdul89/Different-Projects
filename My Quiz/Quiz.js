
document.title = "Quiz app!"
const questions = [
    {
        question: "Which is the largest animal on Earth?",
        answers: [
            { text: "Cat", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Dog", correct: false },
            { text: "Lion", correct: false }
        ]
    },
    {
        question: "Pakistan was established in______?",
        answers: [
            { text: "1937", correct: false },
            { text: "1947", correct: true },
            { text: "1957", correct: false },
            { text: "1987", correct: false }
        ]
    },
    {
        question: "Lahore is the capital of_____.",
        answers: [
            { text: "Islamabad", correct: false },
            { text: "Sindh", correct: false },
            { text: "Punjab", correct: true },
            { text: "Quetta", correct: false }
        ]
    },
    {
        question: "Which of follwing name we cannot given to variable in C++?",
        answers: [
            { text: "!num", correct: true },
            { text: "mynum", correct: false },
            { text: "myNum", correct: false },
            { text: "num", correct: false },
        ]
    },
    {
        question: "Which of the following is a prime number?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "7", correct: true },
            { text: "10", correct: false }
        ]
    },
      {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false }
            ]
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answers: [
                { text: "Charles Dickens", correct: false },
                { text: "William Shakespeare", correct: true },
                { text: "Mark Twain", correct: false },
                { text: "Jane Austen", correct: false }
            ]
        },
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false }
            ]
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            answers: [
                { text: "Oxygen", correct: true },
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Silver", correct: false }
            ]
        },
        {
            question: "What is the smallest prime number?",
            answers: [
                { text: "1", correct: false },
                { text: "2", correct: true },
                { text: "3", correct: false },
                { text: "5", correct: false }
            ]
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: [
                { text: "China", correct: false },
                { text: "Japan", correct: true },
                { text: "South Korea", correct: false },
                { text: "Thailand", correct: false }
            ]
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
                { text: "Arctic Ocean", correct: false }
            ]
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: [
                { text: "Vincent van Gogh", correct: false },
                { text: "Pablo Picasso", correct: false },
                { text: "Leonardo da Vinci", correct: true },
                { text: "Claude Monet", correct: false }
            ]
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: [
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Diamond", correct: true },
                { text: "Quartz", correct: false }
            ]
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false }
            ]
        }
      
    
]
const questionbox = document.getElementById("question-box")
const answerbutton = document.querySelectorAll(".btn")
const nextbutton = document.getElementById("next-button")
const resultbox = document.getElementById("resulter")
const header = document.getElementById("header")
let currentquestioninedx = 0

score = 0
let answered = false
function loadquestion() {
    const questionholder = questions[currentquestioninedx]
    questionbox.innerHTML =questionholder.question
    answerbutton.forEach((button, index) => {
        button.innerHTML = questionholder.answers[index].text
        button.classList.remove("wrong", "correct")
        button.onclick = () => checkanswer(button, questionholder.answers[index].correct)


    })
    nextbutton.style.display = "none"
}
function checkanswer(button, iscorrect) {
    if (answered) return
    answered = false
    if (iscorrect) {
        button.classList.add("correct")
        score++
    }
    else {
        button.classList.add("wrong")

    }

    answerbutton.forEach(btn => btn.disabled = true)
    nextbutton.style.display = "block"


}
nextbutton.addEventListener("click", () => {
    answerbutton.forEach(btn => btn.disabled = false)
    currentquestioninedx++
    if (currentquestioninedx < questions.length) {
        loadquestion()
    }
    else {
        showresult()
    }
})
function showresult() {
    header.innerHTML = ("<h1> Quiz completed <h1>")
    header.style.color='red'
    questionbox.innerHTML = `Quiz Result! 🎉 <br> Result:${score}/${questions.length}`
    questionbox.style.color='blue'
    answerbutton.forEach(button => button.style.display = ("none"))
    nextbutton.innerHTML = ("Restart Quiz")

    shower()
    nextbutton.style.display = "block"
    nextbutton.addEventListener('click', function () {
        history.go(0)
    }


    )


}
function shower() {

    if (score < 8) {
        resultbox.innerHTML = (` <br> You are fail.Try next time. `)
        nextbutton.style.display="none"
    }
    else {
        resultbox.innerHTML = (" <br> Congratulations! you pass the quiz.")
    }
}




loadquestion()