 function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function showMessage() {
  alert("Thanks for visiting my portfolio 🚀");
}

/* Typing Effect */
const text = ["DevOps Learner 🚀", "Future Engineer 💻", "Tech Enthusiast 🔥"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    document.getElementById("typing").innerHTML = currentText;

    if (j == text[i].length) isDeleting = true;
    if (j == 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, 100);
}

type();
