// Typing animation
const typingText = ["Frontend Developer", "React.js Expert", "PHP Developer","FullStack Developer","UI Developer"];
let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function type() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) type();
});

// Hamburger menu toggle
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}

// Theme switcher
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "light" ? "dark" : "light");
}

// Contact form fake handler
