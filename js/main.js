alert ("Prepare to be smitten! This page is packed with ultra-cute pictures that'll make your heart melt. Warning: cuteness overload!");

const darkBtn = document.getElementById("darkBtn");
const elements = [...document.querySelectorAll("#banner, body, .box, .heading, button")];


darkBtn.addEventListener("click",getdarkMode);

function getdarkMode(){
    
    elements.forEach(function(element) {
        element.classList.toggle("dark-mode");
        if (element.classList.contains("dark-mode")) {
            darkBtn.innerHTML = "Light Mode";
            /*darkBtn.style.backgroundColor = "white";*/
            darkBtn.style.color = "black";
          } else {
            darkBtn.innerHTML = "Dark Mode";
            darkBtn.style.color = "white";
          }
    });
    let banner = document.getElementsByClassName("banner")[0];
    if (document.body.classList.contains("dark-mode")) {
      banner.style.backgroundImage = "url('/image/banner2d.jpg')";
    } else {
      banner.style.backgroundImage = "url('/image/banner2.jpg')";
    }
    };



    // learning what toggle does
    /* if (element.classList.contains("dark-mode")){
     element.classList.remove("dark-mode");
   
    } 
    else{
    element.classList.add("dark-mode");
   };
});*/

 

//get random pic of my dog from a local folder
const randomButton = document.getElementById('randomButton');
const imgEncanto = document.getElementById('imgEncanto');
const images = ["/image/1.jpg","/image/2.jpg","/image/3.jpg","/image/4.jpg","/image/5.jpg","/image/6.jpg","/image/7.jpg","/image/8.jpg","/image/9.jpg","/image/10.jpg","/image/11.jpg","/image/12.jpg","/image/13.jpg","/image/14.jpg","/image/15.jpg","/image/16.jpg","/image/17.jpg","/image/18.jpg","/image/19.jpg","/image/20.jpg","/image/21.jpg","/image/22.jpg","/image/23.jpg","/image/24.jpg","/image/25.jpg","/image/26.jpg","/image/27.jpg","/image/28.jpg","/image/29.jpg","/image/30.jpg","/image/31.jpg","/image/32.jpg","/image/33.jpg","/image/34.jpg","/image/35.jpg","/image/36.jpg","/image/37.jpg","/image/38.jpg","/image/39.jpg","/image/40.jpg","/image/41.jpg","/image/42.jpg","/image/43.jpg","/image/44.jpg","/image/45.jpg","/image/46.jpg","/image/47.jpg","/image/48.jpg","/image/49.jpg","/image/50.jpg","/image/51.jpg","/image/52.jpg","/image/53.jpg","/image/54.jpg","/image/55.jpg","/image/56.jpg","/image/57.jpg","/image/58.jpg","/image/59.jpg","/image/60.jpg","/image/61.jpg","/image/62.jpg","/image/63.jpg","/image/64.jpg","/image/65.jpg","/image/67.jpg","/image/68.jpg","/image/69.jpg","/image/70.jpg"];

// Add click event listener to the button
randomButton.addEventListener('click', randompic);
function randompic () {
    // Get a random image from the images array
    let randomIndex = Math.floor(Math.random() * images.length);
   
// Get an image at the randomindex
   selectedImage =images[randomIndex]

   //display the image
   imgEncanto.innerHTML = `<img src='${selectedImage}' alt="encanto's pic"/>`
};

//fetch dogs pic from //dog.ceo/dog-api

const dogpics =document.getElementById('dogpics');
const randomdogpic = document.getElementById('randomdogpic');
const dogbreed = document.getElementById('dogbreed')

randomdogpic.addEventListener('click',getRandompic);
function getRandompic() {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(data => {
           console.log(data);
    const dogbreedname = data.message.split("/")[4];
    dogpics.innerHTML = `<img src="${data.message}">`;
    dogbreed.innerHTML =dogbreedname;
      
      });
    };




    //dog facts
    const facts =document.getElementById('facts');
    const randomfacts = document.getElementById('randomfacts');
    const dogFacts = ["The Labrador Retriever has been on the AKCs top 10 most popular breeds list for 30 consecutive years—longer    than any other breed.","A dog nose print is unique, much like a persons fingerprint.",
      "Forty-five percent of U.S. dogs sleep in their owners bed.",
      "Speaking of sleeping … all dogs dream, but puppies and senior dogs dream more frequently than adult dogs.", "Seventy percent of people sign their dogs name on their holiday cards.",
      "A dogs sense of smell is legendary, but did you know that his nose has as many as 300 million receptors? In comparison, a human nose has about 5 million.",
      "Rin Tin Tin, the famous German Shepherd, was nominated for an Academy Award.",
      " Dogs noses can sense heat/thermal radiation, which explains why blind or deaf dogs can still hunt.",
      "Only one breed that was among the five most popular breeds in 1934— the Beagle — still remains in the top five today", 
      "The name Collie means black. (Collies once tended black-faced sheep.)",
      "Yawning is contagious—even for dogs. Research shows that the sound of a human yawn can trigger one from your dog. And its four times as likely to happen when its the yawn of a person he knows.",
      "The Dandie Dinmont Terrier is the only breed named for a fictional person—a character in the novel Guy Mannering by Sir Walter Scott.", "Dogs curl up in a ball when sleeping to protect their organs—a hold over from their days in the wild, when they were vulnerable to predator attacks.",
        "The Basenji is not technically barkless as many people think. They can yodel",
        "The Australian Shepherd is not actually from Australia—they are an American breed And the Labrador Retriever is originally from Newfoundland.",
        "Human blood pressure goes down when petting a dog And so does the dogs.", " There are over 75 million pet dogs in the U.S.—more than in any other country.",
        "A person who hunts with a Beagle is known as a “Beagler.", "Dogs are not colorblind They can see blue and yellow.", "All puppies are born deaf.","Dalmatians are born completely white and develop their spots as they get older.",
        "Dogs have about 1,700 taste buds. We humans have between 2,000 10,000.", " When dogs kick backward after they go to the bathroom its not to cover it up, but to mark their territory, using the scent glands in their feet.",
        "A recent study shows that dogs are among a small group of animals who show voluntary unselfish kindness towards others without any reward. This is one fact dog lovers have known all along.",
        "The Norwegien Lundehund is the least popular dog breed and the only dog breed created for the job of puffin hunting.",
        "Greyhounds can beat cheetahs in a race. While cheetahs can run twice as fast as greyhounds they can only maintain that 70 mph speed for about thirty seconds. A Greyhound can maintain a 35 mph speed for about seven miles. So, the cheetah may start out first, but the greyhound will soon overtake him.",
        "The Bloodhounds sense of smell is so accurate that the results of its tracking can be used as evidence in a court of law.",
        "Some dogs are taller or heavier, but according to the Guinness World Records, a Mastiff named Zorba is the worlds overall largest dog ever. Zorba weighed 343 pounds and measured over eight feet from his nose to his tail. Hes been described as being about the size of a small donkey.",
        " According to the Guinness World Records, the smallest dog ever recorded was Miracle Milly, the Chihuahua. Born in 2011, Milly was a miniscule 3.8 inches tall and weighed in at one pound."];

   // Add click event listener to the button
   randomfac.addEventListener('click', getrandomfac);
function getrandomfac () {
    // Get a random image from the images array
    let randomIndex = Math.floor(Math.random() * dogFacts.length);
   
// Get a fact at the randomindex
   selectedFacs =dogFacts[randomIndex]

   //display the fact
   facts.innerHTML = selectedFacs;
};


    //fetch dogs databse from my own api hosted on render


    const datadogs = document.getElementById('datadogs');
    const Pdata = document.getElementById('Pdata')
    
    datadogs.addEventListener('click', getdatadogs);
    function getdatadogs() {
      fetch("https://nodeprojectbackend.onrender.com/dog/alldogs")
        .then(res => res.json())
         .then(data => {
    
              // create table header
               let table = document.createElement('table');
               table.className = 'dogtable';
               let tableHeader = table.insertRow(-1);
               let headers = ['_id','Name', 'life_expectancy', 'max_height', 'max_weight','energy', 'barking'];
               for (let i = 0; i < headers.length; i++) {
                   let th = document.createElement('th');
                   th.innerHTML = headers[i];
                   tableHeader.appendChild(th);
               }
                // create table rows
               for (let i = 0; i < data.length; i++) {
                   let tr = table.insertRow(-1);
                   tr.setAttribute('data-id', data[i]._id);// set _id attribute to the table row element
                   let tabCell1 = tr.insertCell(-1);
                   let tabCell2 = tr.insertCell(-1);
                   let tabCell3 = tr.insertCell(-1);
                   let tabCell4 = tr.insertCell(-1);
                   let tabCell5 = tr.insertCell(-1);
                   let tabCell6 = tr.insertCell(-1);
                   let tabCell7 = tr.insertCell(-1);
                   let tabCell8 = tr.insertCell(-1); // new cell for delete button
                   let tabCell9 = tr.insertCell(-1); // new cell for update button

                   let deleteBtn = document.createElement('button');
                   deleteBtn.innerHTML = 'Delete';
                   deleteBtn.onclick = function() {
                       deleteDog(data[i]._id);
                   };

                    tabCell8.appendChild(deleteBtn);

                    tabCell1.innerHTML = data[i]._id
                    tabCell2.innerHTML = data[i].Name
                    tabCell3.innerHTML = data[i].life_expectancy
                    tabCell4.innerHTML = data[i].max_height
                    tabCell5.innerHTML = data[i].max_weight
                    tabCell6.innerHTML = data[i].energy
                    tabCell7.innerHTML = data[i].barking


                    tabCell8.innerHTML = '<button onclick="deleteDog(\'' + data[i]._id + '\')">Delete</button>'; // add delete button with onclick event
                    tabCell9.innerHTML = '<button onclick="updateDog(\'' + data[i]._id + '\', ' + JSON.stringify(data[i]) + ')">Update</button>';  // add update button with onclick event
                  
                  }

                  Pdata.innerHTML = '';
                  Pdata.appendChild(table);

                })
                .catch(err => {
                  console.error('Error retrieving dog data:', err);
                })

              }
                   
            

                // // // function to send an Update request to server with dog ID    
                        
                function updateDog(id, data) {
                  // get the table row element for the dog record
                  const row = document.querySelector(`tr[data-id="${id}"]`);
                
                  // create input fields for each data attribute and set their values to the existing data
                  const nameInput = document.createElement('input');
                  nameInput.value = data.Name;
                  const lifeExpectancyInput = document.createElement('input');
                  lifeExpectancyInput.value = data.life_expectancy;
                  const maxHeightInput = document.createElement('input');
                  maxHeightInput.value = data.max_height;
                  const maxWeightInput = document.createElement('input');
                  maxWeightInput.value = data.max_weight;
                  const energyInput = document.createElement('input');
                  energyInput.value = data.energy;
                  const barkingInput = document.createElement('input');
                  barkingInput.value = data.barking;
                
                  // replace the table cells with the input fields
                  const nameCell = row.cells[1];
                  const lifeExpectancyCell = row.cells[2];
                  const maxHeightCell = row.cells[3];
                  const maxWeightCell = row.cells[4];
                  const energyCell = row.cells[5];
                  const barkingCell = row.cells[6];
                  nameCell.innerHTML = '';
                  nameCell.appendChild(nameInput);
                  lifeExpectancyCell.innerHTML = '';
                  lifeExpectancyCell.appendChild(lifeExpectancyInput);
                  maxHeightCell.innerHTML = '';
                  maxHeightCell.appendChild(maxHeightInput);
                  maxWeightCell.innerHTML = '';
                  maxWeightCell.appendChild(maxWeightInput);
                  energyCell.innerHTML = '';
                  energyCell.appendChild(energyInput);
                  barkingCell.innerHTML = '';
                  barkingCell.appendChild(barkingInput);
                
                  // add a "Save" button to the row
                  const saveBtn = document.createElement('button');
                  saveBtn.innerHTML = 'Save';
                  saveBtn.onclick = function() {
                    // send the updated data to the server
                    const updatedData = {
                      Name: nameInput.value,
                      life_expectancy: lifeExpectancyInput.value,
                      max_height: maxHeightInput.value,
                      max_weight: maxWeightInput.value,
                      energy: energyInput.value,
                      barking: barkingInput.value,
                    };
                    fetch(`https://nodeprojectbackend.onrender.com/dog/update/${id}`, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(updatedData),
                    })
                    .then(res => res.json())
                    .then(data => {
                      // update the table row with the new data
                      nameCell.innerHTML = data.Name;
                      lifeExpectancyCell.innerHTML = data.life_expectancy;
                      maxHeightCell.innerHTML = data.max_height;
                      maxWeightCell.innerHTML = data.max_weight;
                      energyCell.innerHTML = data.energy;
                      barkingCell.innerHTML = data.barking;
                      // remove the "Send" button
                      row.cells[7].innerHTML = '<button onclick="deleteDog(\'' + id + '\')">Delete</button>';
                    })
                    .catch(err => {
                      console.error('Error updating dog data:', err);
                    });
                  };

                  // replace the "Update" button with the "Send" button
                  row.cells[8].innerHTML = '';
                  row.cells[8].appendChild(sendBtn);
                }

                // // function to send DELETE request to server with dog ID             
                function deleteDog(id) {
                  fetch('https://nodeprojectbackend.onrender.com/dog/delete/' + id, {
                    method: 'DELETE'
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data);
                    // Reload the table after deleting the dog
                    getdatadogs();
                  })
                  .catch(err => {
                    console.error('Error deleting dog:', err);
              });
            } 
          //      // // function to insertrecord request to server    

          //      function insertRecord() {
          //       fetch('https://nodeprojectbackend.onrender.com/dog/', {
          //         method: 'PUT'
          //       })
          //       .then(res => res.json())
          //       .then(data => {
          //         console.log(data);
          //         // Reload the table after deleting the dog
          //         getdatadogs();
          //       })
          //       .catch(err => {
          //         console.error('Error deleting dog:', err);
          //   });
          // }  
          function showPopupForm() {
            // create the form element
            var form = document.createElement('form');
            form.id = 'new-dog-form';
          
            // create the name input field
            var nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = 'name';
            nameInput.placeholder = 'Name';
            form.appendChild(nameInput);
          
            // create the life expectancy input field
            var lifeExpectancyInput = document.createElement('input');
            lifeExpectancyInput.type = 'text';
            lifeExpectancyInput.name = 'life_expectancy';
            lifeExpectancyInput.placeholder = 'Life Expectancy';
            form.appendChild(lifeExpectancyInput);
          
            // create the max height input field
            var maxHeightInput = document.createElement('input');
            maxHeightInput.type = 'text';
            maxHeightInput.name = 'max_height';
            maxHeightInput.placeholder = 'Max Height';
            form.appendChild(maxHeightInput);
          
            // create the max weight input field
            var maxWeightInput = document.createElement('input');
            maxWeightInput.type = 'text';
            maxWeightInput.name = 'max_weight';
            maxWeightInput.placeholder = 'Max Weight';
            form.appendChild(maxWeightInput);
          
            // create the energy input field
            var energyInput = document.createElement('input');
            energyInput.type = 'text';
            energyInput.name = 'energy';
            energyInput.placeholder = 'Energy';
            form.appendChild(energyInput);
          
            // create the barking input field
            var barkingInput = document.createElement('input');
            barkingInput.type = 'text';
            barkingInput.name = 'barking';
            barkingInput.placeholder = 'Barking';
            form.appendChild(barkingInput);
          
            // create the submit button
            var submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.value = 'Submit';
            form.appendChild(submitButton);
          
            // add an event listener to the form to submit the data to the API when submitted
            form.addEventListener('submit', function(event) {
              event.preventDefault();
          
              // get the form data
              var formData = new FormData(form);
          
              // make the API request to insert the new record
              fetch('https://nodeprojectbackend.onrender.com/dog', {
                method: 'POST',
                body: formData
              })
              .then(function(response) {
                if (response.ok) {
                  // show a success message and close the popup
                  alert('New dog added successfully!');
                  closePopup();
                } else {
                  // show an error message
                  alert('Error adding new dog');
                }
              })
              .catch(function(error) {
                // show an error message
                alert('Error adding new dog');
              });
            });
          
            // create the overlay element
            var overlay = document.createElement('div');
            overlay.id = 'overlay';
          
            // add the form to the overlay
            overlay.appendChild(form);
          
            // add the overlay to the document
            document.body.appendChild(overlay);
          
            // function to close the popup
            function closePopup() {
              overlay.remove();
            }
          }
          
          // add an event listener to the "New Dog" button to show the popup form when clicked
          document.getElementById('newdog').addEventListener('click', showPopupForm);
          