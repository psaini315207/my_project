 alert("JS working");
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function sendMessage(e) {
  e.preventDefault();
  alert("Thanks! I will contact you soon 🚀");
}

/* Typing effect */
const text = ["DevOps Learner 🚀", "Freelancer 💻", "Future Engineer 🔥"];
let i = 0, j = 0, current = "", del = false;

function type() {
  if (!del && j <= text[i].length) {
    current = text[i].substring(0, j++);
  } else if (del && j >= 0) {
    current = text[i].substring(0, j--);
  }

  document.getElementById("typing").innerHTML = current;

  if (j == text[i].length) del = true;
  if (j == 0) {
    del = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, 100);
}

type();
/* Cursor Trail Effect */
document.addEventListener("mousemove", function(e) {
  const trail = document.createElement("div");
  trail.classList.add("trail");

  document.body.appendChild(trail);

  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";

  setTimeout(() => {
    trail.remove();
  }, 500); // trail fade time
});
