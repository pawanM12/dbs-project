// Variables
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const bookBtn = document.getElementById("bookBtn");
const loginPrompt = document.getElementById("loginPrompt");

// Simulate user login state (for demo purposes)
let isLoggedIn = false;

// Show login/register prompt on button click
loginBtn.addEventListener("click", () => {
    // Simulate login (in a real app, you would redirect to login page or show a modal)
    isLoggedIn = true;
    updateUI();
});

registerBtn.addEventListener("click", () => {
    // Simulate register (in a real app, you would redirect to registration page or show a modal)
    isLoggedIn = true;
    updateUI();
});

// Update UI based on login state
function updateUI() {
    if (isLoggedIn) {
        bookBtn.classList.add("enabled");
        bookBtn.removeAttribute("disabled");
        loginPrompt.style.display = "none";
    }
}

// Initial UI
