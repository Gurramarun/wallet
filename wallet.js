document.addEventListener("DOMContentLoaded", function() {
    const transactionForm = document.getElementById("transaction-form");

    transactionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById("amount").value);
        const recipient = document.getElementById("recipient").value;

        // Simulating a transaction (for demonstration purposes).
        if (amount > 0 && recipient !== "") {
            alert(`Transaction successful: Sent $${amount.toFixed(2)} to ${recipient}`);
            // You would typically perform more robust validation and handle transactions on the server side.
        } else {
            alert("Invalid transaction details. Please check your input.");
        }
    });
});
