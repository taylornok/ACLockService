$(document).ready(function (){

  var url = window.location.search;
  var messageId;

  // Getting jQuery references to the message info select

  var nameInput = $("#name").val().trim();
  var emailInput = $("#email").val().trim();
  var phoneInput = $("#phone").val().trim();
  var messageInput = $("#message").val().trim();
  var contactForm = $("#contactForm");

  $(contactForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    if (!nameInput || !phoneInput || !emailInput
      || !messageInput) {
      return alert("Please enter all the required information");
    }
    // constructing a new object to hand over the mySQL database
    var newMessage = {
      name: nameInput,
      email: emailInput,
      phone: phoneInput,
      message: messageInput
    };

    console.log(newMessage);



  });
  handleFormSubmit();

});
