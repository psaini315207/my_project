function showMessage() {
  alert("Hello Prince 👋 Thanks for visiting!");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}