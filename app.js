const quizObj = [
    {
        question: 'What is the full form of HTML?',
        op1: 'Hyper Text Markup Language',
        op2: 'Hyper Text Mar Language',
        op3: 'Hype Text Markup Language',
        op4: 'Hyper Testing Markup Language',
        answer: 'op1', // Correct answer is option 1
    },
    {
        question: 'What is the full form of CSS?',
        op1: 'Cast Style Sheet',
        op2: 'Course Super Star',
        op3: 'Cascading Style Sheet',
        op4: 'Cascade Style Sheet',
        answer: 'op3', // Correct answer is option 3
    },
    {
        question: 'What is the full form of HTTP?',
        op1: 'Hyper Text Transfer Protocol',
        op2: 'Hyper Terminal Transfer Protocol',
        op3: 'Hyper Text Technical Protocol',
        op4: 'Hyper Type Transfer Protocol',
        answer: 'op1', // Correct answer is option 1
    },
    {
        question: 'What does URL stand for?',
        op1: 'Universal Resource Locator',
        op2: 'Uniform Resource Locator',
        op3: 'Uniform Real Locator',
        op4: 'Universal Real Locator',
        answer: 'op2', // Correct answer is option 2
    },
    {
        question: 'Which language is primarily used for web development?',
        op1: 'Python',
        op2: 'JavaScript',
        op3: 'Java',
        op4: 'C++',
        answer: 'op2', // Correct answer is option 2
    },
    {
        question: 'What is the full form of SQL?',
        op1: 'Structured Query Language',
        op2: 'Structured Question Language',
        op3: 'Simple Query Language',
        op4: 'Standard Query Language',
        answer: 'op1', // Correct answer is option 1
    },
    {
        question: 'What is the purpose of the <head> tag in HTML?',
        op1: 'To contain the footer of the page',
        op2: 'To include metadata for the document',
        op3: 'To display the main content',
        op4: 'To display images on the page',
        answer: 'op2', // Correct answer is option 2
    },
    {
        question: 'Which of the following is used to style a website?',
        op1: 'JavaScript',
        op2: 'HTML',
        op3: 'CSS',
        op4: 'PHP',
        answer: 'op3', // Correct answer is option 3
    },
   
    {
        question: 'What does the term "Bootstrap" refer to in web development?',
        op1: 'A CSS framework',
        op2: 'A JavaScript library',
        op3: 'A backend framework',
        op4: 'A content management system',
        answer: 'op1', // Correct answer is option 1
    },
];


let question = document.querySelector('.question')
let label1 = document.querySelector('#lab1')
let label2 = document.querySelector('#lab2')
let label3 = document.querySelector('#lab3')
let label4 = document.querySelector('#lab4')


let submit = document.querySelector('.btn')
   
count=0;

submit.addEventListener('click' , ()=>{
   console.log(quizObj[0]);
   question.textContent=quizObj[count].question;
   label1.innerHTML=quizObj[count].op1
   label2.innerHTML=quizObj[count].op2
   label3.innerHTML=quizObj[count].op3
   label4.innerHTML=quizObj[count].op4
  
    count++
})
