const { Client } = require('pg');
const config = {
    user: "schenker",
    password: "vreni1980",
    host: "192.168.99.100",
    port: 5432,
    database: "online_shop_application",
}

const dbClient = new Client(config);

dbClient.connect().then(() => {
    console.log('connected to the database')
}).catch(error => {
    console.log(error);
});

exports.productstable = async function(){
    const sql = "select * from productstable";
    const result = await dbClient.query(sql);
    return result.rows;
}

exports.getProductById = async function(productid){
    const sql = 'select * from productstable where productid=' + productid;
    const result = await dbClient.query(sql);
    if(result.rows.length===0){
        return undefined;
    }
    return result.rows[0];
}

exports.signup = async function(username, email, password) {
    const sql = "INSERT INTO users(username, email, password) VALUES($1,$2,$3)";
    const values = [username, email, password];
    const result = await dbClient.query(sql, values);
    //TODO: Error handling...
} //inserts new data into a database

exports.login = async function(username, password){
    console.log("Trying to login...");
    const sql = "SELECT * FROM users WHERE username=$1 AND password=$2";
    const values = [username, password];
    const result = await dbClient.query(sql, values);
    if(result.rowCount == 1){
        return true;
    }
    return false;
}

exports.addProductToCart = async function(userid, productid, quantity){
    console.log('Adding cart item');
    const sql = 'INSERT INTO cartitems(userid, productid, quantity, unitprice) VALUES($1,$2,$3,$4)';
    const unitprice = 111.25;
    const values = [userid, productid, quantity, unitprice];
    const result = await dbClient.query(sql, values);
    //TODO: Error handling...
} // inserts new value into table 'cartitems'