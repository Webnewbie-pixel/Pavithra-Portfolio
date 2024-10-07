var typed = new Typed("#text", {
  strings:["Technical Recruitment"," Talent Acquisition"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
  
});

var typed = new Typed("#text2", {
  strings:["Let's Connect!"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
  
});
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
const submitButton = document.querySelector('input[type ="submit"]');
    submitButton.disabled = true;
    
  const templateParams = {
    from_name: document.getElementById("name").value,
   email_id:document.getElementById("email_ID").value,
    message : document.getElementById("message").value
  }; 
  emailjs.send('service_6zkrfm6', 'template_vldo8v2', templateParams).then(function(response) {
    swal("Boom!", "Message Delivered!");
    //clear the form fields
   document.getElementById("name").value ="";
   document.getElementById("email_ID").value = "";
   document.getElementById("message").value = "";

  }, function(error) {
    swal("Failed!", "Please try again later!");

  //Re-enable the submit button if there was an error
 
    submitButton.disabled = false;
  });
  });   