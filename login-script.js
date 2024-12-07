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
});

doctorTab.addEventListener("click", () => {
    // Switch to doctor form
    doctorTab.classList.add("active");
    patientTab.classList.remove("active");
    doctorForm.style.display = "block";
    patientForm.style.display = "none";
});

// Default to patient login on page load
patientTab.classList.add("active");
patientForm.style.display = "block";
doctorForm.style.display = "none";

// Add login functionality (just a placeholder for now)
document.getElementById("patientLoginBtn").addEventListener("click", () => {
    const patientId = document.getElementById("patientId").value;
    const patientPassword = document.getElementById("patientPassword").value;
    if (patientId && patientPassword) {
        alert("Patient Logged In Successfully!");
    } else {
        alert("Please enter both Patient ID and Password.");
    }
});

document.getElementById("doctorLoginBtn").addEventListener("click", () => {
    const doctorId = document.getElementById("doctorId").value;
    const doctorPassword = document.getElementById("doctorPassword").value;
    if (doctorId && doctorPassword) {
        alert("Doctor Logged In Successfully!");
    } else {
        alert("Please enter both Doctor ID and Password.");
    }
});