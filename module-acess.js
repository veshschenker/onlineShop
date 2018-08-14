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