// let final_questions = [];
// function get_selected_questions(name) {
//     let questions_value = [];
//     const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    
//     checkboxes.forEach((checkbox) => {
//         questions_value.push(checkbox.value);
        
//     });
//     console.log(questions_value);
//     questions_value.forEach(ele => {
//         final_questions = questions_value;
//         })
//     return questions_value;

// }

// function form_generation(){
//     console.log(get_selected_questions('question'));
//     displayStep3();
//     console.log("The final_questions: ", final_questions);
// };

// function event_details(event){
//     console.log(event);
//     event.preventDefault();
//     let event_data = {
//         event_name: event_name.value,
//         event_location: event_location.value,
//         start_date: start_date.value,
//         end_date: end_date.value,
//         event_description: event_description.value,
//         questionnaries: final_questions,
//         speakers_id: ''
//     }

//     console.log("Event datail", event_data);
//     // Send data to backend
// let url = "/event_detail";
// fetch(url,{
//     method: "POST",
//     body: JSON.stringify(event_data),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// }).then(function(response) {
//     return response.json();
// }).then(function(response){
//     console.log(response);
// }) .catch(function (err){
//     console.log(err);
// })
    
// }

