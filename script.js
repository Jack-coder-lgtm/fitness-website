const quotes = [
    "The only bad workout is the one that didn’t happen.",
    "Push yourself, because no one else is going to do it for you.",
    "Success starts with self-discipline.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "The body achieves what the mind believes."
    "Pain is weakness leaving the body"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = `"${quotes[randomIndex]}"`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        const validEmail = "user@example.com";
        const validPassword = "password123";
  
        if (email === validEmail && password === validPassword) {
          window.location.href = "index.html";
        } else {
          document.getElementById("error-message").textContent = "Invalid email or password.";
        }
      });
    }
  });
  
