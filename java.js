const emoji = document.querySelector("#emoji");

const emojis = [
  "❤️",
  "😘",
  "👌",
  "🤣",
  "😊",
  "😂",
  "😍",
  "😒",
  "💕",
  "😁",
  "👍",
  "🙌",
  "🤦‍♀️",
  "🤦‍♂️",
  "🤷‍♀️",
  "🤷‍♂️",
  "✌️",
  "🤞",
  "😉",
  "😎",
  "🎶",
  "😢",
];

emoji.addEventListener("click", () => {
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});
