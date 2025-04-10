const colorPicker = document.getElementById("colorPicker");
      const colorCode = document.getElementById("colorCode");

      colorPicker.addEventListener("input", function () {
        colorCode.textContent = colorPicker.value;
      });