// function displayStep1(){
//     let step1 = document.getElementById("step1");
//     let step2 = document.getElementById("step2");
//     let step3 = document.getElementById("step3");
//     let btn_step1 = document.getElementById("btn_step1");
//     let btn_step2 = document.getElementById("btn_step2");
//     let btn_step3 = document.getElementById("btn_step3");
//     step1.style.display = "block";
//     step2.style.display = "none";
//     step3.style.display = "none";
//     btn_step1.style.backgroundColor = "rgb(241, 143, 1)";
//     btn_step2.style.backgroundColor = "white";
//     btn_step3.style.backgroundColor = "white";
// }

// function form_generation(){
//         let url = '/event_questionnaires';
//     fetch(url).then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         let questionnaires_data = data.data.rows;
//         console.log("Questionnaires Data ", questionnaires_data);

    
//     display_html.innerHTML += `<div class="relative mb-4">
//     <label for="name" class="leading-7 text-sm text-gray-600">${questionnaires_data}</label>
//     <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
//   </div>
//     `;
    
           
//     })
    
//     .catch(err => {
//         console.log(err);
//     })

//     // console.log(get_selected_questions('question'));
//     // console.log("The final_questions: ", final_questions);


// }