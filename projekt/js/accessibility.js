

$(document).ready(function () {
   
    function toggleAccessibility() {
        var isAccessibilityOn = $('#toggleSwitch').prop('checked');

        if (isAccessibilityOn) {
           
            $('#personalTable').css({
                'color': 'white',
                'background-color': 'black'
            });
        } else {
           
            $('#personalTable').css({
                'color': 'black',
                'background-color': 'white'
            });
        }
    }

   
    $('#toggleSwitch').on('change', function () {
        toggleAccessibility();
    });
});
