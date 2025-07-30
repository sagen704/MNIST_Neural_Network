const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let drawing = false;

canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;

  const size = 20; // adjust brush size
  const half = size / 2;

  ctx.fillStyle = "rgba(0, 0, 0, 0.8)"; // semi-transparent black
  ctx.fillRect(e.offsetX - half, e.offsetY - half, size, size);
}

function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  document.getElementById("result").innerText = "Prediction:";
}

function predict() {
  const image = canvas.toDataURL("image/png");
  fetch("/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: image }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerText = "Prediction: " + data.digit;
    });
}
