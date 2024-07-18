const form = document.getElementById('registrationForm');
const feedbackDiv= document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {


      event.preventDefault(); 
      const usernameInput = document.getElementById('username');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById	('password');
    
      const usernametrimed = usernameInput.value.trim();
      const emailtimrd = emailInput.value.trim();
      const passwordtrimed = passwordInput.value.trim();

      var isValid = true;
      let messages =[];

      if (usernametrimed.value.length < 3) {
            isValid=false;
            messages.push  ("The user name must be more than 3 characters");
            return;
          } else {
            isValid = true;
          }

      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailtimrd.value)) {
             isValid = false;
             messages.push ('Insert an approprite email adress');
            return;
          } else {
            isValid = true;
          }
     if (passwordtrimed.value.length < 8) {
             isValid = false;
             messages.push ('Password must be at least 8 charachters long');
            return;
              } else {
                isValid = true;
              }
    feedbackDiv.style.display="block";
    if(isValid=True){
        feedbackDiv.textContent="Registration successful!"
        feedbackDiv.style.color="#28a745";
    }else{

        feedbackDiv.innerHTML=messages.join (",");
        feedbackDiv.style.color="#dc3545";

    }
    });
    