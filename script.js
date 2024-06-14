document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;

   var formData = {
        firstName: firstName,
        email: email
    };

  console.log('Sending form data:', formData);
    
});