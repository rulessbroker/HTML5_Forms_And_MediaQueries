
const text = document.querySelector("#text");
      const textError = document.querySelector(".text-error");
      text.addEventListener('input', function input() {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(text.value)) textError.textContent = " ";
        else textError.textContent = "Name is Incorrect";
      });

      const email = document.querySelector('#email');
      const emailError = document.querySelector('.email-error');
      email.addEventListener('input', function input(){
          let emailRegex = RegExp('^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@([a-z1-9]+)([.][a-z]*)?(\.[a-z]{2,})$');
          if(emailRegex.test(email.value)) 
              emailError.textContent = " ";
          else emailError.textContent = "Email is Incorrect";
      });
  
      const number = document.querySelector('#number');
        const numberError = document.querySelector('.number-error');
        number.addEventListener('input', function input(){
            let numberRegex = RegExp('^[6-9]{1}[0-9]{1}[1-9]{8}$');
            if(numberRegex.test(number.value)) 
            numberError.textContent = " ";
            else numberError.textContent = "number is Incorrect";
        });