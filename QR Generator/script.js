let qr;

      function generateQR() {
        const input = document.getElementById("qr-input").value;
        const qrContainer = document.getElementById("qrcode");
        qrContainer.innerHTML = "";

        if (input.trim() !== "") {
          qr = new QRCode(qrContainer, {
            text: input,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
          });
        }
        qrContainer.style.display = "block";
      }