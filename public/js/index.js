function display_landing_page(){
    let url = '/display_event_details';
fetch(url).then(response => response.json())
.then((data) => {
    // console.log(data.data.rows);
    let mydata = data.data.rows;
    console.log("Data landing page", mydata);
    let landing_page = document.querySelector('#landing_page');

   
     for(let i = 0; i <= mydata.length; i++){
        landing_page.innerHTML += `
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="./img/IMG_7631.JPG">
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">${mydata[i].event_name}</h2>
          <p class="leading-relaxed text-base">${mydata[i].event_description}Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
          <button class="flex mx-auto mt-6 text-white border-0 py-2 px-5 focus:outline-none rounded" class="yellow_btn"><a href="/event/${mydata[i].id}">Attend Event</a></button>
        </div>
        `;
        } 
      })
      .catch(err => {
          console.log(err);
      })
      
      }
display_landing_page();