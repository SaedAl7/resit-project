
$(document).ready(function () {
  
    var aboutMeContent = {
        company: "Something about the company",
        values: "Something about our values"
    };

    function updateAboutMe() {
        $('.about-content').each(function () {
            var contentKey = $(this).data('content');
            if (aboutMeContent.hasOwnProperty(contentKey)) {
                $(this).text(aboutMeContent[contentKey]);
            }
        });
    }

    updateAboutMe();

  
    $('.about-content').on('click', function () {
        $(this).css({
            'background-color': 'powderblue',
            'color': 'white'
        });
    });
});
