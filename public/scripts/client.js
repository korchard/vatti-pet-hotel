console.log('hello from JS'); // calling in javaScript
$(document).ready(readyNow); // calling in jQuery

function readyNow() {
    console.log('in jQuery');
    $('#submitBtn').on('click', submitPet); // addPet click handler
    $('#petHotel').on('click', '.deleteBtn', deletePet); // delete click handler
    $('#petHotel').on('click', '.statusBtn', checkInPet); // change check-in status click handler
    getPets(); // want this on DOM when refreshed
} // end readyNow function

function submitPet(){
    let petObject = { // needs to be an object to send to server-side
        pet: $('#name-in').val(),
        breed: $('#breed-in').val(),
        color: $('#color-in').val(),
        owner: $('#owner-in').val(),
    }
    $.ajax({
        type: 'POST',
        url: '/pets',
        data: petObject // object to send to server-side to input in DB
    })
    .then(function(response) {
        $('#name-in').val(''); // empty the input values
        $('#breed-in').val('');
        $('#color-in').val('');
        $('#owner-in').val('');
        getPets(response); // call the get request so we can update the guest list on the DOM
    })
    .catch(function (error) {
        console.log('Error:', error);
        alert('Something bad happened. Try again later');
    }) // end ajax request
} // end submitPet function

function deletePet() { 
    console.log('Pet is leaving the hotel...');
    let petId = $(this).closest('tr').data('id'); // grabs the closest table row to the clicked delete button

    $.ajax({ 
        method: 'DELETE',
        url: `/pets/${petId}` // identifys by data-id which pet to remove
    }).then( function(response) {
        getPets(response); // need to update guest list on DOM
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    }); // end ajax request
} // end deletePet function 

function checkInPet() {
    console.log('Pet is checking in or out...');
    let petId = $(this).closest('tr').data('id'); // grabs the closest table row to the clicked check-in button
    let petStatus = $(this).closest('tr').data('status'); // identifies the status of closest tr

    $.ajax({
        method: 'PUT',
        url: `/pets/${petId}`, // identifys by data-id which pet to remove
        data: {petStatus: petStatus} // status is sent over as an object
    }).then(function(response) {
        getPets(); // need to update guest list info on DOM
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    }) // end ajax request
} // end checkInPet function 

//start getPets
function getPets() {
    console.log('in getPets');
    // ajax call to server to get pets
    $.ajax({
      method: 'GET',
      url: '/pets'
    }).then(function (response) { //run renderPets once you get okay response
      console.log(response)
      let newPets = response.pets; // response is an object with arrays input, need to use dot notation to access the arrays
      console.log(newPets);
      renderPets(newPets); // renders pet info to the DOM
    }).catch(function (error) {
      console.log('Error in client.js GET', error)
    }); // end ajax request
  } // end getPets

function renderPets(newPets){
    console.log('In renderPets');
    
    //empty so no repeated table items
    $('#petHotel').empty();
    for (let item of newPets){
        //append to dom
        if(item[4] === 'No'){ // conditional to determin pet status and whether they need to be checked in our out
            $('#petHotel').append(`<tr data-id="${item[0]}" data-status="${item[4]}">
                               <td>${item[1]}</td>
                               <td>${item[2]}</td>
                               <td>${item[3]}</td>
                               <td>${item[4]}</td>
                               <td><button class="statusBtn btn btn-outline-info">Check In</button></td>
                               <td><button class="deleteBtn btn btn-outline-info">Delete</button></td>
                               <td>${item[5]}</td>
                               </tr>`);
        } else {
            $('#petHotel').append(`<tr data-id="${item[0]}" data-status="${item[4]}">
                               <td>${item[1]}</td>
                               <td>${item[2]}</td>
                               <td>${item[3]}</td>
                               <td>${item[4]}</td>
                               <td><button class="statusBtn btn btn-outline-info">Check Out</button></td>
                               <td><button class="deleteBtn btn btn-outline-info">Delete</button></td>
                               <td>${item[5]}</td>
                               </tr>`);
        } // end conditional
    } //end for loop
}//end renderPets
