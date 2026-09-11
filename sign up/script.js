// Get form element
const signupForm = document.getElementById('signupForm');

// Add event listener for form submission
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page refresh on submit

  // Collect input values
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;

  // Simple alert to show basic JS functionality
  alert(`Account Created Successfully!\nWelcome, ${name} ${surname}!`);

  // Clear input fields
  signupForm.reset();
});