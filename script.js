document.addEventListener("DOMContentLoaded", () => {
  // Welcome message with prompt only on top page
  const welcomeDiv = document.getElementById("welcome-message");
  if (welcomeDiv) {
    const userName = prompt("🌸 Welcome to Anime Galaxy! What's your name?");
    welcomeDiv.innerText = userName
      ? `🌸 Hello, ${userName}! Enjoy your anime journey!`
      : "🌸 Welcome to Anime Galaxy! Enjoy your anime journey!";
  }

  // Anime quiz function
  window.checkAnswer = function () {
    const answerInput = document.getElementById("quiz-answer");
    const result = document.getElementById("quiz-result");
    if (!answerInput || !result) return;

    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer === "one piece") {
      result.style.color = "#7CFC00"; // light green
      result.innerText = "✅ Correct! Luffy is from One Piece!";
    } else {
      result.style.color = "#FF4500"; // orange red
      result.innerText = "❌ Nope! Hint: It's the pirate adventure anime.";
    }
  };

  // Contact form submission
  const sendBtn = document.getElementById("send-btn");
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const name = document.getElementById("visitor-name").value.trim();
      const message = document.getElementById("visitor-message").value.trim();
      if (name && message) {
        alert(`Thanks, ${name}! Your message has been received:\n"${message}"`);
        document.getElementById("contact-form").reset();
      } else {
        alert("Please fill in both name and message.");
      }
    });
  }
});