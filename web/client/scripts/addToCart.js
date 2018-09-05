function add() {
    var quantity = document.getElementById("quantity").value;
    var productid = document.getElementById("productid").value;
    var userid = document.getElementById("userid").value;
    var data = {
        quantity: quantity,
        productid: productid,
        userid: userid
    }
    axios.post('/api/addProductToCart', data)  
    .then(response => {
        console.log(response);
        window.location.href = "/items";
    })
    .catch(error => {
        document.getElementById("message").innerHTML = error;
        console.log(error);
    })
}

function cancel() {
    window.location.href = "/items";
}
