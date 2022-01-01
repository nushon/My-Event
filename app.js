let express = require ('express');
let http = require('http');
let app = express();
let path = require("path");
let PORT = process.env.PORT || 3000;
const axios = require("axios");
let ejs = require('ejs');
// let ejslayout = require('express-ejs-layouts');
// // api url
const api_url = "https://kpalan-event.herokuapp.com/";
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
app.get('/attend', (req, res)=> {
    res.render('pages/attend');
});
app.get('/event', (req, res)=> {
    res.render('pages/event');
});
app.get('/contact', (req, res)=> {
    res.render('pages/contact');
});
app.get('/display_form', (req, res)=> {
    res.render('pages/display_form');
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



    
// }
// // Calling that async function
// speakersApi();
app.post('/participant_detail', (req, res)=> {
    let participant_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/participant', participant_data)
    .then(res => {
        data = res.data;
        console.log(res.status);
        console.log(data);
    
        // if(res.status === 200 && data["code"] === 0){
        //     res.end(JSON.stringify(data));
        // }
        // else if(res.status === 200 && data["code"] !== 0){
        //     res.end(JSON.stringify(data));
        // }
    }), (error) => {
        console.log(error);
    };
    
    
});

app.post('/host', (req, res)=> {
    let host_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/host', host_data)
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



app.post('/event_detail', (req, res)=> {
    let event_data = req.body;
    console.log("This is event data: ", event_data);
    let data;

    // axios.post('https://kpalan-event.herokuapp.com/event_form', event_data)
    axios.post('http://localhost:3100/event_form', event_data)
    .then(response => {
        data = response.data;
        console.log(response.status);
        console.log(data);
    
        // if(response.status === 200){
        //      response.end(JSON.stringify(data));
        // }
        //  else if(response.status === 200 && data["code"] !== 0){
        //      response.end(JSON.stringify(data));
        // }
    }), (error) => {
        console.log(error);
    };
    
    
});


app.post('/participant_detail', (req, res)=> {
    let participant_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/event_questions', participant_data )
    .then(res => {
        data = res.data;
        console.log(res.status);
        console.log(data);
    
        // if(res.status === 200 && data["code"] === 0){
        //     res.end(JSON.stringify(data));
        // }
        // else if(res.status === 200 && data["code"] !== 0){
        //     res.end(JSON.stringify(data));
        // }
    }), (error) => {
        console.log(error);
    };
    
    
});

app.post('/speaker_detail', (req, res)=> {
    let speaker_data = req.body;
    let data;

    // axios.post('https://kpalan-event.herokuapp.com/speakers', speaker_data)
    axios.post('http://localhost:3100/speakers', speaker_data)
    .then(res => {
        data = res.data;
        console.log(res.status);
        console.log(data);
    
        // if(res.status === 200 && data["code"] === 0){
        //     res.end(JSON.stringify(data));
        // }
        // else if(res.status === 200 && data["code"] !== 0){
        //     res.end(JSON.stringify(data));
        // }
    }), (error) => {
        console.log(error);
    };
    
    
});

// // speaker API
app.get('/display_speakers', async(req, res)=>{
    
        // const res = await axios("https://kpalan-event.herokuapp.com/speakers");
        const result = await axios("http://localhost:3100/speakers");
        const data = result.data;
        // console.log("Speakers :", (JSON.stringify({data})));
        return res.json({data});
});

// // speaker API
app.get('/display_event_details', async(req, res)=>{
    
    // const res = await axios("https://kpalan-event.herokuapp.com/speakers");
    const result = await axios("http://localhost:3100/event_form");
    const data = result.data;
    console.log("Event Details :", (JSON.stringify({data})));
    return res.json({data});
});
    

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});