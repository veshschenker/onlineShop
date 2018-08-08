const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//const mustache = require('mustache-express');
//app.set('view engine','html');
//app.engine('html',mustache());
//app.set('views',_dirname + '/templates');
//const mdAccess = require('/module-Acess.js');


app.listen(3000, () => {
    console.log('listening at port 3000');
});

app.get('/', (req, res) => {
    res.status(200).send('database sample application');
})