const username = document.getElementById("user");
const password = document.getElementById("pass");
const signBTN = document.getElementById("signBTN");
const loginAlert = document.getElementById("loginAlert");

signBTN.onclick = function() {
    let user = "Fritz";
    let pass = "00000111";

    if (username.value === user && password.value === pass) {
        window.location.href = "Home.html";
        loginAlert.text = "Login Successfully!";
        
    } else {
        loginAlert.textContent = "Invalid Credential. Ask Fritz to Proceed!";
        loginAlert.classList.add("show");

        setTimeout(() => {
            loginAlert.classList.remove("show");
        }, 3000);
    }

};



