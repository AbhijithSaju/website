function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
}

function showInterest() {
  alert("Thanks for your interest!");
}

document.getElementById("queryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect input values (can be used later to send to server/EmailJS/etc.)
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Display confirmation message
  document.getElementById("formMsg").textContent = "Thank you for your query! We’ll get back to you soon.";

  // Clear the form
  document.getElementById("queryForm").reset();
});

