const express = require('express');
let http = require('http');
let app = express();
let path = require("path");
let PORT = process.env.PORT || 3000;
const axios = require("axios");
let ejs = require('ejs');
// const cookieParser = require("cookie-parser");
// const sessions = require('express-session');
// let ejslayout = require('express-ejs-layouts');
// // api url
const api_url = "https://kpalan-event.herokuapp.com/";

// // creating 24 hours from milliseconds
// const oneDay = 1000 * 60 * 60 * 24;

// //session middleware
// // app.use(session({secret: 'ssshhhhh'}));
// app.use(sessions({
//     secret: "thisismysecrctekey",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false
// }));

// // cookie parser middleware
// app.use(cookieParser());
// _____________________________________ Head _______________________________________________________


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public 
app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/form', (req, res) => {
    // session=req.session;

    res.render('pages/form');
});
app.get('/attend', (req, res) => {
    res.render('pages/attend');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

// app.get('/event', (req, res)=> {
//     res.render('pages/event');
// });
app.get('/dashboard', (req, res) => {
    res.render('pages/dashboard');
});
app.get('/display_form', (req, res) => {
    res.render('pages/display_form');
});
app.post('/participant_detail', (req, res) => {
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

app.post('/host', (req, res) => {
    let host_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/host', host_data)
        .then(res => {
            data = res.data;
            console.log(res.status);
            console.log(data);

            if (res.status === 200 && data["code"] === 0) {
                res.end(JSON.stringify(data));
            }
            else if (res.status === 200 && data["code"] !== 0) {
                res.end(JSON.stringify(data));
            }
        }), (error) => {
            console.log(error);
        };


})

// app.post('/event_detail', (req, res) => {
//     let event_data = req.body;
//     console.log("This is event details: ", event_data);
//     let data;

//     // axios.post('https://kpalan-event.herokuapp.com/event_form', event_data)
//     axios.post('http://localhost:3100/event_form', event_data)
//         .then(response => {
//             data = response.data;
//             console.log(response.status);
//             console.log({data});

//             // if(response.status === 200){
//             //      response.end(JSON.stringify(data));
//             // }
//             //  else if(response.status === 200 && data["code"] !== 0){
//             //      response.end(JSON.stringify(data));
//             // }
//         }), (error) => {
//             console.log(error);
//         };


// });

app.post('/event_detail', async (req, res) => {
    try {
        let event_data = req.body;
        console.log("This is event data: ", event_data);
        const data = await axios.post('http://localhost:3100/event_form', event_data);

        // console.log({ data });

    } catch (error) {
        console.log("Error: ", error.message)
    }

});

app.post('/question_values', (req, res) => {
    let questions = req.body;
    console.log("This is question values data: ", questions);
    let data;

    // axios.post('https://kpalan-event.herokuapp.com/event_form', event_data)
    axios.post('http://localhost:3100/events_questions', questions)
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
app.post('/participant_detail', (req, res) => {
    let participant_data = req.body;
    let data;

    axios.post('https://kpalan-event.herokuapp.com/event_questions', participant_data)
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

app.post('/speaker_detail', (req, res) => {
    let speaker_data = req.body;
    let data;

    // axios.post('https://kpalan-event.herokuapp.com/speakers', speaker_data)
    axios.post('http://localhost:3100/speakers', speaker_data)
        .then(res => {
            data = res.data;
            console.log(res.status);
            // console.log(data);

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
app.get('/display_speakers', async (req, res) => {

    // const result = await axios("https://kpalan-event.herokuapp.com/speakers");
    const result = await axios("http://localhost:3100/speakers");
    const data = result.data;
    // console.log("Speakers :", (JSON.stringify({data})));
    return res.json({ data });
});

// Getting display events

app.get('/display_event_details', async (req, res) => {

    // const result = await axios("https://kpalan-event.herokuapp.com/event_form");
    const result = await axios("http://localhost:3100/event_form");
    const data = result.data;
    // console.log(" Details :", (JSON.stringify({data})));
    return res.json({ data });
});
//Getting questionnaries
app.get('/event_questionnaires', async (req, res) => {

    // const result = await axios("https://kpalan-event.herokuapp.com/event_form");
    const result = await axios("http://localhost:3100/event_form");
    const data = result.data;
    // console.log("Event Questionnaires :", (JSON.stringify({data})));
    return res.json({ data });
});

app.get('/event/:id', async (req, res) => {
    let event_id_query = req.params.id;
    console.log("Event query", event_id_query)
    //  const result = await axios(`https://kpalan-event.herokuapp.com/event/${event_id_query}`);
    const result = await axios(`http://localhost:3100/event/${event_id_query}`);
    const data = await result.data;
    let questionnaires = JSON.parse(data.event.questionnaires);
    // console.log({questionnaires});
    data.event.qKeys = [];
    data.event.qValues = [];
    // data.event.qTypes = [];

    questionnaires.forEach(element => {
        data.event.qKeys.push(...Object.keys(element));
        data.event.qValues.push(...Object.values(element));
    });

    // data.event.questionnaires = {
    //     keys: Object.keys(),

    // };
    // console.log(data.event.questionnaires);
    // console.log("Query Details :", result);
    console.log('THE req', { event: data.event });
    res.render('pages/event', { event: data.event });

    // res.json({data});

});
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});