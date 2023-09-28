// Sample JSON data for questions
const questions = [
    {
        id: 1,
        title: "How to learn JavaScript?",
        text: "I'm new to JavaScript and want to learn it. Any tips?",
        author: "John Doe",
        answers: [
            { id: 1, title: "Online tutorials", text: "There are many online tutorials and courses available." }
        ]
    },
    {
        id: 2,
        title: "HTML vs. XHTML",
        text: "What are the main differences between HTML and XHTML?",
        author: "Alice Smith",
        answers: []
    }
];

const questionList = document.getElementById("question-list");
const questionDetails = document.getElementById("question-details");
const questionTitleInput = document.getElementById("question-title");
const questionTextInput = document.getElementById("question-text");
const questionAuthorInput = document.getElementById("question-author");
const answerTitleInput = document.getElementById("answer-title");
const answerTextInput = document.getElementById("answer-text");
const answerAuthorInput = document.getElementById("answer-author");

function displayQuestions() {
    questionList.innerHTML = "";
    questions.forEach(question => {
        const questionItem = document.createElement("div");
        questionItem.classList.add("question-item");
        questionItem.innerHTML = `<h3>${question.title}</h3>`;
        questionItem.addEventListener("click", () => showQuestionDetails(question));
        questionList.appendChild(questionItem);
    });
}

function showQuestionDetails(question) {
    questionDetails.innerHTML = `
        <h2>${question.title}</h2>
        <p>${question.text}</p>
        <p>Author: ${question.author}</p>
    `;

    if (question.answers.length > 0) {
        questionDetails.innerHTML += "<h3>Answers:</h3>";
        question.answers.forEach(answer => {
            questionDetails.innerHTML += `
                <div class="answer">
                    <h4>${answer.title}</h4>
                    <p>${answer.text}</p>
                    <p>Author: ${answer.author}</p>
                </div>
            `;
        });
    } else {
        questionDetails.innerHTML += "<p>No answers yet.</p>";
    }
}

function addQuestion() {
    const title = questionTitleInput.value;
    const text = questionTextInput.value;
    const author = questionAuthorInput.value;

    if (title && text && author) {
        const newQuestion = {
            id: questions.length + 1,
            title,
            text,
            author,
            answers: []
        };

        questions.push(newQuestion);
        displayQuestions();
        clearQuestionForm();
    }
}

function addAnswer() {
    const title = answerTitleInput.value;
    const text = answerTextInput.value;
    const author = answerAuthorInput.value;

    if (title && text && author) {
        const question = questions.find(q => q.title === questionDetails.querySelector("h2").textContent);

        if (question) {
            const newAnswer = {
                id: question.answers.length + 1,
                title,
                text,
                author
            };

            question.answers.push(newAnswer);
            showQuestionDetails(question);
            clearAnswerForm();
        }
    }
}

function clearQuestionForm() {
    questionTitleInput.value = "";
    questionTextInput.value = "";
    questionAuthorInput.value = "";
}

function clearAnswerForm() {
    answerTitleInput.value = "";
    answerTextInput.value = "";
    answerAuthorInput.value = "";
}

// Initial display
displayQuestions();
