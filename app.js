let  btn = document.querySelector('.btn')
let main = document.querySelector('.main')

const quizObj = [
    {
        question: 'What is the full form of HTML?',
        op1: 'Hyper Text Markup Language',
        op2: 'Hyper Text Mar Language',
        op3: 'Hype Text Markup Language',
        op4: 'Hyper Testing Markup Language',
    },
    {
        question: 'What is the full form of CSS?',
        op1: 'Cast Style Sheet',
        op2: 'Course Super Star',
        op3: 'Cascading Style Sheet',
        op4: 'Cascade Style Sheet',
    },
    {
        question: 'What is the full form of HTTP?',
        op1: 'Hyper Text Transfer Protocol',
        op2: 'Hyper Terminal Transfer Protocol',
        op3: 'Hyper Text Technical Protocol',
        op4: 'Hyper Type Transfer Protocol',
    },
    {
        question: 'What does URL stand for?',
        op1: 'Universal Resource Locator',
        op2: 'Uniform Resource Locator',
        op3: 'Uniform Real Locator',
        op4: 'Universal Real Locator',
    },
    {
        question: 'Which language is primarily used for web development?',
        op1: 'Python',
        op2: 'JavaScript',
        op3: 'Java',
        op4: 'C++',
    },
    {
        question: 'What is the full form of SQL?',
        op1: 'Structured Query Language',
        op2: 'Structured Question Language',
        op3: 'Simple Query Language',
        op4: 'Standard Query Language',
    },
    {
        question: 'What is the purpose of the <head> tag in HTML?',
        op1: 'To contain the footer of the page',
        op2: 'To include metadata for the document',
        op3: 'To display the main content',
        op4: 'To display images on the page',
    },
    {
        question: 'Which of the following is used to style a website?',
        op1: 'JavaScript',
        op2: 'HTML',
        op3: 'CSS',
        op4: 'PHP',
    },
    {
        question: 'Which HTML tag is used for inserting an image?',
        op1: '<image>',
        op2: '<img>',
        op3: '<picture>',
        op4: '<src>',
    },
    {
        question: 'What does the term "Bootstrap" refer to in web development?',
        op1: 'A CSS framework',
        op2: 'A JavaScript library',
        op3: 'A backend framework',
        op4: 'A content management system',
    },
];
    


btn.addEventListener('click' , ()=>{
  
  quizObj.forEach(val =>{
  
  
   let quizDiv = document.createElement('div')
   quizDiv.classList.add('quizBox')
   quizDiv.innerHTML= `<h1>select me</h1>
         <h4 class="question">${val.question}</h4>
         <div class="option">
  <li class="opt">      
            <label for="op-A">${val.op1}</label>
         <input  type="radio" value="a" id="op-A"  >
          </li>
  <li class="opt">      
            <label for="op-B">${val.op2}</label>
         <input type="radio" value="b" id="op-B"  >
          </li>
  <li class="opt">      
            <label for="op-c">${val.op3}</label>
         <input type="radio" value="c" id="op-c"  >
          </li>
  <li class="opt">      
            <label for="opt-d">${val.op4}</label>
         <input type="radio" value="d" id="opt-d"  >
          </li>
         </div>`
   
         
    main.appendChild(quizDiv)
  })
  
    console.log('hello');
  
})