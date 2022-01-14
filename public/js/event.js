// Get event details 
function get_details(){
    let url = '/event/:id';
fetch(url).then(response => response.json())
.then((data) => {
    // console.log(data.data.rows);
    let mydata = data.data.rows;
    console.log("The generator Data ", mydata.questionnaires);
    console.log("The event quest generator", event.questionnaires);

})

.catch(err => {
    console.log(err);
})

}

get_details();
