//your JS code here. If required.
// On page load, check if credentials exist in localStorage
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  
  const existingBtn = document.getElementById("existing");
  
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block"; // Show existing user button
  }

  // Handle "Login as existing user" click
  existingBtn.addEventListener("click", function () {
    alert(`Logged in as ${savedUsername}`);
  });
};

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  alert(`Logged in as ${username}`);

  if (rememberMe) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove stored credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Reload to reflect changes
  location.reload();
});

