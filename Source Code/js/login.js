 function kiemtra() {
           
            var sEmail = document.getElementById('mail').value;
            if (sEmail == "") {
                alert("Email cannot left blank!");
                document.getElementById('mail').focus();
                return false;
            }
            var sPass = document.getElementById('pwd').value;
            if (sPass == "") {
                alert("Password cannot left blank!");
                document.getElementById('pwd').focus();
                return false;
            }
            if ((sPass.length < 8) || (sPass.length > 12)) {
                alert("Password fields must be digits in range 8 - 12.");
                document.getElementById('pwd').focus();
                return false;
            }
            //  else {
            //     alert("Congratulation\nYour Information has been sent sucessfully!");
            // }
            
            var message = [];
            message.push("Login Information:");
            message.push("++++++++++++++++++++++++++++++++++++++++++");
            message.push("Email: " + sEmail);
            message.push("Password: " + sPass);
            alert(message.join("\n"));
        }