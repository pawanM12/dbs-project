// Tab switching functionality
const patientTab = document.getElementById("patientTab");
const doctorTab = document.getElementById("doctorTab");
const patientForm = document.querySelector(".patient-form");
const doctorForm = document.querySelector(".doctor-form");

patientTab.addEventListener("click", () => {
    // Switch to patient form
    patientTab.classList.add("active");
    doctorTab.classList.remove("active");
    patientForm.style.display = "block";
    doctorForm.style.display = "none";
    patientTab.setAttribute("aria-selected", "true");
    doctorTab.setAttribute("aria-selected", "false");
});

doctorTab.addEventListener("click", () => {
    // Switch to doctor form
    doctorTab.classList.add("active");
    patientTab.classList.remove("active");
    doctorForm.style.display = "block";
    patientForm.style.display = "none";
    doctorTab.setAttribute("aria-selected", "true");
    patientTab.setAttribute("aria-selected", "false");
});

// Default to patient login on page load
patientTab.classList.add("active");
patientForm.style.display = "block";
doctorForm.style.display = "none";
patientTab.setAttribute("aria-selected", "true");
doctorTab.setAttribute("aria-selected", "false");

// Add login functionality (just a placeholder for now)
document.getElementById("patientLoginBtn").addEventListener("click", () => {
    const patientId = document.getElementById("patientId").value;
    const patientPassword = document.getElementById("patientPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (!patientId || !patientPassword) {
        errorMessage.textContent = "Please enter both Patient ID and Password.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Patient Logged In Successfully!");
    }
});

document.getElementById("doctorLoginBtn").addEventListener("click", () => {
    const doctorId = document.getElementById("doctorId").value;
    const doctorPassword = document.getElementById("doctorPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (!doctorId || !doctorPassword) {
        errorMessage.textContent = "Please enter both Doctor ID and Password.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Doctor Logged In Successfully!");
    }
});
