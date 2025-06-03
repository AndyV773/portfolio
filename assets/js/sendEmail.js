function sendMail(contactForm, event) {
  // Check if form is valid
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity(); // Show native validation messages
    return false;
  }

  // Disable the submit button
  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  event.preventDefault()

  // Send email via EmailJS
  emailjs.send("service_a5ubnxa", "template_xb2zlxg", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "from_message": contactForm.message.value
  })
  .then(() => {
    alert('Your message has been sent successfully!');
    contactForm.reset();
  })
  .catch(() => {
    alert('Oops! Something went wrong. Please try again.');
  })
  .finally(() => {
    submitButton.disabled = false;
  });

  return false;  // Prevent default form submit
}
