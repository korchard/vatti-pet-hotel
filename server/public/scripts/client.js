




























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