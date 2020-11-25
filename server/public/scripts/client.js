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
