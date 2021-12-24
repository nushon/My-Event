let express = require ('express');
let http = require('http');
let app = express();
let path = require("path");
let PORT = process.env.PORT || 3000;
const axios = require("axios");
// api url
// const api_url = "https://kpalan-event.herokuapp.com/";
  
// Defining async function
// async function getapi() {
//     const res = await axios("https://kpalan-event.herokuapp.com/participant");
//     const data = res.data;
//     console.log((JSON.stringify({data})));
    
// // axios.get('http://example.com/movies.json')
// //   .then(response => response.json())
// //   .then(data => console.log(data));
// }
// // Calling that async function
// getapi();

app.use(express.static(path.join(__dirname, 'public')))
let file = "./public/index.html"
    
app.get('/', function (req, res, next) {
    res.render(file);
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});