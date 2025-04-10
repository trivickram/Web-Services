
    function updateStats() {
      const text = document.getElementById("textInput").value.trim();
      const words = text.match(/\b\w+\b/g) || [];
      const sentences = text.split(/[.!?]+/).filter(Boolean);
      const paragraphs = text.split(/\n+/).filter(p => p.trim() !== '');
      const charsWithSpace = text.length;
      const charsNoSpace = text.replace(/\s/g, "").length;

      document.getElementById("wordCount").innerText = words.length;
      document.getElementById("charCount").innerText = charsWithSpace;
      document.getElementById("charNoSpace").innerText = charsNoSpace;
      document.getElementById("sentenceCount").innerText = sentences.length;
      document.getElementById("paraCount").innerText = paragraphs.length;

      const readTime = Math.ceil(words.length / 200);
      const speakTime = Math.ceil(words.length / 130);
      document.getElementById("readTime").innerText = `${readTime} min`;
      document.getElementById("speakTime").innerText = `${speakTime} min`;

      const freqMap = {};
      words.forEach(word => {
        const lower = word.toLowerCase();
        freqMap[lower] = (freqMap[lower] || 0) + 1;
      });

      const freqOutput = Object.entries(freqMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([word, freq]) => `${word} (${freq})`)
        .join(", ");
      document.getElementById("keywordFrequency").innerText = freqOutput || 'None';
    }

    function convertCase(type) {
      const textArea = document.getElementById("textInput");
      let text = textArea.value;
      if (type === "upper") textArea.value = text.toUpperCase();
      if (type === "lower") textArea.value = text.toLowerCase();
      if (type === "title") {
        textArea.value = text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
      }
      updateStats();
    }

    function copyText() {
      const text = document.getElementById("textInput");
      text.select();
      document.execCommand("copy");
      alert("Copied to clipboard!");
    }

    function clearText() {
      document.getElementById("textInput").value = "";
      updateStats();
    }

    function downloadText() {
      const text = document.getElementById("textInput").value;
      const blob = new Blob([text], { type: "text/plain" });
      const link = document.createElement("a");
      link.download = "word-count-text.txt";
      link.href = window.URL.createObjectURL(blob);
      link.click();
    }

    function toggleTheme() {
      const root = document.documentElement;
      const currentTheme = root.getAttribute("data-theme");
      root.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
    }

    updateStats();