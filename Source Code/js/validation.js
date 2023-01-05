// $(function() {
//     $("form[name='registration']").validate({
//       rules: {
//         firstname: "required",
//         email: {
//           required: true,
//           email: true
//         },
//         password: {
//           required: true,
//         },
//         confirm_password:{
//           required: true,
//           equalTo: "#password"
//         }
//       },
//       // Specify validation error messages
//       messages: {
//         firstname: "Please enter your name",
//         password: {
//           required: "Please enter password",
//         },
//         email: "Please enter a valid email",
//         confirm_password:{
//           required: "Enter confirm password",
//           equalTo: "Must match the password"
//         }
//       },
//       submitHandler: function(form) {
//         form.submit();
//       }
//     });
//   });
function kiemtra1() {
  var sFname = document.getElementById('firstname').value;
  if (sFname == "") {
    alert("The Fullname cannot left blank!");
    document.getElementById('firstname').focus();
    return false;
  }
  var sEmail = document.getElementById('email').value;
  if (sEmail == "") {
    alert("Email cannot left blank!");
    document.getElementById('email').focus();
    return false;
  }
  var sPass = document.getElementById('password').value;
  if ((sPass.length < 8) || (sPass.length > 12)) {
    alert("Password must be digits in range 8 - 12.");
    document.getElementById('password').focus();
    return false;
  }
  var sPass1 = document.getElementById('confirm_password').value;
  if (sPass != sPass1) {
    alert("Confirm Password is different");
    document.getElementById('confirm_password').focus();
    return false;

  }

  var message = [];
  message.push("Registed Information:");
  message.push("++++++++++++++++++++++++++++++++++++++++++");
  message.push("Full name: " + sFname);
  message.push("Email: " + sEmail);

  alert(message.join("\n"));
}
