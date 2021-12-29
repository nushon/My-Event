// Adding interaction on the steps buttons
function displayStep1(){
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    let tab1 = document.getElementById("tab1");
    let tab2 = document.getElementById("tab2");
    let tab3 = document.getElementById("tab3");
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
    btn_step1.style.backgroundColor = "rgb(241, 143, 1)";
    btn_step2.style.backgroundColor = "white";
    btn_step3.style.backgroundColor = "white";
}
function displayStep2(){
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    let tab1 = document.getElementById("tab1");
    let tab2 = document.getElementById("tab2");
    let tab3 = document.getElementById("tab3");
    step1.style.display = "none";
    step2.style.display = "block";
    step3.style.display = "none";
    btn_step1.style.backgroundColor = "white";
    btn_step2.style.backgroundColor = "rgb(241, 143, 1)";
    btn_step3.style.backgroundColor = "white";
}
function displayStep3(){
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    let tab1 = document.getElementById("tab1");
    let tab2 = document.getElementById("tab2");
    let tab3 = document.getElementById("tab3");
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "block";
    btn_step1.style.backgroundColor = "white";
    btn_step2.style.backgroundColor = "white";
    btn_step3.style.backgroundColor = "rgb(241, 143, 1)";
}

// Getting event details from the form 
let event_name = document.getElementById("event_name");
let venue = document.getElementById("venue");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let about_event = document.getElementById("about_event");

// Getting participants data from the form 
let participant_name = document.getElementById("name");
let dob = document.getElementById("dob");
let address = document.getElementById("address");
let email = document.getElementById("email");
let phone_num = document.getElementById("phone_num");
let sex = document.getElementById("sex");
let education = document.getElementById("education");
let status = document.getElementById("status");
let about_you = document.getElementById("about_you");
let why_apply = document.getElementById("why_apply");
let why_you = document.getElementById("why_you");

// Getting speakers data from the form 
let speaker_name = document.getElementById("speaker_name");
let speaker_status = document.getElementById("speaker_status");
let biography = document.getElementById("biography");

// Event detail function 
function event_details(){
    let event_data = {
        event_name: event_name.value,
        venue: venue.value,
        start_date: start_date.value,
        end_date: end_date.value,
        about_event: about_event.value
    }

    console.log("Event datail", event_data);
    // Send data to backend
let url = "/event_detail";
fetch(url, {
    method: "POST",
    body: JSON.stringify(event_data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(res => res.json());
}



// Participant function 
function participant_details(){
    let participant_data = {
        participant_name: participant_name.value,
        dob: dob.value,
        address: address.value,
        email: email.value,
        phone_num: phone_num.value,
        sex: sex.value,
        education: education.value,
        status: status.value,
        about_you: about_you.value,
        why_apply: why_apply.value,
        why_you: why_you.value,
    }

    console.log("Participant datail", participant_data);
    // Send data to backend
let url = "/participant_detail";
fetch(url, {
    method: "POST",
    body: JSON.stringify(participant_data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(res => res.json());
}

// Speaker Details
function speaker_details(){
    let speaker_data = {
        speaker_name: speaker_name.value,
        speaker_status: speaker_status.value,
        biography: biography.value
    }

    console.log("Speaker datail",  speaker_data);
    // Send data to backend
let url = "/speaker_detail";
fetch(url, {
    method: "POST",
    body: JSON.stringify( speaker_data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(res => res.json());
}
