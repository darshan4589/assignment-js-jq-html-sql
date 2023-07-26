
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


  $(document).ready(function() {
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
      const monthInput = $('#birth-month')
      const dayInput = $('#birth-day')
      const yearInput = $('#birth-year')
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
      } else if (specialCharRegex.test(firstNameInput.val().trim())) {
        firstNameError.text("First name cannot contain special characters.");
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
        lastNameError.text("Last name cannot contain special characters.");
        isValid = false;
      } else {
        lastNameError.text("");
      }

      // Add validation logic for other fields as needed

      // If all fields are valid, you can submit the form here:
      if (isValid) {
        form.submit();
      }
    });
  });

