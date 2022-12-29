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

      function validation(){
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;

        if (user == "") {
          document.getElementById("username").innerHTML =
            " ** Please fill the username ";
          return false;
        }
        if (user.length <= 4 || user.length > 30) {
          document.getElementById("username").innerHTML =
            " ** Username lenght must be between 4 and 20";
          return false;
        }
        if (!isNaN(user)) {
          document.getElementById("username").innerHTML =
            " ** only characters are allowed";
          return false;
        }

        if (pass == "") {
          document.getElementById("passwords").innerHTML =
            " ** Please fill the password field";
          return false;
        }
        if (pass.length <= 4 || pass.length > 30) {
          document.getElementById("passwords").innerHTML =
            " ** Passwords lenght must be between  4 and 30";
          return false;
        }

        if (pass != confirmpass) {
          document.getElementById("confrmpass").innerHTML =
            " ** Password does not match the confirm password";
          return false;
        }}