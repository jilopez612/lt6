function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var fname = document.Form.fname.value;
    var mname = document.Form.mname.value;
    var lname = document.Form.lname.value;
    var email = document.Form.email.value;


    var fnameErr = mnameErr = lnameErr = emailErr = true;


    if(fname == "") {
        printError("fnameErr", "Please enter your first name");
        var elem = document.getElementById("fname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(fname) === false) {
            printError("fnameErr", "Please enter a valid first name");
            var elem = document.getElementById("fname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
            var elem = document.getElementById("fname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(mname == "") {
        printError("mnameErr", "Please enter your middle initial");
        var elem = document.getElementById("mname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^(?=.{1,1}$)[a-zA-Z]/;
        if(regex.test(mname) === false) {
            printError("mnameErr", "Please enter a valid middle initial");
            var elem = document.getElementById("mname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("mnameErr", "");
            mnameErr = false;
            var elem = document.getElementById("mname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(lname == "") {
        printError("lnameErr", "Please enter your last name");
        var elem = document.getElementById("lname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid last name");
            var elem = document.getElementById("lname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
            var elem = document.getElementById("lname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }


    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }


    if((fnameErr || mnameErr || lnameErr || emailErr) == true) {
       return false;
    }
    else{
      correct();
  	  return alert("Success!");
    }
}

function correct(){
  printError("emailErr", "");
  emailErr = false;
  document.getElementById("email").classList.add("input-1");
  document.getElementById("email").classList.remove("input-2");

  printError("lnameErr", "");
  lnameErr = false;
  document.getElementById("lname").classList.add("input-1");
  document.getElementById("lname").classList.remove("input-2");

  printError("mnameErr", "");
  mnameErr = false;
  document.getElementById("mname").classList.add("input-1");
  document.getElementById("mname").classList.remove("input-2");

  printError("fnameErr", "");
  fnameErr = false;
  document.getElementById("fname").classList.add("input-1");
  document.getElementById("fname").classList.remove("input-2");
}

function resetButton(){
  printError("emailErr", "");
  emailErr = false;
  document.getElementById("email").classList.remove("input-1");
  document.getElementById("email").classList.remove("input-2");

  printError("lnameErr", "");
  lnameErr = false;
  document.getElementById("lname").classList.remove("input-1");
  document.getElementById("lname").classList.remove("input-2");

  printError("mnameErr", "");
  mnameErr = false;
  document.getElementById("mname").classList.remove("input-1");
  document.getElementById("mname").classList.remove("input-2");

  printError("fnameErr", "");
  fnameErr = false;
  document.getElementById("fname").classList.remove("input-1");
  document.getElementById("fname").classList.remove("input-2");

  this.form.reset();
};
