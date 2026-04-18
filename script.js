// Typing Effect Logic
const textElement = document.getElementById("typing-text");
const roles = ["software development", "Data Visualization Enthusiast", "IT Engineering Student"];
let roleIndex = 0;

function updateText() {
    // Fade out
    textElement.style.opacity = 0;
    
    setTimeout(() => {
        // Change text
        textElement.innerText = roles[roleIndex];
        // Fade in
        textElement.style.opacity = 1;
        // Increment index
        roleIndex = (roleIndex + 1) % roles.length;
    }, 500); // Wait for fade out to complete
}

// Initial Call
updateText();

// Repeat every 3 seconds
setInterval(updateText, 3000);