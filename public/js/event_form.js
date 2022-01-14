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
    btn_step2.style.backgroundColor = "white";
    btn_step3.style.backgroundColor = "rgb(241, 143, 1)";
  }
// Participant function 
let display_html = document.getElementById("display_html");

let final_questions = [];
function get_selected_questions(name) {
    let questions_value = [];
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    
    checkboxes.forEach((checkbox) => {
        questions_value.push(checkbox.value);
        
    });
    console.log("Questions Values",questions_value);
    questions_value.forEach(ele => {
        final_questions = questions_value;
    })

    
    return questions_value;

}
function submit(){
    console.log(get_selected_questions('question'));
    console.log("The final questions: ", final_questions)
    displayStep2();
}
// Getting speakers for, the seakers table and push the id to an array 
// let speakers_id = [];
// function get_speakers(){
//     let url = '/display_speakers';
// fetch(url).then(response => response.json())
// .then((data) => {
//     // console.log(data.data.rows);
//     let mydata = data.data.rows.id;
//     console.log("Data ", mydata);
//     speakers_id.push(mydata);
    
  
// })
// .catch(err => {
//     console.log(err);
// })

// }
// get_speakers();
// console.log("The speakers id", speakers_id);

// Getting event details from the form 
let event_name = document.getElementById("event_name");
let event_location = document.getElementById("venue");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let event_description = document.getElementById("about-event");

function event_details(){
  
    // console.log(event);
    // event.preventDefault();
    let event_data = {
        event_name: event_name.value,
        event_location: event_location.value,
        start_date: start_date.value,
        end_date: end_date.value,
        event_description: event_description.value,
        questionnaires: final_questions
        // speakers_id: speakers_id
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
// form_generation(); 
displayStep3();
}



// function eventFunx(){
// // Calling Event dispaly function
// event_details();

// // // Calling Get display function 
// // get_details();

// // Calling step3 function 
// displayStep3();
// }
 