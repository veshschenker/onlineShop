function cancel() {
    window.location.href = "/items";
}


function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password
    }
    axios.post('/api/login', data)  //ask .
    .then(response => {
        console.log(response);
        window.location.href = "/items";
    })
    .catch(error => {
        document.getElementById("message").innerHTML = "Wrong username or password.";
        console.log(error);
    })

}