//listen for form submition
$("#cat-form").on('submit', function(event)  {
    event.preventDefault();

    //collect cat data as object 
    const catData = {
         cat_name: $('[name=cat-name]').val().trim()
    }
    console.log(catData);

    $.ajax({
        url: '/api/cats',  
        method: 'POST',
        data: catData
    }).then(responce => {
        console.log(responce);
        location.reload();
    });
});

$('.adoptCat').on('click', function() {

    //get id of cat we adopted
    const catId = $(this).attr('data-catid');

    $.ajax({
        url: `/api/cats/${catId}`,
        method: 'PUT',
        data: {
            adopted: 1
        }
    }).then(response => {
        console.log(response);
        location.reload();
    });
});

$('.deleteCat').on('click', function() {
    console.log('click')

    //get cat id
    const catId = $(this).attr('data-catid');

    //delete cat
    $.ajax({
        url: `/api/cats/${catId}`,
        method: 'DELETE'
    }).then(response => {
        console.log(response);
        location.reload();
    });
});