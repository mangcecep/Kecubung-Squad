document.querySelector(".user-name").textContent = "Sir Niggha Fausta";
document.querySelector(".user-major").textContent = "PPLG";
document.querySelector(".user-age").textContent = "1 bulan lebih 15 tahun";
document.querySelector(".user-history").textContent = "Harvard Padang";
function showLogoutPopup() {
  document.getElementById("logout-popup").style.display = "flex";
}

function closeLogoutPopup() {
  document.getElementById("logout-popup").style.display = "none";
}

function confirmLogout() {
  window.location.href = "login.html";
}
