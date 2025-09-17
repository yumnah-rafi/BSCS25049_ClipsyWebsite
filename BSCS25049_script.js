window.onload = function() {
  document.getElementById("welcomePopup").style.display = "flex";
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();
};

function closePopup() {
  document.getElementById("welcomePopup").style.display = "none";
}

// Function to check stock availability
function checkStock(productName, inStock, statusId) {
    let message;

    if (inStock) {
        message = "Available ✅";
    } else {
        message = "Out of stock ❌";
    }

    let statusElement = document.getElementById(statusId);
    if (statusElement) {
        statusElement.textContent = message;
    } else {
        console.error("Status element not found: " + statusId);
    }
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let errorMsg = document.getElementById("errorMsg");

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "" || email === "" || message === "") {
                errorMsg.textContent = "⚠️ Please fill in all fields.";
                errorMsg.style.color = "red";
                return;
            }

            if (!emailPattern.test(email)) {
                errorMsg.textContent = "⚠️ Please enter a valid email.";
                errorMsg.style.color = "red";
                return;
            }

            errorMsg.textContent = "✅ Message sent successfully!";
            errorMsg.style.color = "green";

            form.reset();
        });
    }
});

function sendMessage() {
  let input = document.getElementById("user-input").value.toLowerCase();
  let chatLog = document.getElementById("chat-log");

  if (input.trim() === "") return; 
  let userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input;
  chatLog.appendChild(userMsg);

  let botMsg = document.createElement("p");
  botMsg.textContent = "Bot: " + getBotResponse(input);
  chatLog.appendChild(botMsg);

  document.getElementById("user-input").value = "";

  chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you?";
  } else if (input.includes("product")) {
    return "We have amazing hair clips! Check the Products page.";
  } else if (input.includes("contact")) {
    return "You can reach us at clipsy@gmail.com 📧";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day 💖";
  } else {
    return "Sorry, I didn’t understand that. Try asking about products or contact info.";
  }
}


