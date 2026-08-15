
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("studentName").value.trim();const branch = document.getElementById("branch").value;
        const subject = document.getElementById("subject").value;

        if (name === "" || branch === "" || subject === "") {
            alert("Please fill all details.");
            return;
        }

        const studentData = {
            name: name,
            branch: branch,
            subject: subject
        };

        localStorage.setItem(
            "studentData",
            JSON.stringify(studentData)
        );

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "quiz.html";
    });

});