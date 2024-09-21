// Simple password protection script for Members Only section
function checkPassword() {
  const password = document.getElementById("password").value;
  const memberContent = document.getElementById("member-content");

  if (password === "SJAC2024") {
    memberContent.classList.remove("hidden");
  } else {
    alert("Incorrect password. Please try again.");
  }

  return false;  // prevent form from submitting
}
