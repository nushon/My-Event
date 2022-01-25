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


// Getting speakers data from the form 
let speaker_name = document.getElementById("speaker_name");
let speaker_status = document.getElementById("speaker_status");
let biography = document.getElementById("biography")

function validate_speakers(){
    if (speaker_name.value === "") {
        alert( "Please provide your Speaker's Name!" );
        speaker_name.focus() ; 
        return false;
    }
    if (speaker_status.value === "") {
        alert( "Please provide your Speaker's Status!" );
        speaker_status.focus() ; 
        return false;
    }
    if (biography.value === "") {
        alert( "Please provide your Speaker's Status!" );
        speaker_status.focus() ; 
        return false;
    }
}
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
