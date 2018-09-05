function cancel(){
    window.location.href = "/items";
}

function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if(password != confirmPassword){
        document.getElementById("message").innerHTML = "Passwords do not match!";
        return;
    }

    var data = {
        username: username,
        email: email,
        password: password
    }
    axios.post('/api/signup', data)  //ask .
    .then(response => {
        console.log(response);
        window.location.href = "/login";
    })
    .catch(error => {
        document.getElementById("message").innerHTML = error;
        console.log(error);
    })

}