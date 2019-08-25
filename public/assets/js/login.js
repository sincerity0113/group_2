/* eslint-disable no-undef */
$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username ) {
      // alert( "please fill out your username!" );
      emailInput.focus();
      return;

    } else if( !userData.password) {
      // alert ( "please fill out your password!" )
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/login", {
      email: username,
      password: password
    })
      .then(function() {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  // function validateForm(){
  //   var x = document.forms["form.login"]["input#email-input"].value;
  //   if (x == "") {
  //     alert ("E-mail must be filled out");
  //     return false;
  //   }
  // }
  // function validatepass(){
  //   var y = document.forms["from.login"]
  // }
});
