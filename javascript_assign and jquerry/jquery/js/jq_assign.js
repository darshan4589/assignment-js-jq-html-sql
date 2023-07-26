
$(document).ready(function() {
    console.log("abc");
    const form = $("#myForm");
    const submitButton = $("#submit");

    submitButton.on("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const firstNameInput = $("#firstname");
        const lastNameInput = $("#lastname");
        const phoneInput = $("#phone");
        const officeInput = $("#phone-office");
        const emailInput = $("#email");
        const passwordInput = $("#password");
        const conpasswordInput = $("#conpassword");
        const aboutInput = $("#txt-about");
        const monthInput = $('#birth-month');
        const dayInput = $('#birth-day');
        const yearInput = $('#birth-year');
        const firstNameError = $("#firstname-error");
        const lastNameError = $("#lastname-error");
        const phoneError = $("#phone-error");
        const officeError = $("#officeno-error");
        const emailError = $("#email-error");
        const passwordError = $("#password-error");
        const conpasswordError = $("#con-password-error");
        const genderError = $("#gender-error");
        const intError = $("#interror");
        const aboutError = $("#aberror");
        let isValid = true;

        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
        const numericRegex = /^\d+$/;

        if (firstNameInput.val().trim() === "") {
            firstNameError.text("First name is required.");
            isValid = false;
        } else if (numericRegex.test(firstNameInput.val().trim())) {
            firstNameError.text("First name cannot be a number.");
            isValid = false;
        } else if (specialCharRegex.test(firstNameInput.val().trim())){
            firstNameError.text("First name cannot be a special character.");
            isValid = false;
        } else {
            firstNameError.text("");
        }

        if (lastNameInput.val().trim() === "") {
            lastNameError.text("Last name is required.");
            isValid = false;
        } else if (numericRegex.test(lastNameInput.val().trim())) {
            lastNameError.text("Last name cannot be a number.");
            isValid = false;
        } else if (specialCharRegex.test(lastNameInput.val().trim())) {
            lastNameError.text("Last name cannot be a special character.");
            isValid = false;
        } else {
            lastNameError.text("");
        }
           
        if (phoneInput.val().trim() === "") {
            phoneError.text("Phone number is required.");
            isValid = false;
        } else if (!isValidPhoneNumber(phoneInput.val().trim())) {
            phoneError.text("Invalid phone number.");
            isValid = false;
        } else {
            phoneError.text("");
        }
        if (officeInput.val().trim() === "") {
            officeError.text("office number is required.");
            isValid = false;
        } else if (!isValidPhoneNumber(officeInput.val().trim())) {
            officeError.text("Invalid office number.");
            isValid = false;
        } else {
            officeError.text("");
        }

        if (emailInput.val().trim() === "") {
            emailError.text("Email is required.");
            isValid = false;
        } else if (!isValidEmail(emailInput.val().trim())) {
            emailError.text("Invalid email address.");
            isValid = false;
        } else {
            emailError.text("");
        }


        if (passwordInput.val().trim() === '') {
            passwordError.text("At least 8 character required");
            isValid = false;
        } else if (passwordInput.val().trim().length < 8){
            passwordError.text("At least 8 character required");
            isValid = false;
        } else {
            passwordError.textContent("");
        }
    
        if (conpasswordInput.val().trim() !== passwordInput.val().trim()) {
            conpasswordError.text("password not match");
            isValid = flase;
        }  else if (conpasswordInput.val().trim().length < 8){
            conpasswordError.text("At least 8 character required");
            isValid = false;
        } else {
            conpasswordError.textContent("");
        }

        
        const genderInputs = $('input[name="gender"]');
        console.log(genderInputs);
        let isGenderSelected = false;
        
        genderInputs.each(function() {
        if ($(this).is(':checked')) {
            console.log(this);
            isGenderSelected = true;
            return false; // Break the loop
            }
        });
        
        if (!isGenderSelected) {
            genderError.text("Please select a gender.");
            isValid = false;
        } else {
            genderError.text("");
        }
        
        const intInputs = $("input[name = 'chkbx-activity']")
            console.log(intInputs);
            let isIntSelected = false;

            intInputs.each(function() {
            if ($(this).is(':checked')) {
                console.log(this);
                isIntSelected = true;
                return false;
            } 
            });
            if (!isIntSelected) {
            intError.text("please select at least one interest");
            isValid = false;
            } else {
            intError.text("");
            }


        if (aboutInput.val().trim() === "") {
            aboutError.text("About you is compulsory.");
            isValid = false;
        } else {
            aboutError.text("");
        }
        // Validation code for other fields...

        if (isValid) {
            form.submit();
        }
    });

 

// const startYear = 1900;
// const endYear = new Date().getFullYear();
// const selectYear = $("#birth-year");

// for (let year = endYear; year >= startYear; year--) {
//   const option = $("<option>").val(year).text(year);
//   selectYear.append(option);
// }

const startYear = 1900;
const endYear = new Date().getFullYear();
const selectYear = $("#birth-year");

// Clear existing options in the "birth-year" select box
selectYear.html('<option value="year">year</option>');

// Populate the "birth-year" select box with years from startYear to endYear
for (let year = endYear; year >= startYear; year--) {
  const option = $("<option>").val(year).text(year);
  selectYear.append(option);
}

});

