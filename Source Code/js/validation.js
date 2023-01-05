$(function() {
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
        },
        confirm_password:{
          required: true,
          equalTo: "#password"
        }
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your name",
        password: {
          required: "Please enter password",
        },
        email: "Please enter a valid email",
        confirm_password:{
          required: "Enter confirm password",
          equalTo: "Must match the password"
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });