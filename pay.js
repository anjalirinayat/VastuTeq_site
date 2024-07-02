document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const errorMessage = document.getElementById("errorMessage");
    const summary = document.getElementById("summary");
    const summaryText = document.getElementById("summaryText");
    const container = document.querySelector(".container");
    const doneButton = document.getElementById("doneButton");

    form.addEventListener("submit", (e) => {
        validateForm(e);
    });

    doneButton.addEventListener("click", () => {
        summary.classList.add('hidden'); // Hide the summary
        container.classList.remove('hidden'); // Show the container with the form and billing heading
    });

    function validateForm(e) {
        e.preventDefault(); // Prevent form submission and page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const card = document.getElementById("card").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        const errors = [];

        if (name === "") errors.push("Name required");
        if (email === "") errors.push("Email required");
        else if (!isValidEmail(email)) errors.push("Invalid email");
        if (phone === "") errors.push("Phone number required");
        if (card === "") errors.push("Card number required");
        if (cvv === "") errors.push("CVV required");

        if (errors.length > 0) {
            errorMessage.removeAttribute('hidden');
            errorMessage.innerHTML = errors.join(', ');
            summary.classList.add('hidden');
        } else {
            errorMessage.setAttribute('hidden', true);
            displaySummary(name, email, phone, card);
            form.reset(); // Clear form fields after displaying the summary
            container.classList.add('hidden'); // Hide the container with the form and billing heading
        }
    }

    function isValidEmail(email) {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        return regex.test(email);
    }

    function displaySummary(name, email, phone, card) {
        summaryText.innerHTML = `
            <div class="summary-details">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile no:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Card details:</strong> ${card}</p>
            </div>
        `;
        summary.classList.remove('hidden'); // Show the summary
    }
});
