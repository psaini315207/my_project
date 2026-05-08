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
 /* Smooth Cursor Trail */
const trails = [];

for (let i = 0; i < 15; i++) {
  const div = document.createElement("div");
  div.className = "trail";
  document.body.appendChild(div);
  trails.push(div);
}

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  trails.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = x + "px";
      trail.style.top = y + "px";
    }, index * 20);
  });
});
<script>

document.addEventListener("mousemove", e => {

  let dot = document.createElement("div");

  dot.className = "trail";

  dot.style.left = e.clientX + "px";

  dot.style.top = e.clientY + "px";

  document.body.appendChild(dot);

  setTimeout(() => dot.remove(), 300);

});


/* CLOCK */

 function updateClock() {

  const now = new Date();

  const time = now.toLocaleTimeString();

  document.getElementById("clock").innerHTML = time;
}

updateClock();

setInterval(updateClock, 1000);
