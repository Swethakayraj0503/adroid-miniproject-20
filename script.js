const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomHexDigit();
  }
  return hexColor;
}

function getRandomHexDigit() {
  const hexDigits = "0123456789ABCDEF";
  return hexDigits[Math.floor(Math.random() * hexDigits.length)];
}
