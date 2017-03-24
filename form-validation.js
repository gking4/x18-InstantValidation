function register()
{
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  window.alert(userEntered + "\n" + passEntered);
  
}

function validateUsername()
{
    var userEntered = document.getElementById("user").value;
    if(userEntered.length < 6)
  {
    document.getElementById("usernameGroup").classList.remove("has-success");
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(userEntered.search(" ") != -1)
  {
    document.getElementById("usernameGroup").classList.remove("has-success");
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("usernameError").innerHTML=" ";
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }
}

function validatePassword()
{
    var passEntered = document.getElementById("pass").value;
    var userEntered = document.getElementById("user").value;
    if(passEntered.toLowerCase() == "password")
  {
    document.getElementById("passwordGroup").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
    else if(passEntered.length < 6 && passEntered.length > 20)
  {
    document.getElementById("passwordGroup").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered)
  {
    document.getElementById("passwordGroup").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be the same as the Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("passwordError").innerHTML=" ";
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}