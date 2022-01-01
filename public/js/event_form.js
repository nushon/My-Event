// const EVENT_FORM_DATA = {event_name: event_name.value,
//                          venue: venue.value,
//                          start_date: start_date.value,
//                          end_date: end_date.value,
//                          about_event: about_event.value};

// const res  = require("express");

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


// Getting event details from the form 
let event_name = document.getElementById("event_name");
let event_location = document.getElementById("venue");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let event_description = document.getElementById("about-event");





// Next Steps function
function next_step2(){
    displayStep2();
}

function next_step3(){
    displayStep3();
}
// Event detail function 

// event_details();



// Participant function 
display_html = document.getElementById("display_html");

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

let final_questions = [];
function get_selected_questions(name) {
    let questions_value = [];
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    
    checkboxes.forEach((checkbox) => {
        questions_value.push(checkbox.value);
        
    });
    console.log(questions_value);
    questions_value.forEach(ele => {
        final_questions = questions_value;
        })
    return questions_value;

}

function form_generation(){
    console.log(get_selected_questions('question'));
    displayStep3();
    console.log("The final_questions: ", final_questions);
};

function event_details(event){
    console.log(event);
    event.preventDefault();
    let event_data = {
        event_name: event_name.value,
        event_location: event_location.value,
        start_date: start_date.value,
        end_date: end_date.value,
        event_description: event_description.value,
        questionnaires: final_questions
    }

    console.log("Event datail", event_data);
    // Send data to backend
let url = "/event_detail";
fetch(url,{
    method: "POST",
    body: JSON.stringify(event_data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(function(response) {
    return response.json();
}).then(function(response){
    console.log(response);
}) .catch(function (err){
    console.log(err);
})
// Calling the form generation function 
form_generation(); 

}

// Get event details 
function get_details(){
    let url = '/display_event_details';
fetch(url).then(response => response.json())
.then((data) => {
    // console.log(data.data.rows);
    let mydata = data.data.rows;
    console.log("Data ", mydata);
    let container = document.querySelector('#event_head');
    let container2 = document.querySelector('#event_body');

container.innerHTML += `
<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4" id="the_event_name">${mydata[5].event_name}</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s" id="the_event_des">The event's description: ${mydata[3].event_description}</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
`;

container2.innerHTML += `
<div  class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${mydata[5].start_date}</h2>
              <p class="leading-relaxed text-base">Start Date</p>
              <a class="mt-3 text-yellow-500 inline-flex items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <!-- <path d="M5 12h14M12 5l7 7-7 7"></path> -->
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${mydata[5].end_date}</h2>
              <p class="leading-relaxed text-base">End Date</p>
              <a class="mt-3 text-yellow-500 inline-flex items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <!-- <path d="M5 12h14M12 5l7 7-7 7"></path> -->
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${mydata[5].event_location}</h2>
              <p class="leading-relaxed text-base">Venue</p>
              <a class="mt-3 text-yellow-500 inline-flex items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <!-- <path d="M5 12h14M12 5l7 7-7 7"></path> -->
                </svg>
              </a>
            </div>
          </div>`;

       
})

.catch(err => {
    console.log(err);
})
}
get_details()
  //  Displaying on the landing page 

// _______________________________ SPEAKERS POTION__________________________________________________
// api url
let data;

function render_speakers(data) {
  
    
  }
  
//   render_speakers();
// Getting speakers data from the form 
let speaker_name = document.getElementById("speaker_name");
let speaker_status = document.getElementById("speaker_status");
let biography = document.getElementById("biography")
function speaker_details(){
    let speaker_data = {
        name: speaker_name.value,
        bio: biography.value,
        img: "",
        status: speaker_status.value,
    }

    console.log("Speaker datail",  speaker_data);
    // Send data to backend
let url = '/speaker_detail';
fetch(url, {
    method: "POST",
    body: JSON.stringify(speaker_data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(res => res.json());
// Calling the get speakers route 

}

function get_speakers(){
    let url = '/display_speakers';
fetch(url).then(response => response.json())
.then((data) => {
    // console.log(data.data.rows);
    let mydata = data.data.rows;
    console.log("Data ", mydata);
    let container = document.querySelector('#div_display');

for(let i = 0; i <= mydata.length; i++){
container.innerHTML += `
<div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
<div class="h-full text-center">

<img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/albin.jpeg">
<p id="speaker_bio" class="leading-relaxed">${mydata[i].bio}</p>
<span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
<h2 id="speaker_name" class="text-gray-900 font-medium title-font tracking-wider text-sm">${mydata[i].name}</h2>
<p id="speaker_status" class="text-gray-500">${mydata[i].status}</p>
</div>

</div>
`;
}
  
})
.catch(err => {
    console.log(err);
})

}
get_speakers();

function bigFunx(){
  get_details();
  
}
