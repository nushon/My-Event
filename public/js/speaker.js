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
    btn_step2.style.backgroundColor = "rgb(241, 143, 1)";
    btn_step3.style.backgroundColor = "white";
}


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
displayStep3();
}

// function get_speakers(){
//     let url = '/display_speakers';
// fetch(url).then(response => response.json())
// .then((data) => {
//     // console.log(data.data.rows);
//     let mydata = data.data.rows;
//     console.log("Data ", mydata);
//     let container = document.querySelector('#div_display');


// container.innerHTML += `
// <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
// <div class="h-full text-center">

// <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/albin.jpeg">
// <p id="speaker_bio" class="leading-relaxed">${mydata.bio}</p>
// <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
// <h2 id="speaker_name" class="text-gray-900 font-medium title-font tracking-wider text-sm">${mydata.name}</h2>
// <p id="speaker_status" class="text-gray-500">${mydata.status}</p>
// </div>

// </div>
// `;
  
// })
// .catch(err => {
//     console.log(err);
// })

// }
// get_speakers();