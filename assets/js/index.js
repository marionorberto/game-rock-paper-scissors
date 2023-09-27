const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const pcScore = document.querySelector(".pcScore");
const yourScore = document.querySelector(".yourScore");
const result = document.querySelector(".result");

const yourDisplay = document.querySelector(".yourDisplay");
const pcDisplay = document.querySelector(".pcDisplay");

let pc, your;

let score = 0;
let computer = 0;

document.addEventListener("click", (e) => {
  const el = e.target;

  if (
    el.classList.contains("btn-rock") ||
    el.classList.contains("btn-paper") ||
    el.classList.contains("btn-scissors")
  ) {
    yourChoice(pcChoice, el);
    checkResult();
  }
});

const yourChoice = (callback, el) => {
  if (el.classList.contains("btn-rock")) yourDisplay.innerHTML = "👊";
  if (el.classList.contains("btn-paper")) yourDisplay.innerHTML = "🤚";
  if (el.classList.contains("btn-scissors")) yourDisplay.innerHTML = "🤞";

  callback();
  return (your = yourDisplay.innerHTML);
};

const pcChoice = () => {
  const numRand = rand(3, 1);
  if (numRand == 0) pcDisplay.innerHTML = "👊";
  if (numRand == 1) pcDisplay.innerHTML = "🤚";
  if (numRand == 2) pcDisplay.innerHTML = "🤞";

  return (pc = pcDisplay.innerHTML);
};

const timing = () => {
  let time = 0;
  setInterval(() => {
    time++;
    console.log(time);
  }, 1000);
};

const rand = (max, min) => Math.floor(Math.random() * (max - min + min));

const checkResult = () => {
  if (your == pc) {
    return (result.innerHTML = "draw 🤝");
  } else if (your == "👊" && pc == "🤞") {
    score++;
    yourScore.innerHTML = `${score}`;
    return (result.innerHTML = "you've won 😃");
  } else if (your == "👊" && pc == "🤚") {
    computer++;
    pcScore.innerHTML = `${computer}`;
    return (result.innerHTML = "you've lost😢");
  } else if (your == "🤚" && pc == "🤞") {
    computer++;
    pcScore.innerHTML = `${computer}`;
    return (result.innerHTML = "you've lost😢");
  } else if (your == "🤚" && pc == "👊") {
    score++;
    yourScore.innerHTML = `${score}`;
    return (result.innerHTML = "you've won😃");
  } else if (your == "🤞" && pc == "👊") {
    computer++;
    pcScore.innerHTML = `${computer}`;
    return (result.innerHTML = "you've lost😢");
  } else if (your == "🤞" && pc == "🤚") {
    score++;
    yourScore.innerHTML = `${score}`;
    return (result.innerHTML = "you've won 😃");
  } else {
    yourScore.innerHTML = "0";
    pcScore.innerHTML = "0";
    return (result.innerHTML = "");
  }
};
