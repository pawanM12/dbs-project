document.getElementById("registerBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!fullName || !email || !age || !gender || !password || !confirmPassword) {
        alert("Please fill out all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Placeholder for actual registration logic (e.g., API call)
    alert("Registration Successful! Welcome, " + fullName);
});
