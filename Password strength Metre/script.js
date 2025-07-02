 const passwordInput = document.getElementById("passwordInput");
    const strengthMessage = document.getElementById("strengthMessage");
    const strengthBar = document.getElementById("strengthBar");

    passwordInput.addEventListener("input", () => {
      
      const password = passwordInput.value;
      const strength = calculateStrength(password);
      if(password.length===0){
        strengthMessage.style.display="none"
      }
      else{
        strengthMessage.style.display="block"
      }

      // Update message
      let msg = "Strength: ";
      let color = "red";


      switch (strength) {
        
        case 1:
          msg += "Very Weak";
          color = "red";
          break;
        case 2:
          msg += "Weak";
          color = "orange";
          break;
        case 3:
          msg += "Medium";
          color = "gold";
          break;
        case 4:
          msg += "Strong";
          color = "lightgreen";
          break;
        case 5:
          msg += "Very Strong 💪";
          color = "green";
          break;
      }

      strengthMessage.textContent = msg;
      strengthMessage.style.color = color;
    
    });

    function calculateStrength(password) {
      let score = 0;
      if (password.length >= 8) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/[a-z]/.test(password)) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;
      console.log(score);
      return score;
    }