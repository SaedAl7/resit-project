
$(document).ready(function () {
    function updateDetails() {
        
        var telephone_number = prompt("Enter your telephone number:");
        var email_address = prompt("Enter your email address:");

        var phoneRegex = /^\d+$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phoneRegex.test(telephone_number) || !emailRegex.test(email_address)) {
            alert("Invalid input. Please enter a valid telephone number and email address.");
            return;
        }

       
        $('#contactNumber').text("Contact: " + telephone_number);
        $('#contactEmail').text("Address: " + email_address);

        
        console.log("Contact: " + telephone_number);
        console.log("Address: " + email_address);
    }

   
    $('#updateContactBtn').on('click', updateDetails);
});
