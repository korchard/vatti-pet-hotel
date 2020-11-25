console.log('hello from JS');
$document.ready(readyNow);

function readyNow() {
    console.log('in jQuery');
    $('#submitBtn').on('click', submitPet);
    $('#deleteBtn').on('click', deletePet);
    $('#statusBtn').on('click', checkInPet);
    getPets();
}

function submitPet(){
    let petObject = {
        name: $('#name-in').val(),
        type: $('#type-in').val(),
        breed: $('#breed-in').val(),
        color: $('#color-in').val(),
        owner: $('owner-in').val(),
    }
    $.ajax({
        type: 'POST',
        url: '/pets',
        data: petObject
    })
    .then(function(response) {
        $('#name-in').val('');
        $('#type-in').val('');
        $('#breed-in').val('');
        $('#color-in').val('');
        $('#owner-in').val('');
        getPets();
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
      renderPets(response);
    }).catch(function (error) {
      console.log('Error in client.js GET', error)
    });
  } // end getPets

function renderPets(pets){
    //empty so no repeated table items
    $('#petHotel').empty();
    for (let item of pets){
        //append to dom
        $('#petHotel').append(`<tr data-id"${item.id}">
                               <td>${item.breed}</td>
                               <td>${item.color}</td>
                               <td>${item.checkedIn}</td>
                               <td><button class="deleteBtn">Delete</button></td>
                               <td><button class="statusBtn">Checked In</button></td>
                               <td>${item.ownerName}</td>
                               </tr>`);
  } //end for loop
}//end renderPets
