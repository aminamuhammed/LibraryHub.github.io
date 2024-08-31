var em=document.getElementById("em")
var err1=document.getElementById("err1")
var phone=document.getElementById("phone")
var pwd1=document.getElementById("pwd1")
var pwd2=document.getElementById("pwd2")

function emailvalidate(){
    let regEx = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/     //^ carret symbol + USED BECAUSE IT CAN BE REPEATED {2,3} min 2 and max 3 chars
    if (regEx.test(em.value)){
        err1.innerText = "";
        return true;
    }

    else{
        err1.innerText = "Email is invalid"
        return false;
    }
}

        function passvalidate() {
            var password = document.getElementById("pwd1").value;
            var confirmPassword = document.getElementById("pwd2").value;
            var passwordStrength = document.getElementById("passwordStrength");
        
            // Regular expression for validating password
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        
            if (password.length <= 4) {
                passwordStrength.textContent = "Short Password";
                passwordStrength.className = "error";
                return false;
            } else if (password.length > 4 && password.length <= 7) {
                passwordStrength.textContent = "Medium Password";
                passwordStrength.className = "medium";
                return false;
            } else if (password.length >= 8) {
                if (!regex.test(password)) {
                    passwordStrength.textContent = "Password must contain at least one lowercase letter, one uppercase letter, and one digit";
                    passwordStrength.className = "error";
                    return false;
                }
                passwordStrength.textContent = "Strong Password";
                passwordStrength.className = "strong";
            }
        
            // Check if the passwords match
            if (password !== confirmPassword) {
                passwordStrength.textContent += " - Passwords do not match";
                passwordStrength.className = "error";
                return false;
            }
        
            return true;
        }


        function phoneValidate() {
            var phone = document.getElementById("phone").value;
            var phoneError = document.getElementById("phoneError");
        
            var regex = /^(?:\d{3}[-.\s])?\d{3}[-.\s]?\d{4}$/;
        
            if (!regex.test(phone)) {
                phoneError.textContent = "Invalid phone number format. Use xxx-xxx-xxxx, xxx xxx xxxx, or xxx.xxx.xxxx.";
                phoneError.className = "error";
                return false;
            } else {
                phoneError.textContent = ""; 
                return true;
            }
        }

        function notempty() {
            if (em.value.trim() === "") {
                alert("Email field is empty");
                return false;
            }
        
            if (phone.value.trim() === "") {
                alert("Phone number field is empty");
                return false;
            }
        
            if (pwd1.value.trim() === "") {
                alert("Password field is empty");
                return false;
            }
        
            if (pwd2.value.trim() === "") {
                alert("Confirm Password field is empty");
                return false;
            }
        }