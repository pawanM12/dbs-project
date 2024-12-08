const form = document.getElementById('appointmentForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const hospital = document.getElementById('hospital').value;
  const patientId = document.getElementById('patientId').value;
  const department = document.getElementById('department').value;
  const time = document.getElementById('time').value;

  // You can add validation here to ensure valid input

  // Send data to server (e.g., using AJAX)
  fetch('/book-appointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      hospital,
      patientId,
      department,
      time
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Appointment booked successfully!');
      // Clear form fields
      form.reset();
    } else {
      alert('Error booking appointment. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
});
