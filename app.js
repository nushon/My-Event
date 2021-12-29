let express = require ('express');
let http = require('http');
let app = express();
let path = require("path");
let PORT = process.env.PORT || 3000;
const axios = require("axios");
let ejs = require('ejs');
// let ejslayout = require('express-ejs-layouts');
// // api url
// const api_url = "https://kpalan-event.herokuapp.com/";
// _____________________________________ Head _______________________________________________________


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public 
app.use(express.static('./public'));

    
app.get('/', (req, res)=> {
    res.render('pages/index');
});

app.get('/form', (req, res)=> {
    res.render('pages/form');
});

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

let participant = axios.post('https://kpalan-event.herokuapp.com/participant', {
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
    console.log(participant.data);
}, (error) => {
    console.log(error);
});

axios.post('https://kpalan-event.herokuapp.com/host', {
    name: "", 
    address: "", 
    phone_number: "",
    organization_name: "", 
    email: "", 
    img: ""
})
.then(response => {
    console.log(response);
}, (error) => {
    console.log(error);
});


app.post('/event_detail', (req, res)=> {
    let event_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/hostform', event_data)
    .then(res => {
        data = res.data;
        console.log(res.status);
        console.log(data);
    
        if(res.status === 200 && data["code"] === 0){
            res.end(JSON.stringify(data));
        }
        else if(res.status === 200 && data["code"] !== 0){
            res.end(JSON.stringify(data));
        }
    }), (error) => {
        console.log(error);
    };
    
    
})


app.post('/participant_detail', (req, res)=> {
    let participant_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/event_questions', participant_data )
    .then(res => {
        data = res.data;
        console.log(res.status);
        console.log(data);
    
        if(res.status === 200 && data["code"] === 0){
            res.end(JSON.stringify(data));
        }
        else if(res.status === 200 && data["code"] !== 0){
            res.end(JSON.stringify(data));
        }
    }), (error) => {
        console.log(error);
    };
    
    
});

app.post('/speaker_detail', (req, res)=> {
    let speaker_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/speakers', speaker_data)
    .then(res => {
        data = res.data;
        console.log(res.status);
        console.log(data);
    
        if(res.status === 200 && data["code"] === 0){
            res.end(JSON.stringify(data));
        }
        else if(res.status === 200 && data["code"] !== 0){
            res.end(JSON.stringify(data));
        }
    }), (error) => {
        console.log(error);
    };
    
    
});



app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});