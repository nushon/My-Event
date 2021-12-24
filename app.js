let express = require ('express');
let http = require('http');
let app = express();
let path = require("path");
let PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')))
let file = "./public/index.html"
    
app.get('/', function (req, res, next) {
    res.render(file);
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});