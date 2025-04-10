
const picker = document.getElementById("colorPicker");
const preview = document.getElementById("colorPreview");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");
const favorites = document.getElementById("favorites");

function updateColor(color) {
  preview.style.background = color;
  hexCode.textContent = color;
  const rgb = hexToRgb(color);
  rgbCode.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function copyCode(type) {
  const text = type === 'hex' ? hexCode.textContent : rgbCode.textContent;
  navigator.clipboard.writeText(text);
  alert(`${type.toUpperCase()} code copied: ${text}`);
}

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  picker.value = randomColor;
  updateColor(randomColor);
}

function saveToFavorites() {
  const color = picker.value;
  const box = document.createElement("div");
  box.style.background = color;
  box.title = color;
  box.onclick = () => navigator.clipboard.writeText(color);
  favorites.appendChild(box);
}

picker.addEventListener("input", (e) => updateColor(e.target.value));
window.onload = () => updateColor(picker.value);