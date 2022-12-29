// Copyright 2022 bereket
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function validation() {
  var name = document.getElementById("name").value;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("conpass").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emails = document.getElementById("emails").value;

  if (name == "") {
    document.getElementById("Name").innerHTML =
      " ** Please fill the Name field";
    return false;
  }

  if (emails == "") {
    document.getElementById("emailids").innerHTML =
      " ** Please fill the email id field";
    return false;
  }
  if (emails.indexOf("@") <= 0) {
    document.getElementById("emailids").innerHTML = " ** Invalid Email";
    return false;
  }

  if (
    emails.charAt(emails.length - 4) != "." &&
    emails.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("emailids").innerHTML = " ** Invalid Email";
    return false;
  }

  if (user == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the username";
    return false;
  }
  if (user.length <= 4 || user.length > 30) {
    document.getElementById("username").innerHTML =
      " ** Username lenght must be between 4 and 30";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      " ** only characters are allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById("passwords").innerHTML =
      " ** Please fill the password";
    return false;
  }
  if (pass.length <= 4 || pass.length > 30) {
    document.getElementById("passwords").innerHTML =
      " ** Passwords lenght must be between  4 and 30";
    return false;
  }

  if (pass != confirmpass) {
    document.getElementById("confrmpass").innerHTML =
      " ** Password Mismatch";
    return false;
  }

  if (confirmpass == "") {
    document.getElementById("confrmpass").innerHTML =
      " ** Please fill the confirmpassword field";
    return false;
  }

  if (mobileNumber == "") {
    document.getElementById("mobileno").innerHTML =
      " ** Please fill the mobile NUmber field";
    return false;
  }
  if (isNaN(mobileNumber)) {
    document.getElementById("mobileno").innerHTML =
      " ** user must write digits only not characters";
    return false;
  }
  if (mobileNumber.length != 10) {
    document.getElementById("mobileno").innerHTML =
      " ** Mobile Number must be 10 digits only";
    return false;
  }
}