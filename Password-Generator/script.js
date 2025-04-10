function generatePassword() {
    const length = document.getElementById("length").value || 12;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecialChars =
      document.getElementById("specialChars").checked;

    let characterPool = "";

    if (includeUppercase) characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characterPool += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characterPool += "0123456789";
    if (includeSpecialChars)
      characterPool += '!@#$%^&*()_+-=[]{}|;:",.<>?/';

    if (!characterPool) {
      alert("Please select at least one character type!");
      return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }

    document.getElementById(
      "passwordOutput"
    ).textContent = `Generated Password: ${password}`;
  }