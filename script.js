const quizData = [
{
    question: "What does HTML stand for?",
    a: "Hyper Tool Markup Language",
    b: "Hyper Text Markup Language",
    c: "Hyper links and Text Make language",
    d: "Hyper Tell Markup Language",
    correct: "b",
}

{
    question: "What does HTML stand for?",
    a: "5",
    b: "1",
    c: "4",
    d: "6",
    correct: "d",
}

{

   question: "What is the smallest header in HTML by default?",
   a: "h1",
   b: "h2",
   c: "h6",
   d: "h4",
   correct: "c",
}

{
    question:  "How to create an ordered list in HTML?"
    a: "<ol>",
    b: "<ul>",
    c: "<href>",
    d: "<ul>",
    correct: "a",
}

];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()


    const currentQuizData = quizData[currentQuiz]
    

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answerEls
    answerEls.forEach(answerEl =>  {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
         score++   
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})