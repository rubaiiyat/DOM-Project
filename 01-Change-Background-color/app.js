window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("btn-id");

  btn.addEventListener("click", function () {
    const bgColor = rgbGenerator();

    root.style.backgroundColor = bgColor;
  });
}

function rgbGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}
