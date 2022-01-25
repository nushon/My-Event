function displayStep1(){
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    let btn_step1 = document.getElementById("btn_step1");
    let btn_step2 = document.getElementById("btn_step2");
    let btn_step3 = document.getElementById("btn_step3");
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
let final_question = [];
let questions_value = [];
function get_selected_questions(name) {
    
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.value === "Why_apply") {
            questions_value.push({"Why_apply": "Why apply"});
        }else if(checkbox.value === "Name"){
            questions_value.push({"Name": "Name"});

        }else if(checkbox.value === "DOB"){
            questions_value.push({"DOB": "Date of Birth"});

        }else if(checkbox.value === "Address"){
            questions_value.push({"Address": "Address"});

        }else if(checkbox.value === "Email"){
            questions_value.push({"Email": "Email"});

        }else if(checkbox.value === "Phone_number"){
            questions_value.push({"Phone_number": "Phone Number"});

        }else if(checkbox.value === "Why_you"){
            questions_value.push({"Why_you": "Why sholud we select you?"});

        } else if(checkbox.value === "Status"){
            questions_value.push({"Status": "Status"});

        }else if(checkbox.value === "About_you"){
            questions_value.push({"About_you": "Tell us about yourself."});

        }else if(checkbox.value === "Education_Status"){
            questions_value.push({"Education_Status": "Tell us about your Educational Status."});

        }else if(checkbox.value === "Sex"){
            questions_value.push({"Sex": "Sex"});

        }

        
        
    
    });
    console.log("Questions Values",questions_value);
    // questions_value.forEach(ele => {
    //     // final_questions = questions_value;
    //     // final_questions.push(questions_value);
    // })

    
    return questions_value;

}
function submit(){
    get_selected_questions('question');
    // console.log(get_selected_questions('question'));
    console.log("The final questions: ", questions_value);  
    displayStep2();
    // final_question.push(questions_value);
    // return final_question;
}
// console.log("Ben say", final_question);
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

// console.log("Questionnainers", questions_value);

function event_details(){
    let event_data = {
        event_name: event_name.value,
        event_location: event_location.value,
        start_date: start_date.value,
        end_date: end_date.value,
        event_description: event_description.value,
        questionnaires: JSON.stringify(questions_value)
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
