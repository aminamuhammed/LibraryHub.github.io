var em=document.getElementById("em")
var err1=document.getElementById("err1")
var pwd=document.getElementById("pwd")

function emailvalidate() {
    let regEx = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/;
    if (regEx.test(em.value)) {
        err1.innerText = "";
        return true;
    } 
    else {
        err1.textContent = "Invalid email address";
        err1.className = "error";
        return false;
    }
}

// Password validation function
function passvalidate() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (pwd.value.length === 0) {
        passwordStrength.textContent = "Password field is empty";
        passwordStrength.className = "error";
        return false;
    } else if (!regex.test(pwd.value)) {
        passwordStrength.textContent = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number";
        passwordStrength.className = "error";
        return false;
    } else {
        passwordStrength.textContent = "";
        return true;
    }
}

// Function to check if fields are not empty
function notempty() {
    if (em.value.trim() === "") {
        alert("Email field is empty");
        return false;
    }

    if (pwd.value.trim() === "") {
        alert("Password field is empty");
        return false;
    }

    return true;
}
