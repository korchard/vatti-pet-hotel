console.log('hello from JS');
$(document).ready(readyNow);

function readyNow() {
    console.log('in jQuery');
    $('#submitBtn').on('click', submitPet);
    $('#petHotel').on('click', '.deleteBtn', deletePet);
    $('#petHotel').on('click', '.statusBtn', checkInPet);
    getPets();
}

function submitPet(){
    let petObject = {
        pet: $('#name-in').val(),
        breed: $('#breed-in').val(),
        color: $('#color-in').val(),
        owner: $('#owner-in').val(),
    }
    $.ajax({
        type: 'POST',
        url: '/pets',
        data: petObject
    })
    .then(function(response) {
        $('#name-in').val('');
        $('#breed-in').val('');
        $('#color-in').val('');
        $('#owner-in').val('');
        getPets(response);
    })
    .catch(function (error) {
        console.log('Error:', error);
        alert('Something bad happened. Try again later');
    })
}

function deletePet() { 
    console.log('Pet is leaving the hotel...');
    let petId = $(this).closest('tr').data('id');

    $.ajax({ 
        method: 'DELETE',
        url: `/pets/${petId}` 
    }).then( function(response) {
        getPets(response);
    }).catch(function(error) {
        console.log('Grrrrr...', error);
        alert('No bueno! There is an ERROR!');
    }); // end ajax request
} // end deletePet function 

function checkInPet() {
    console.log('Pet is checking in or out...');
    let petId = $(this).closest('tr').data('id');
    let petStatus = $(this).closest('tr').data('status');

    $.ajax({
        method: 'PUT',
        url: `/pets/${petId}`,
        data: {petStatus: petStatus}
    }).then(function(response) {
        getPets();
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
      let newPets = response.pets;
      console.log(newPets);
      renderPets(newPets);
    }).catch(function (error) {
      console.log('Error in client.js GET', error)
    });
  } // end getPets

function renderPets(newPets){
    console.log('In renderPets');
    
    //empty so no repeated table items
    $('#petHotel').empty();
    for (let item of newPets){
        //append to dom
        $('#petHotel').append(`<tr data-id="${item[0]}" data-status="${item[4]}">
                               <td>${item[1]}</td>
                               <td>${item[2]}</td>
                               <td>${item[3]}</td>
                               <td>${item[4]}</td>
                               <td><button class="statusBtn btn btn-outline-info">Checked In</button></td>
                               <td><button class="deleteBtn btn btn-outline-info">Delete</button></td>
                               <td>${item[5]}</td>
                               </tr>`);
  } //end for loop
}//end renderPets
