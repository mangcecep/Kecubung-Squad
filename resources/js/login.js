function showPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "flex";
  }
}

function acceptTerms() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "none";
    window.location.href = "home.html"; // Ganti dengan halaman tujuan kamu
  }
}
