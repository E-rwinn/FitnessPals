// Open file picker when clicking the profile image
document.getElementById("profileImage").addEventListener("click", () => {
  document.getElementById("fileInput").click();
});

// Update profile image preview and save to localStorage
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        document.getElementById("profileImage").src = imageUrl;
        localStorage.setItem("profileImage", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  });

// Save profile info to localStorage and update account info
function saveProfile() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  localStorage.setItem("loggedInUser", username);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Profile saved successfully!");
  window.location.href = "TEST-DROPDOWN.html"; // Redirect after saving
}

// Load saved profile info and image on page load
window.onload = function () {
  const savedImage = localStorage.getItem("profileImage");
  const savedUsername = localStorage.getItem("loggedInUser");
  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (savedImage) document.getElementById("profileImage").src = savedImage;
  if (savedUsername) document.getElementById("username").value = savedUsername;
  if (savedEmail) document.getElementById("email").value = savedEmail;
  if (savedPassword) document.getElementById("password").value = savedPassword;
};
