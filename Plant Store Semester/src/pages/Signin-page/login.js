document.addEventListener('DOMContentLoaded', function() {
  const LoginForm = document.getElementById('loginForm');

  LoginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Get the values from the form inputs
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Log the email and password to the console
      console.log('Email:', email);
      console.log('Password:', password);

  });
});