// ================================
// Supabase Connection
// ================================
const SUPABASE_URL =
    "https://osjkvgvcmckfhgaduqhs.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_yV6A7fUZkAocBB48cDHdCg_tdgt3Z4F";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


// ================================
// Student Data
// ================================
const studentData = JSON.parse(
    localStorage.getItem("studentData")
);

if (!studentData) {
    window.location.href = "index.html";
}


// ================================
// Student Information
// ================================
const studentInfo =
    document.getElementById("studentInfo");

if (studentInfo) {
    studentInfo.textContent =
        studentData.name + " • " + studentData.branch;
}


// ================================
// Question Bank
// ================================
const questionBank = [

    {
        question: "Which of the following is the correct way to declare an integer variable in C?",
        options: [
            "integer x;",
            "int x;",
            "x int;",
            "declare int x;"
        ],
        answer: "int x;"
    },

    {
        question: "Which function is the entry point of a C program?",
        options: [
            "start()",
            "main()",
            "begin()",
            "run()"
        ],
        answer: "main()"
    },

    {
        question: "Which header file is required for printf() and scanf()?",
        options: [
            "conio.h",
            "stdio.h",
            "stdlib.h",
            "string.h"
        ],
        answer: "stdio.h"
    },

    {
        question: "Which symbol is used to terminate a statement in C?",
        options: [
            ":",
            ".",
            ",",
            ";"
        ],
        answer: ";"
    },

    {
        question: "Which data type is used to store a single character?",
        options: [
            "int",
            "float",
            "char",
            "double"
        ],
        answer: "char"
    },

    {
        question: "Which operator is used for assignment in C?",
        options: [
            "==",
            "=",
            "!=",
            "+="
        ],
        answer: "="
    },

    {
        question: "Which operator is used to compare two values for equality?",
        options: [
            "=",
            "==",
            "=>",
            "!="
        ],
        answer: "=="
    },

    {
        question: "Which loop is guaranteed to execute at least once?",
        options: [
            "for",
            "while",
            "do-while",
            "nested for"
        ],
        answer: "do-while"
    },

    {
        question: "Which keyword is used to return a value from a function?",
        options: [
            "break",
            "return",
            "continue",
            "exit"
        ],
        answer: "return"
    },

    {
        question: "Which keyword is used to exit from a loop or switch statement?",
        options: [
            "stop",
            "exit",
            "break",
            "return"
        ],
        answer: "break"
    },

    {
        question: "Which operator represents logical AND in C?",
        options: [
            "&",
            "&&",
            "||",
            "!"
        ],
        answer: "&&"
    },

    {
        question: "Which operator represents logical OR in C?",
        options: [
            "|",
            "&&",
            "||",
            "!"
        ],
        answer: "||"
    },

    {
        question: "Which operator is used to find the remainder of a division?",
        options: [
            "/",
            "%",
            "//",
            "\\"
        ],
        answer: "%"
    },

    {
        question: "Array indexing in C starts from:",
        options: [
            "0",
            "1",
            "-1",
            "Depends on array"
        ],
        answer: "0"
    },

    {
        question: "Which of the following is a valid single-line comment in C?",
        options: [
            "// comment",
            "/* comment",
            "# comment",
            "<!-- comment -->"
        ],
        answer: "// comment"
    },

    {
        question: "Which header file contains string handling functions?",
        options: [
            "stdio.h",
            "math.h",
            "string.h",
            "ctype.h"
        ],
        answer: "string.h"
    },

    {
        question: "Which function is used to find the length of a string?",
        options: [
            "strcpy()",
            "strlen()",
            "strcmp()",
            "strcat()"
        ],
        answer: "strlen()"
    },

    {
        question: "Which function is used to copy one string into another?",
        options: [
            "strlen()",
            "strcmp()",
            "strcpy()",
            "strcat()"
        ],
        answer: "strcpy()"
    },

    {
        question: "Which function is used to compare two strings?",
        options: [
            "strcmp()",
            "strcpy()",
            "strlen()",
            "strcat()"
        ],
        answer: "strcmp()"
    },

    {
        question: "Which function is used to allocate memory dynamically?",
        options: [
            "malloc()",
            "printf()",
            "scanf()",
            "sizeof()"
        ],
        answer: "malloc()"
    },

    {
        question: "Which keyword is used to define a constant variable?",
        options: [
            "constant",
            "const",
            "define",
            "fixed"
        ],
        answer: "const"
    },

    {
        question: "Which preprocessor directive is used to define a macro?",
        options: [
            "#include",
            "#define",
            "#macro",
            "#const"
        ],
        answer: "#define"
    },

    {
        question: "Which operator is used to access the address of a variable?",
        options: [
            "*",
            "&",
            "@",
            "#"
        ],
        answer: "&"
    },

    {
        question: "Which operator is used to access the value at an address?",
        options: [
            "&",
            "*",
            "%",
            "#"
        ],
        answer: "*"
    },

    {
        question: "Which of the following is a valid C identifier?",
        options: [
            "2value",
            "my-value",
            "my_value",
            "float"
        ],
        answer: "my_value"
    },

    {
        question: "Which storage class provides a variable with local scope and retains its value between function calls?",
        options: [
            "auto",
            "register",
            "static",
            "extern"
        ],
        answer: "static"
    },

    {
        question: "Which keyword is used to declare a structure in C?",
        options: [
            "record",
            "struct",
            "structure",
            "class"
        ],
        answer: "struct"
    },

    {
        question: "Which statement is used for multi-way selection in C?",
        options: [
            "if",
            "for",
            "switch",
            "while"
        ],
        answer: "switch"
    },

    {
        question: "Which keyword is used to skip the remaining statements of the current loop iteration?",
        options: [
            "break",
            "skip",
            "continue",
            "pass"
        ],
        answer: "continue"
    },

    {
        question: "What is the size of an int data type in C?",
        options: [
            "Always 2 bytes",
            "Always 4 bytes",
            "Compiler/system dependent",
            "Always 8 bytes"
        ],
        answer: "Compiler/system dependent"
    }

];


// ================================
// Random Questions
// ================================
function getRandomQuestions() {

    const shuffled =
        [...questionBank].sort(
            () => Math.random() - 0.5
        );

    return shuffled.slice(0, 5);
}

const questions = getRandomQuestions();


// ================================
// Quiz Variables
// ================================
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let selected = false;
let quizFinished = false;


// ================================
// HTML Elements
// ================================
const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumberElement =
    document.getElementById("questionNumber");

const totalQuestionsElement =
    document.getElementById("totalQuestions");

const nextBtn =
    document.getElementById("nextBtn");

const timerElement =
    document.getElementById("timer");


// ================================
// Total Questions
// ================================
if (totalQuestionsElement) {

    totalQuestionsElement.textContent =
        questions.length;

}


// ================================
// Load Question
// ================================
function loadQuestion() {

    if (currentQuestion >= questions.length) {
        return;
    }

    selected = false;

    const current =
        questions[currentQuestion];


    questionElement.textContent =
        current.question;


    questionNumberElement.textContent =
        currentQuestion + 1;


    optionsElement.innerHTML = "";


    current.options.forEach(
        function (option) {

            const button =
                document.createElement("button");


            button.textContent =
                option;


            button.className =
                "btn btn-outline-primary w-100 option-btn mb-2";


            button.addEventListener(
                "click",
                function () {

                    if (selected || quizFinished) {
                        return;
                    }


                    selected = true;


                    const allButtons =
                        optionsElement.querySelectorAll(
                            "button"
                        );


                    allButtons.forEach(
                        function (btn) {
                            btn.disabled = true;
                        }
                    );


                    if (
                        option ===
                        current.answer
                    ) {

                        score++;


                        button.classList.remove(
                            "btn-outline-primary"
                        );


                        button.classList.add(
                            "btn-success"
                        );

                    } else {

                        button.classList.remove(
                            "btn-outline-primary"
                        );


                        button.classList.add(
                            "btn-danger"
                        );

                    }

                }
            );


            optionsElement.appendChild(
                button
            );

        }
    );

}


// ================================
// Next Button
// ================================
if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        function () {

            if (quizFinished) {
                return;
            }


            if (!selected) {

                alert(
                    "Please select an answer."
                );

                return;
            }


            currentQuestion++;


            if (
                currentQuestion <
                questions.length
            ) {

                loadQuestion();

            } else {

                finishQuiz();

            }

        }
    );

}


// ================================
// Timer
// ================================
const timerInterval =
    setInterval(
        function () {

            if (quizFinished) {
                clearInterval(
                    timerInterval
                );
                return;
            }


            timeLeft--;


            if (timerElement) {

                timerElement.textContent =
                    timeLeft;

            }


            if (timeLeft <= 0) {

                clearInterval(
                    timerInterval
                );

                finishQuiz();

            }

        },
        1000
    );


// ================================
// Finish Quiz
// ================================
async function finishQuiz() {

    if (quizFinished) {
        return;
    }

    quizFinished = true;

    clearInterval(
        timerInterval
    );


    const percentage =
        Math.round(
            (score / questions.length) *
            100
        );


    const result = {

        name: studentData.name,

        branch: studentData.branch,

        subject:
            studentData.subject || "C Programming",

        score: score,

        total: questions.length,

        percentage: percentage,

        date:
            new Date().toISOString()

    };


    // ================================
    // Save Latest Result Locally
    // ================================
    localStorage.setItem(
        "quizResult",
        JSON.stringify(result)
    );


    // ================================
    // Save History Locally
    // ================================
    let history =
        JSON.parse(
            localStorage.getItem(
                "quizHistory"
            )
        ) || [];


    history.push(result);


    localStorage.setItem(
        "quizHistory",
        JSON.stringify(history)
    );


    // ================================
    // Save Result to Supabase
    // ================================
    try {

        const { error } =
            await supabaseClient
                .from("quiz_results")
                .insert([
                    {
                        name:
                            result.name,

                        branch:
                            result.branch,

                        subject:
                            result.subject,

                        score:
                            result.score,

                        total:
                            result.total,

                        percentage:
                            result.percentage,

                        date:
                            result.date
                    }
                ]);


        if (error) {

            console.error(
                "Supabase Error:",
                error
            );

            alert(
                "Result online save થયું નથી:\n\n" +
                error.message
            );

        }

    } catch (error) {

        console.error(
            "Supabase Connection Error:",
            error
        );

        alert(
            "Supabase connection error:\n\n" +
            error.message
        );

    }


    // ================================
    // Result Page
    // ================================
    window.location.href =
        "result.html";

}


// ================================
// Start Quiz
// ================================
loadQuestion();


// ================================
// Logout
// ================================
function logout() {

    localStorage.removeItem(
        "isLoggedIn"
    );

    localStorage.removeItem(
        "studentData"
    );


    window.location.href =
        "index.html";

}
