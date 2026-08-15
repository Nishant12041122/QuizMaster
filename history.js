document.addEventListener("DOMContentLoaded", function () {

    loadHistory();

});


// ==========================================
// Load Quiz History
// ==========================================

function loadHistory() {

    const historyTable =
        document.getElementById("historyTable");

    const noHistory =
        document.getElementById("noHistory");


    // Get history from Local Storage

    let history =
        JSON.parse(
            localStorage.getItem("quizHistory")
        ) || [];


    // Clear old table

    historyTable.innerHTML = "";


    // If no history

    if (history.length === 0) {

        noHistory.style.display = "block";

        return;

    }


    noHistory.style.display = "none";


    // Show latest result first

    history
        .slice()
        .reverse()
        .forEach(function (result, index) {


            const row =
                document.createElement("tr");


            // Branch fallback
            // This prevents "undefined"

            const branch =
                result.branch || "N/A";


            // Score

            const score =
                result.score ?? 0;


            const total =
                result.total ?? 0;


            // Percentage

            const percentage =
                result.percentage ?? 0;


            // Date

            const date =
                result.date || "N/A";


            // Result row

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


            historyTable.appendChild(row);


        });

}



// ==========================================
// Clear Quiz History
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


        // Delete ONLY quiz history

        localStorage.removeItem(
            "quizHistory"
        );


        // Clear password field

        document.getElementById(
            "deletePassword"
        ).value = "";


        // Hide error

        passwordError.style.display =
            "none";


        // Close modal

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


        // Reload history

        loadHistory();


        alert(
            "Quiz history deleted successfully!"
        );


    } else {


        // Wrong password

        passwordError.style.display =
            "block";


        document.getElementById(
            "deletePassword"
        ).value = "";


    }

}