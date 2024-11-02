let balance = 0;
let userBetting = 0;

const images = [
  { src: "images/fire.png", probability: 0.42, multiplier: 1 },
  { src: "images/water.png", probability: 0.3, multiplier: 2 },
  { src: "images/nature.png", probability: 0.15, multiplier: 5 },
  { src: "images/golang.jpg", probability: 0.09, multiplier: 10 },
  { src: "images/linux.png", probability: 0.03, multiplier: 15 },
  { src: "images/pyth.png", probability: 0.01, multiplier: 50 },
];

// Prepare a weighted list of images based on probabilities
const weightedImages = [];
images.forEach((image) => {
  const count = Math.round(image.probability * 100);
  for (let i = 0; i < count; i++) {
    weightedImages.push(image);
  }
});

// User deposit function
const UserBalance = () => {
  const deposit = parseFloat(document.getElementById("userDeposit").value);

  if (!isNaN(deposit) && deposit > 0) {
    balance += deposit;
    document.getElementById("display").innerText = `Balance: $${balance.toFixed(
      2
    )}`;
  } else {
    alert("Please enter a valid positive number.");
  }

  document.getElementById("userDeposit").value = "";
};

// Function to set the number of lines
const numberOfLineBtn = () => {
  const numberOfLines = parseInt(
    document.getElementById("numberOfLines").value
  );

  if ([1, 2, 3].includes(numberOfLines)) {
    document.getElementById(
      "slothLines"
    ).innerText = `Number of lines: ${numberOfLines}`;
  } else {
    alert("Please enter a valid number of lines (1, 2, or 3).");
  }
};

// Betting function
const betBtn = () => {
  const betAmount = parseFloat(document.getElementById("userBet").value);

  if (!isNaN(betAmount) && betAmount > 0 && betAmount <= balance) {
    balance -= betAmount;
    userBetting += betAmount;

    document.getElementById("userBet").value = "";
    document.getElementById(
      "result"
    ).innerText = `Your Balance Updated For slot machine: $${userBetting.toFixed(
      2
    )}`;
    document.getElementById("display").innerText = `Balance: $${balance.toFixed(
      2
    )}`;
  } else {
    alert("You Don't Have Enough Balance!!");
  }
};

// Play function to select and display images randomly with probabilities
function play() {
  const slotMachine = document.getElementById("slotMachine");
  slotMachine.innerHTML = ""; // Clear previous images

  // Randomly select 9 images (3x3 grid) based on weighted probabilities
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * weightedImages.length);
    const selectedImage = weightedImages[randomIndex];

    const imgElement = document.createElement("img");
    imgElement.src = selectedImage.src;
    imgElement.className = "slot-image";
    slotMachine.appendChild(imgElement);
  }
}
