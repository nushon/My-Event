let express = require ('express');
let http = require('http');
let app = express();
let path = require("path");
let PORT = process.env.PORT || 3100;
const axios = require("axios");
let ejslayout = require('express-ejs-layouts');
// // api url
// const api_url = "https://kpalan-event.herokuapp.com/";
// _____________________________________ Head _______________________________________________________
app.use(ejslayout);
app.set('view engine', 'ejs');


  
// Defining async function
// async function participantApi() {
//     const res = await axios("https://kpalan-event.herokuapp.com/participant");
//     const data = res.data;
//     console.log("Participants :", (JSON.stringify({data})));
    

    
// }
// // Calling that async function
// participantApi();

// // hostAPI
// async function hostApi() {
//     const res = await axios("https://kpalan-event.herokuapp.com/host");
//     const data = res.data;
//     console.log("Host :", (JSON.stringify({data})));
    

    
// }
// // Calling that async function
// hostApi();

// // speaker API 
// async function speakersApi() {
//     const res = await axios("https://kpalan-event.herokuapp.com/speakers");
//     const data = res.data;
//     console.log("Speakers :", (JSON.stringify({data})));
    

    
// }
// // Calling that async function
// speakersApi();

axios.post('https://kpalan-event.herokuapp.com/participant', {
    name : 'Carlos Nah',
    address: 'Bardnesville',
    phone_number: '0776632128',
    email: 'carlos@gmail.com',
    dob: 'October 23, 1998S',
    status: 'Working',
    img: ''
})
.then(response => {
    console.log(response);
}, (error) => {
    console.log(error);
});

axios.post('https://kpalan-event.herokuapp.com/participant', {
    name : 'Carlos Nah',
    address: 'Bardnesville',
    phone_number: '0776632128',
    email: 'carlos@gmail.com',
    dob: 'October 23, 1998S',
    status: 'Working',
    img: ''
})
.then(response => {
    console.log(response);
}, (error) => {
    console.log(error);
});

app.use(express.static(path.join(__dirname, 'public')))
let file = "./public/index.html"
    
app.get('/', function (req, res, next) {
    res.render(file);
});



app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});