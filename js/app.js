const spiderImage = document.querySelector("img");
let innerWidth = window.innerWidth - 50;
let innerHeight = window.innerHeight - 50;
let score = 0;

setInterval(() => {
  let top = Math.random() * innerWidth;
  let left = Math.random() * innerHeight;

  spiderImage.style = `
    transition: 0.3s;
    position:absolute;
    left: ${top}px;
    top:${left}px;
    `;
}, 700);

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "spider-image") {
    console.log("you get score");
    score++;
  }
});
function saveName() {
  const usernameInput = document.getElementById("usernameInput");
  const username = usernameInput.value;

  localStorage.setItem("username", username);
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
window.onload = function () {
  const username = localStorage.getItem("username");
  if (username) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
};

// Function to update the score when the user clicks
function increaseScore() {
  score++;
  updateScoreDisplay();
}

// Function to update the score display in the HTML
function updateScoreDisplay() {
  const scoreValueElement = document.getElementById("scoreValue");
  scoreValueElement.textContent = score;
}

// Event listener to track mouse clicks on the document
document.addEventListener("click", increaseScore);
function handleLevelChange() {
  const levelSelect = document.getElementById("level");
  const selectedLevel = levelSelect.value;

  // Calculate the speed based on the level
  let speed;
  switch (selectedLevel) {
    case "easy":
      speed = 1; // Adjust this value for desired speed
      break;
    case "medium":
      speed = 2; // Adjust this value for desired speed
      break;
    case "hard":
      speed = 3; // Adjust this value for desired speed
      break;
    default:
      speed = 1;
  }

  // Update the picture animation speed
  const picture = document.querySelector(".picture");
  picture.style.animationDuration = `${4 / speed}s`; // Adjust the "4" for desired animation duration
}

// Event listener to track level changes
document.getElementById("level").addEventListener("change", handleLevelChange);
