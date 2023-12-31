

$(document).ready(function () {
 
    $('#liveToastBtn').on('click', function () {
        $('#liveToast').toast('show');
    });

  
    var $newButton = $('<button>', {
        id: 'getGoingBtn',
        text: "I'm Bored"
    });

  
    $('#liveToastBtn').after($newButton);

    $newButton.on('click', function () {
    
        $.get("https://www.boredapi.com/api/activity/", function (data) {
            console.log(data);
        });
    });

    // Additional code for the 'Like' button
    $('#likeBtn').on('click', function () {
        $('#liveToast').removeClass('bg-dark').addClass('bg-warning').find('.toast-body').html('<i class="fas fa-thumbs-up"></i> You liked it!');
        $('#liveToast').toast('show');
    });
});
