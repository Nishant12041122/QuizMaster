const result = JSON.parse(
    localStorage.getItem("quizResult")
);


if (!result) {

    window.location.href = "index.html";

}


document.getElementById("studentName").textContent =
    result.name;

document.getElementById("branch").textContent =
    result.branch;

document.getElementById("subject").textContent =
    result.subject;

document.getElementById("score").textContent =
    result.score;

document.getElementById("total").textContent =
    result.total;

document.getElementById("percentage").textContent =
    result.percentage;


const status =
    document.getElementById("status");


if (result.percentage >= 40) {

    status.textContent = "PASS";

    status.classList.add(
        "bg-success"
    );

} else {

    status.textContent = "FAIL";

    status.classList.add(
        "bg-danger"
    );

}