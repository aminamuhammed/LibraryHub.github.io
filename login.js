var em=document.getElementById("em")
var err1=document.getElementById("err1")
var phone=document.getElementById("phone")
var pwd=document.getElementById("pwd")


function emailvalidate(){
    let regEx = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/     //^ carret symbol + USED BECAUSE IT CAN BE REPEATED {2,3} min 2 and max 3 chars
    if (regEx.test(em.value)){
        err1.innerText = "";
        return true;
    }

    else{
        err1.innerText = "Invalid username"
        return false;
    }
}

        function passvalidate() {
            var password = document.getElementById("pwd").value;
            var passwordStrength = document.getElementById("passwordStrength");
        
            // Regular expression for validating password
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        
            }if (password.length >= 8) {
                if (!regex.test(password)) {
                    passwordStrength.textContent = "invalid password";
                    passwordStrength.className = "error";
                    return false;
                }
        
            return true;
        }


        function notempty() {
            if (em.value.trim() === "") {
                alert("Email field is empty");
                return false;
            }
        
            if (pwd.value.trim() === "") {
                alert("Password field is empty");
                return false;
            }
        
        }