function sendMail(contactForm, event) {
  // Check if form is valid
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity(); // Show native validation messages
    return false;  // Stop submission
  }

  // Prevent the form from submitting normally
  event.preventDefault();

  // Send email via EmailJS
  emailjs.send("service_a5ubnxa", "template_xb2zlxg", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "from_message": contactForm.message.value
  })
  .then(
    function(response) {
      console.log("SUCCESS", response);
      alert('Your message has been sent successfully!');
      contactForm.reset();  // Clear form after success
    },
    function(error) {
      console.log("FAILED", error);
      alert('Oops! Something went wrong. Please try again.');
    }
  );

  return false;  // Prevent default form submit
}
