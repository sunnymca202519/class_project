// Question Sets - A, B, C, D
const questionSets = {
    A: [
        {question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Hyperlink and Text Markup Language"], correct: "Hyper Text Markup Language"},
        {question: "Which CSS property is used to change text color?", options: ["color", "text-color", "font-color", "text-style"], correct: "color"},
        {question: "What is the correct syntax for referring to an external JavaScript file?", options: ["<script src='file.js'>", "<script href='file.js'>", "<script name='file.js'>", "<js src='file.js'>"], correct: "<script src='file.js'>"},
        {question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], correct: "<style>"},
        {question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: "Cascading Style Sheets"},
        {question: "Which JavaScript method is used to write HTML output?", options: ["document.write()", "console.log()", "window.alert()", "document.output()"], correct: "document.write()"},
        {question: "What is the correct HTML element for the largest heading?", options: ["<h1>", "<heading>", "<h6>", "<head>"], correct: "<h1>"},
        {question: "Which property is used to change the background color in CSS?", options: ["background-color", "bgcolor", "color", "background"], correct: "background-color"},
        {question: "How do you create a function in JavaScript?", options: ["function myFunction()", "def myFunction()", "create myFunction()", "function:myFunction()"], correct: "function myFunction()"},
        {question: "Which HTML attribute specifies an alternate text for an image?", options: ["alt", "title", "src", "longdesc"], correct: "alt"},
        {question: "What is the correct way to comment in CSS?", options: ["/* comment */", "// comment", "<!-- comment -->", "# comment"], correct: "/* comment */"},
        {question: "Which operator is used to assign a value to a variable in JavaScript?", options: ["=", "==", "===", "=>"], correct: "="},
        {question: "What does the <a> tag define in HTML?", options: ["A hyperlink", "An anchor", "An address", "An article"], correct: "A hyperlink"},
        {question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "font-style", "text-style"], correct: "font-size"},
        {question: "How do you declare a JavaScript variable?", options: ["var x", "variable x", "v x", "declare x"], correct: "var x"},
        {question: "Which HTML tag is used to create an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], correct: "<ul>"},
        {question: "What is the correct CSS syntax to make all <p> elements bold?", options: ["p {font-weight: bold;}", "p {text-size: bold;}", "<p style='bold'>", "p {font: bold;}"], correct: "p {font-weight: bold;}"},
        {question: "Which event occurs when a user clicks on an HTML element?", options: ["onclick", "onchange", "onmouseover", "onmouseclick"], correct: "onclick"},
        {question: "What is the correct HTML for creating a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"], correct: "<input type='checkbox'>"},
        {question: "Which JavaScript keyword is used to check a condition?", options: ["if", "check", "when", "condition"], correct: "if"}
    ],
    B: [
        {question: "Which HTML tag is used for creating a table?", options: ["<table>", "<tab>", "<tr>", "<td>"], correct: "<table>"},
        {question: "What is the default display value for most HTML elements?", options: ["block", "inline", "flex", "grid"], correct: "block"},
        {question: "Which JavaScript method removes the last element from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correct: "pop()"},
        {question: "What does the <br> tag do in HTML?", options: ["Inserts a line break", "Makes text bold", "Creates a border", "Breaks the page"], correct: "Inserts a line break"},
        {question: "Which CSS property is used to add space between elements?", options: ["margin", "padding", "spacing", "border"], correct: "margin"},
        {question: "How do you write an IF statement in JavaScript?", options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if (i = 5)"], correct: "if (i == 5)"},
        {question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "font", "styles"], correct: "style"},
        {question: "What is the correct way to select an element with id 'demo' in CSS?", options: ["#demo", ".demo", "demo", "*demo"], correct: "#demo"},
        {question: "Which JavaScript method converts JSON data to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"], correct: "JSON.parse()"},
        {question: "What is the correct HTML for inserting an image?", options: ["<img src='image.jpg'>", "<image src='image.jpg'>", "<img href='image.jpg'>", "<picture src='image.jpg'>"], correct: "<img src='image.jpg'>"},
        {question: "Which CSS property is used to change the font of an element?", options: ["font-family", "font-type", "font-style", "typeface"], correct: "font-family"},
        {question: "What is the output of typeof null in JavaScript?", options: ["object", "null", "undefined", "number"], correct: "object"},
        {question: "Which HTML tag defines a paragraph?", options: ["<p>", "<para>", "<paragraph>", "<pg>"], correct: "<p>"},
        {question: "How do you make text italic in CSS?", options: ["font-style: italic;", "text-style: italic;", "font: italic;", "text-decoration: italic;"], correct: "font-style: italic;"},
        {question: "Which JavaScript loop is guaranteed to execute at least once?", options: ["do-while", "while", "for", "foreach"], correct: "do-while"},
        {question: "What is the correct HTML for making a drop-down list?", options: ["<select>", "<dropdown>", "<list>", "<input type='dropdown'>"], correct: "<select>"},
        {question: "Which CSS property is used to make text underlined?", options: ["text-decoration", "text-style", "font-decoration", "text-underline"], correct: "text-decoration"},
        {question: "How do you round the number 7.25 to the nearest integer in JavaScript?", options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"], correct: "Math.round(7.25)"},
        {question: "Which HTML element defines the title of a document?", options: ["<title>", "<head>", "<meta>", "<header>"], correct: "<title>"},
        {question: "What is the correct CSS syntax for making the background image not repeat?", options: ["background-repeat: no-repeat;", "background: no-repeat;", "background-image: no-repeat;", "repeat: none;"], correct: "background-repeat: no-repeat;"}
    ],
    C: [
        {question: "Which HTML tag is used to define a footer for a document?", options: ["<footer>", "<bottom>", "<section>", "<foot>"], correct: "<footer>"},
        {question: "What is the CSS box model?", options: ["Content, Padding, Border, Margin", "Content, Border, Padding, Margin", "Margin, Border, Padding, Content", "Padding, Content, Border, Margin"], correct: "Content, Padding, Border, Margin"},
        {question: "Which JavaScript method adds one or more elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: "push()"},
        {question: "What does the <nav> tag define in HTML5?", options: ["Navigation links", "A new section", "A navigation bar", "Network access"], correct: "Navigation links"},
        {question: "Which CSS property is used to create space inside an element?", options: ["padding", "margin", "spacing", "border"], correct: "padding"},
        {question: "How do you write a comment in JavaScript?", options: ["// comment", "<!-- comment -->", "/* comment", "# comment"], correct: "// comment"},
        {question: "Which HTML attribute specifies the URL of the page the link goes to?", options: ["href", "src", "link", "url"], correct: "href"},
        {question: "What is the correct way to select all <p> elements in CSS?", options: ["p", ".p", "#p", "*p"], correct: "p"},
        {question: "Which JavaScript keyword declares a block-scoped variable?", options: ["let", "var", "const", "define"], correct: "let"},
        {question: "What is the correct HTML for making a text input field?", options: ["<input type='text'>", "<textfield>", "<input type='textfield'>", "<text>"], correct: "<input type='text'>"},
        {question: "Which CSS property controls the stacking order of elements?", options: ["z-index", "stack-order", "layer", "position"], correct: "z-index"},
        {question: "What does the Array.map() method do in JavaScript?", options: ["Creates a new array with results of calling a function", "Modifies the original array", "Filters array elements", "Sorts the array"], correct: "Creates a new array with results of calling a function"},
        {question: "Which HTML tag is used to define a header for a document?", options: ["<header>", "<head>", "<top>", "<section>"], correct: "<header>"},
        {question: "How do you center a block element horizontally in CSS?", options: ["margin: auto;", "text-align: center;", "align: center;", "center: true;"], correct: "margin: auto;"},
        {question: "Which JavaScript method returns the length of a string?", options: ["length", "size()", "len()", "count()"], correct: "length"},
        {question: "What is the correct HTML for creating a hyperlink?", options: ["<a href='url'>text</a>", "<link href='url'>text</link>", "<hyperlink>text</hyperlink>", "<url>text</url>"], correct: "<a href='url'>text</a>"},
        {question: "Which CSS property is used to change the left margin of an element?", options: ["margin-left", "padding-left", "left-margin", "indent"], correct: "margin-left"},
        {question: "What is the correct way to write an array in JavaScript?", options: ["var colors = ['red', 'green']", "var colors = (1:'red', 2:'green')", "var colors = 'red', 'green'", "var colors = {red, green}"], correct: "var colors = ['red', 'green']"},
        {question: "Which HTML element is used to specify a section in a document?", options: ["<section>", "<div>", "<article>", "<part>"], correct: "<section>"},
        {question: "What does the CSS property 'display: flex' do?", options: ["Creates a flex container", "Makes element flexible", "Displays element", "Fixes element position"], correct: "Creates a flex container"}
    ],
    D: [
        {question: "Which HTML tag is used to define an article?", options: ["<article>", "<section>", "<content>", "<post>"], correct: "<article>"},
        {question: "What is the purpose of the CSS position property?", options: ["Specifies positioning method", "Sets element position", "Defines layout", "Controls display"], correct: "Specifies positioning method"},
        {question: "Which JavaScript method removes the first element from an array?", options: ["shift()", "pop()", "unshift()", "remove()"], correct: "shift()"},
        {question: "What does the <aside> tag define in HTML5?", options: ["Content aside from main content", "A side menu", "A sidebar", "Additional information"], correct: "Content aside from main content"},
        {question: "Which CSS property is used to make text bold?", options: ["font-weight", "font-style", "text-weight", "text-bold"], correct: "font-weight"},
        {question: "How do you create an object in JavaScript?", options: ["var obj = {}", "var obj = []", "var obj = ()", "object obj = {}"], correct: "var obj = {}"},
        {question: "Which HTML attribute specifies that an input field must be filled?", options: ["required", "mandatory", "validate", "needed"], correct: "required"},
        {question: "What is the correct CSS syntax to select elements with class 'test'?", options: [".test", "#test", "test", "*test"], correct: ".test"},
        {question: "Which JavaScript keyword is used to define a constant?", options: ["const", "var", "let", "constant"], correct: "const"},
        {question: "What is the correct HTML for inserting a background image?", options: ["<body style='background-image:url(bg.jpg)'>", "<background img='bg.jpg'>", "<body bg='bg.jpg'>", "<img background='bg.jpg'>"], correct: "<body style='background-image:url(bg.jpg)'>"},
        {question: "Which CSS property is used to align text?", options: ["text-align", "align", "text-position", "alignment"], correct: "text-align"},
        {question: "What does the Array.filter() method do in JavaScript?", options: ["Creates array with elements that pass a test", "Removes elements from array", "Sorts array elements", "Maps array elements"], correct: "Creates array with elements that pass a test"},
        {question: "Which HTML tag defines emphasized text?", options: ["<em>", "<i>", "<italic>", "<emphasis>"], correct: "<em>"},
        {question: "How do you make a list that lists items with bullets in CSS?", options: ["list-style-type: disc;", "list-type: bullets;", "bullet-style: disc;", "list: bullets;"], correct: "list-style-type: disc;"},
        {question: "Which JavaScript method joins array elements into a string?", options: ["join()", "concat()", "merge()", "combine()"], correct: "join()"},
        {question: "What is the correct HTML for making a text area?", options: ["<textarea>", "<input type='textarea'>", "<textbox>", "<input type='textbox'>"], correct: "<textarea>"},
        {question: "Which CSS property controls element visibility?", options: ["visibility", "display", "show", "visible"], correct: "visibility"},
        {question: "How do you find the minimum value in an array in JavaScript?", options: ["Math.min(...array)", "array.min()", "min(array)", "Array.min(array)"], correct: "Math.min(...array)"},
        {question: "Which HTML element defines strong importance?", options: ["<strong>", "<b>", "<bold>", "<important>"], correct: "<strong>"},
        {question: "What is the CSS property for changing cursor appearance?", options: ["cursor", "mouse", "pointer", "cursor-style"], correct: "cursor"}
    ]
};

// Exam State
let currentSet = '';
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let questionStatus = [];
let timerInterval;
let timeRemaining = 1800; // 30 minutes in seconds

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    assignRandomSet();
    loadFromLocalStorage();
    setupEventListeners();
});

// Assign random question set
function assignRandomSet() {
    const sets = ['A', 'B', 'C', 'D'];
    currentSet = sets[Math.floor(Math.random() * sets.length)];
    document.getElementById('assignedSet').textContent = `Set ${currentSet}`;
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('startBtn').addEventListener('click', startExam);
    document.getElementById('prevBtn').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('markBtn').addEventListener('click', markForReview);
    document.getElementById('submitBtn').addEventListener('click', confirmSubmit);
    document.getElementById('restartBtn').addEventListener('click', restartExam);
}

// Start exam
function startExam() {
    questions = shuffleArray([...questionSets[currentSet]]);
    questions = questions.map(q => ({
        ...q,
        options: shuffleArray([...q.options])
    }));
    
    userAnswers = new Array(questions.length).fill(null);
    questionStatus = new Array(questions.length).fill('not-visited');
    
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('examScreen').classList.add('active');
    document.getElementById('currentSet').textContent = `Set ${currentSet}`;
    
    createNavigationGrid();
    loadQuestion(0);
    startTimer();
}

// Shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create navigation grid
function createNavigationGrid() {
    const navGrid = document.getElementById('navGrid');
    navGrid.innerHTML = '';
    
    questions.forEach((_, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.textContent = index + 1;
        navItem.addEventListener('click', () => loadQuestion(index));
        navGrid.appendChild(navItem);
    });
}

// Load question
function loadQuestion(index) {
    currentQuestionIndex = index;
    const question = questions[index];
    
    if (questionStatus[index] === 'not-visited') {
        questionStatus[index] = 'not-answered';
    }
    
    document.getElementById('questionNumber').textContent = `Question ${index + 1}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[index] === option) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-label">${String.fromCharCode(65 + i)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionDiv.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionDiv);
    });
    
    updateNavigationPanel();
    saveToLocalStorage();
}

// Select option
function selectOption(option) {
    userAnswers[currentQuestionIndex] = option;
    questionStatus[currentQuestionIndex] = 'answered';
    
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.option').classList.add('selected');
    
    updateNavigationPanel();
    saveToLocalStorage();
}

// Navigate question
function navigateQuestion(direction) {
    const newIndex = currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < questions.length) {
        loadQuestion(newIndex);
    }
}

// Mark for review
function markForReview() {
    questionStatus[currentQuestionIndex] = 'marked';
    updateNavigationPanel();
    saveToLocalStorage();
}

// Update navigation panel
function updateNavigationPanel() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.className = 'nav-item';
        
        if (index === currentQuestionIndex) {
            item.classList.add('active');
        }
        
        if (questionStatus[index] === 'answered') {
            item.classList.add('answered');
        } else if (questionStatus[index] === 'marked') {
            item.classList.add('marked');
        }
    });
}

// Timer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Confirm submit
function confirmSubmit() {
    if (confirm('Are you sure you want to submit the exam?')) {
        submitExam();
    }
}

// Submit exam
function submitExam() {
    clearInterval(timerInterval);
    
    let correct = 0;
    let wrong = 0;
    
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correct++;
        } else if (userAnswers[index] !== null) {
            wrong++;
        }
    });
    
    const total = questions.length;
    const percentage = ((correct / total) * 100).toFixed(2);
    
    document.getElementById('totalQuestions').textContent = total;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('wrongAnswers').textContent = wrong;
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    
    displayReview();
    
    document.getElementById('examScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');
    
    clearLocalStorage();
}

// Display review
function displayReview() {
    const reviewSection = document.getElementById('reviewSection');
    reviewSection.innerHTML = '';
    
    questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        const reviewDiv = document.createElement('div');
        reviewDiv.className = `review-question ${isCorrect ? 'correct' : 'wrong'}`;
        
        let html = `
            <div class="review-q-text">Q${index + 1}: ${q.question}</div>
            <div class="review-answer correct-ans">✓ Correct Answer: ${q.correct}</div>
        `;
        
        if (userAnswers[index]) {
            if (isCorrect) {
                html += `<div class="review-answer user-ans">Your Answer: ${userAnswers[index]} ✓</div>`;
            } else {
                html += `<div class="review-answer wrong-ans">✗ Your Answer: ${userAnswers[index]}</div>`;
            }
        } else {
            html += `<div class="review-answer">Not Answered</div>`;
        }
        
        reviewDiv.innerHTML = html;
        reviewSection.appendChild(reviewDiv);
    });
}

// Restart exam
function restartExam() {
    currentQuestionIndex = 0;
    userAnswers = [];
    questionStatus = [];
    timeRemaining = 1800;
    
    document.getElementById('resultScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
    
    assignRandomSet();
}

// Local storage
function saveToLocalStorage() {
    localStorage.setItem('examState', JSON.stringify({
        currentSet,
        currentQuestionIndex,
        userAnswers,
        questionStatus,
        timeRemaining,
        questions
    }));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('examState');
    if (saved) {
        const state = JSON.parse(saved);
        if (confirm('Resume previous exam?')) {
            currentSet = state.currentSet;
            currentQuestionIndex = state.currentQuestionIndex;
            userAnswers = state.userAnswers;
            questionStatus = state.questionStatus;
            timeRemaining = state.timeRemaining;
            questions = state.questions;
            
            document.getElementById('startScreen').classList.remove('active');
            document.getElementById('examScreen').classList.add('active');
            document.getElementById('currentSet').textContent = `Set ${currentSet}`;
            
            createNavigationGrid();
            loadQuestion(currentQuestionIndex);
            startTimer();
        } else {
            clearLocalStorage();
        }
    }
}

function clearLocalStorage() {
    localStorage.removeItem('examState');
}
