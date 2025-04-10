const input = document.getElementById("markdownInput");
const preview = document.getElementById("markdownPreview");

function renderPreview() {
  const rawText = input.value;
  preview.innerHTML = marked.parse(rawText);
}

function copyMarkdown() {
  navigator.clipboard.writeText(input.value);
  alert("Markdown copied!");
}

function copyPreview() {
  navigator.clipboard.writeText(preview.innerHTML);
  alert("HTML preview copied!");
}

function clearText() {
  input.value = "";
  renderPreview();
}

function downloadMarkdown() {
  const blob = new Blob([input.value], { type: "text/markdown" });
  const link = document.createElement("a");
  link.download = "markdown.md";
  link.href = URL.createObjectURL(blob);
  link.click();
}

function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}

renderPreview();