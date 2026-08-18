document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadHistory();

    }
);


// ==========================================
// LOAD HISTORY
// ==========================================

function loadHistory() {

    const historyTable =
        document.getElementById(
            "historyTable"
        );

    const noHistory =
        document.getElementById(
            "noHistory"
        );


    let history =
        JSON.parse(
            localStorage.getItem(
                "quizHistory"
            )
        ) || [];


    historyTable.innerHTML = "";


    // No history

    if (history.length === 0) {

        noHistory.style.display =
            "block";

        return;

    }


    noHistory.style.display =
        "none";


    // Latest first

    history
        .slice()
        .reverse()
        .forEach(
            function (result, index) {

                const row =
                    document.createElement(
                        "tr"
                    );


                const branch =
                    result.branch || "N/A";


                const score =
                    result.score ?? 0;


                const total =
                    result.total ?? 0;


                const percentage =
                    result.percentage ?? 0;


                const date =
                    result.date || "N/A";


                row.innerHTML = `

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${result.name || "N/A"}
                    </td>

                    <td>
                        ${branch}
                    </td>

                    <td>
                        ${result.subject || "N/A"}
                    </td>

                    <td>
                        ${score}/${total}
                    </td>

                    <td>

                        <span class="badge ${
                            percentage >= 40
                                ? "bg-success"
                                : "bg-danger"
                        }">

                            ${percentage}%

                        </span>

                    </td>

                    <td>
                        ${date}
                    </td>

                `;


                historyTable.appendChild(
                    row
                );

            }
        );

}


// ==========================================
// DELETE HISTORY
// ==========================================

function confirmDeleteHistory() {

    const password =
        document.getElementById(
            "deletePassword"
        ).value;


    const passwordError =
        document.getElementById(
            "passwordError"
        );


    // Correct password

    if (password === "1980") {


        localStorage.removeItem(
            "quizHistory"
        );


        document.getElementById(
            "deletePassword"
        ).value = "";


        passwordError.style.display =
            "none";


        const modalElement =
            document.getElementById(
                "passwordModal"
            );


        const modal =
            bootstrap.Modal.getInstance(
                modalElement
            );


        if (modal) {

            modal.hide();

        }


        loadHistory();


        alert(
            "Quiz history deleted successfully!"
        );


    } else {


        passwordError.style.display =
            "block";


        document.getElementById(
            "deletePassword"
        ).value = "";

    }

}
