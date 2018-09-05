const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mustache = require('mustache-express');
app.set('view engine','html');
app.engine('html',mustache());
app.set('views',__dirname + '/templates');//double underscore
app.use(express.static('client'));
const mdAccess = require('./module-acess')


app.listen(3000, () => {
    console.log('listening at port 3000');
});

app.get('/', (req, res) => {
    res.status(200).send('database sample application');
})

app.get('/signup', (req,res)=>{
    res.render('signup');
})

app.get('/login', (req,res)=>{
    res.render('login');
})

app.get('/items', async (req, res) => {
    console.log('rendering list of items');
    var products = await mdAccess.productstable();
    var data = {
        products: products  //products  is the array in mustache table.
    }
    res.render('listOfProducts', data);
})

app.get('/items/:productId', async (req,res)=>{
    var productId = req.params.productId;
    var product = await mdAccess.getProductById(productId);
    var data = {
        product: product
    }
    res.render('singleProductDetail', data);
})

app.get('/api/items', async (req, res) => {
    const items = await mdAccess.productstable();
    res.status(200).send(items);
});

app.get('/api/items/:id', async (req, res) => {
    const itemid = req.params.id;
    const result = await mdAccess.getProductById(itemid);
    if (result) {
        res.status(200).send(result);
        return;
    }
    res.sendStatus(404);
})

app.post('/api/signup', async (req,res)=>{
    var data = req.body;
    await mdAccess.signup(data.username, data.email, data.password);  // this adds a new record to the table 'users'
    res.sendStatus(201);  // created (a new user)
})

app.post('/api/login', async (req,res)=>{
    var data = req.body;
    var ok = await mdAccess.login(data.username, data.password);   // compares given username/password with what I have in the users table
    if(ok==false){
        res.status(400).send("Wrong username or password");
    } else {
        res.sendStatus(200);
    }
})

app.get('/addToCart', async (req,res)=>{
    res.render ('addToCart')
})

app.post('/api/addProductToCart', async (req,res) =>{
    var data = req.body;
    await mdAccess.addProductToCart(data.userid, data.productid, data.quantity);  // this adds a new record to the table 'cartitems'
    res.sendStatus(201);  // created (a new cart item)

})