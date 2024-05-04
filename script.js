document.addEventListener("DOMContentLoaded", function() {
  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Add your login logic here (e.g., validating credentials)
  
    // Redirect to the next webpage
    window.location.href = "nextpage.html"; // Replace "next-page.html" with the URL of the next webpage
  });
    // You can add login functionality here
    // Example:
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    // Your login logic...
  });

  // Handle social login buttons
  document.getElementById("googleLogin").addEventListener("click", function() {
    // Redirect or initiate Google login process
    // Example:
    // window.location.href = "https://accounts.google.com";
  });

  document.getElementById("facebookLogin").addEventListener("click", function() {
    // Redirect or initiate Facebook login process
    // Example:
    // window.location.href = "https://www.facebook.com";
  });

  document.getElementById("twitterLogin").addEventListener("click", function() {
    // Redirect or initiate Twitter login process
    // Example:
    // window.location.href = "https://twitter.com";
  });
});