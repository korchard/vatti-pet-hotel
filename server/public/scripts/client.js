
























































































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