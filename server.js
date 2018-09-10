let express = require('express');
let app = express();
var bodyParser = require('body-parser')
let myroutes = require("./routes.js");

app.use(bodyParser.urlencoded({extended : false}),)

app.use(bodyParser.json(),)
app.use(myroutes,function(){})

app.listen(3000, () => console.log('app is running'))


