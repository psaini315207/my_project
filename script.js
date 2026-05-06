 /* Contact Form */
function sendMessage(e) {
  e.preventDefault();
  alert("Your request has been sent 🚀 I will contact you soon!");
}

/* Mouse Cursor Effect */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
