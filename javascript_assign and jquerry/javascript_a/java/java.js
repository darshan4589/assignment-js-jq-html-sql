document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#myForm");
    const submitButton = document.querySelector("#submit");
  
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const firstNameInput = document.querySelector("#firstname");
        const lastNameInput = document.querySelector("#lastname");
        const phoneInput = document.querySelector("#phone");
        const officeInput = document.querySelector("#phone-office")
        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password")
        const conpasswordInput = document.querySelector('#conpassword')
        const aboutInput = document.querySelector('#txt-about')
        const monthInput = document.querySelector('#birth-month')
        const dayInput = document.querySelector('#birth-day')
        const yearInput = document.querySelector('#birth-year')
        const firstNameError = document.querySelector("#firstname-error");
        const lastNameError = document.querySelector("#lastname-error");
        const phoneError = document.querySelector("#phone-error");
        const officeError = document.querySelector("#officeno-error")
        const emailError = document.querySelector('#email-error')
        const passwordError = document.querySelector('#password-error')
        const conpasswordError = document.querySelector('#con-password-error')
        const genderError = document.querySelector("#gender-error");
        const intError = document.querySelector("#interror")
        const dtError = document.querySelector("#dt-error")
        const aboutError = document.querySelector('#aberror')
        let isValid = true;
        
        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

        const numericRegex = /^\d+$/;

        if (firstNameInput.value.trim() === "") {
          firstNameError.textContent = "First name is required.";
          isValid = false;
        } else if (numericRegex.test(firstNameInput.value.trim())) {
          firstNameError.textContent = "First name cannot be a number.";
          isValid = false;
        } else if (specialCharRegex.test(firstNameInput.value.trim())){
          firstNameError.textContent = "first name cannot be a special character";
          isValid = false;
        }
      else {
          firstNameError.textContent = "";
        }
        if (aboutInput.value.trim()=== '') {
          aboutError.textContent = "text must enter in about us";
          isValid = false;
        } else {
          aboutError.textContent = "";
        }
    
    
        if (lastNameInput.value.trim() === "") {
          lastNameError.textContent = "Last name is required.";
          isValid = false;
        } else if (numericRegex.test(lastNameInput.value.trim())) {
          lastNameError.textContent = "Last name cannot be a number.";
          isValid = false;
        } else if (specialCharRegex.test(lastNameInput.value.trim())) {
          lastNameError.textContent = "Last name cannot be a special character.";
          isValid = false;}
          else {
          lastNameError.textContent = "";
        }
    
        if (phoneInput.value.trim() === "") {
          phoneError.textContent = "Phone number is required.";
          isValid = false;
        } else if (!isValidPhoneNumber(phoneInput.value.trim())) {
          phoneError.textContent = "Invalid phone number.";
          isValid = false;
        } else {
          phoneError.textContent = "";
        }
    
        if (officeInput.value.trim() === '') {
          officeError.textContent = "Office number is required.";
          isValid = false;
        } else if (!isValidOfficeNumber(officeInput.value.trim())) {
          officeError.textContent = "Invalid office number.";
          isValid = false;
        } else {
          officeError.textContent = "";
        }
    
        if (emailInput.value.trim() === "") {
          emailError.textContent = "Email is required.";
          isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
          emailError.textContent = "Invalid email address.";
          isValid = false;
        } else {
          emailError.textContent = "";
        } 
    
        if (passwordInput.value.trim() === '') {
          passwordError.textContent = "password is required.";
          isValid = false;
        } else if (passwordInput.value.trim().length < 8){
          passwordError.textContent = "at least 8 character required";
          isValid = false;
        } else {
          passwordError.textContent = "";
        }
    
        if (conpasswordInput.value.trim() !== passwordInput.value.trim()) {
           conpasswordError.textContent = "password not match";
           isValid = flase;
        }  else if (conpasswordInput.value.trim().length < 8){
          conpasswordError.textContent = "at least 8 character required";
          isValid = false;
        } else {
          conpasswordError.textContent = "";
        }
        
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        // console.log(genderInputs);
        let isGenderSelected = false;
    
        for (const genderInput of genderInputs) {
          if (genderInput.checked) {
            // console.log(genderInput);
            isGenderSelected = true;
            break;
          }
        }
    
        if (!isGenderSelected) {
          genderError.textContent = "Please select a gender.";
          isValid = false;
        } else {
          genderError.textContent = "";
        }
        
        const intInputs = document.querySelectorAll("input[name = 'chkbx-activity']")
        // console.log(intInputs);
        let isIntSelected = false;
    
        for (const intInput of intInputs) {
          if (intInput.checked) {
            console.log(intInput);
            isIntSelected = true;
            break;
          }
          }
        if (!isIntSelected) {
          intError.textContent = "please select at least one interest";
          isValid = false;
        } else {
          intError.textContent = "";
        }
        
        // if (
        //     dayInput.value === "day" && // Check if "day" option is selected
        //     monthInput.value === "month" && // Check if "month" option is selected
        //     yearInput.value === "year" 
        //   ) {
        //     dtError.textContent = "Please enter a valid date of birth.";
        //     isValid = false;
        //   } 
        //   else {
        //     dtError.textContent = "";
        //   }
    
    
        if (isValid) {
          form.submit(); 
        }
    })  ;
    
    
    
    const startYear = 1900;
    const endYear = new Date().getFullYear(); 
    const selectYear = document.getElementById("birth-year");

    for (var year = endYear; year >= startYear; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        selectYear.appendChild(option);
}

    function isValidPhoneNumber(phoneNumber) {
      const phoneRegex = /^\d{10}$/; 
      return phoneRegex.test(phoneNumber);
    }
  
    function isValidOfficeNumber(officeNumber) {
      const officeRegex = /^\d{10}$/; 
      return officeRegex.test(officeNumber);
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
})  ;
  