const colors = [
    "#f1f5f8", "#ff5733", "#33ff57", "#3357ff", "#f333ff", "#33fff5", 
    "red", "blue", "green", "yellow", "purple", "pink", "orange", "brown"
  ];
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");
  
  btn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
  });
  
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  