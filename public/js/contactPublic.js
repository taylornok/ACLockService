$(document).ready(function (){
  let nameInput = $('#name');
  let emailInput = $('#email');
  let phoneInput = $('#phone');
  let messageInput = $('#message');
  let contactForm = $('#contactForm')

  $(contactForm).on('submit', handleContactFormSubmit);

  const handleAuthorFormSubmit = event => {
    event.preventDefault();

    if(!nameInput || !phoneInput || !messageInput) {
      return alert ('ERROR: Please fill out all required fields')
    }
      
    const newContact = {
      name: nameInput
        .val()
        .trim(),
      email: emailInput
        .val()
        .trim(),
      phone: phoneInput
        .val()
        .trim(),
      message: messageInput
        .val()
        .trim(),

    }
    
  };

});
