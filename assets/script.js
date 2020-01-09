//1/6/2020 Need to Hardcode a limit of 8-128 password length and add a copy to bin button
//Math.floor(Math.random() * (max - min + 1)) + min;
var leter = Math.floor(Math.random() * (26)) + 1;;
var leterCaps = Math.floor(Math.random() * (26)) + 1;;
var number = Math.floor(Math.random() * (10)) + 0;;
var spcChar = Math.floor(Math.random() * (11)) + 1;;
var random = 0;
var leterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var leterCapsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "-"];
var length = 10;
var password = "";
function passwordGen() {
    password = "";
    var length = document.querySelector('input[id=passwordLength]').value;
    if (length<8) {
        length=8;
    }
    if(length>128) {
        length=128;
    }
    var useNumbers = document.querySelector('input[id=numbers]').checked;
    var useUpercase = document.querySelector('input[id=upercase]').checked;
    var useSpecial = document.querySelector('input[id=special]').checked;

    for (x = 0; x < length; x++) {

        leter = Math.floor(Math.random() * (26));;
        leterCaps = Math.floor(Math.random() * (26));;
        number = Math.floor(Math.random() * (10));;
        spcChar = Math.floor(Math.random() * (11));;
        if (useNumbers == true && useUpercase == true && useSpecial == true) {
            //ttt
            random = Math.floor(Math.random() * (4));
            if (random == 0) {
                password = password + leterArray[leter];
            }
            else if (random == 1) {
                password = password + leterCapsArray[leterCaps];
            }
            else if (random == 2) {
                password = password + number;
            }
            else if (random == 3) {
                password = password + specialArray[spcChar];
            }
        }
        else if (useNumbers == false && useUpercase == false && useSpecial == false) {
            //fff
            password = password + leterArray[leter];
        }
        else if (useNumbers == true && useUpercase == false && useSpecial == false) {
            //tff 
            random = Math.floor(Math.random() * (2));
            if (random == 0) {
                password = password + leterArray[leter];
            }
            else if (random == 1) {
                password = password + number;
            }
        }
        else if (useNumbers == false && useUpercase == true && useSpecial == false) {
            //ftf  
            random = Math.floor(Math.random() * (2));
            if (random == 0) {
                password = password + leterArray[leter];
            }
            else if (random == 1) {
                password = password + leterCapsArray[leterCaps];
            }

        }
        else if (useNumbers == false && useUpercase == false && useSpecial == true) {
            //fft 
            random = Math.floor(Math.random() * (2));
            if (random == 0) {
                password = password + leterArray[leter];
            }
            else if (random == 1) {
                password = password + specialArray[spcChar];
            }
        }
        else if (useNumbers == true && useUpercase == true && useSpecial == false) {
            //ttf 
            random = Math.floor(Math.random() * (3));
            if (random == 0) {
                password = password + leterArray[leter];
            }
            else if (random == 1) {
                password = password + number;
            }
            else if (random == 2) {
                password = password + leterCapsArray[leterCaps];
            }

        }
        else if (useNumbers == false && useUpercase == true && useSpecial == true) {
            //ftt 
            random = Math.floor(Math.random() * (3));
            if (random == 0) {
                password = password + leterArray[leter];
            }
            else if (random == 1) {
                password = password + specialArray[spcChar];
            }
            else if (random == 2) {
                password = password + leterCapsArray[leterCaps];
            }
        }
        else if (useNumbers == true && useUpercase == false && useSpecial == true) {
            //tft  
            random = Math.floor(Math.random() * (3));
            if (random == 0) {
                password = password + leterArray[leter];
            }
            else if (random == 1) {
                password = password + number;
            }
            else if (random == 2) {
                password = password + specialArray[spcChar];
            }
        }
    }
    var length = document.querySelector('input[id=passwordLength]').value;
    var useNumbers = document.querySelector('input[id=numbers]').checked;
    var useUpercase = document.querySelector('input[id=upercase]').checked;
    var useSpecial = document.querySelector('input[id=special]').checked;
    document.getElementById("password").innerText=("Your Password is: "+password);
    document.getElementById("hide").value=password;
}
function copy() {
    document.getElementById("hide").value=password;
    var copyText=document.getElementById("hide");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}