function displayStep2(){
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    let btn_step1 = document.getElementById("btn_step1");
    let btn_step2 = document.getElementById("btn_step2");
    let btn_step3 = document.getElementById("btn_step3");
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
    let btn_step1 = document.getElementById("btn_step1");
    let btn_step2 = document.getElementById("btn_step2");
    let btn_step3 = document.getElementById("btn_step3");
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "block";
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
// Getting event details from the form 
let event_name = document.getElementById("event_name");
let event_location = document.getElementById("venue");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let event_description = document.getElementById("about-event");

// Form Validation 
function validate_form(){
    if (event_name.value === "") {
        alert( "Please provide your Event's Name!" );
        event_name.focus() ;
        return false;
    }
    if (event_location.value === "") {
        alert( "Please provide your Event's Location!" );
        event_location.focus() ;
        return false;
    }
    if (start_date.value === "") {
        alert( "Please provide your Event's Start Date!" );
        start_date.focus() ;
        return false;
    }
    if (end_date.value === "") {
        alert( "Please provide your Event's End Date!" );
        end_date.focus() ;
        return false;
    }
    if (event_description.value === "") {
        alert( "Please provide your Event's Description!" );
        event_description.focus() ;
        return false;
    }
}


function event_details(){
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

displayStep3();
}
