//Veethacheng Thao
var info = [];
var increment = 0;

function toLink() {
  if (increment == 6) {
    document.getElementById("pageBtn").onclick = function() {
      location.href = "file:///C:/Users/v_tha/Desktop/html/projects/Project3/story.html";
    };
  }
  else {
    alert("please answer all questions");
  }
}

function story() {
    var cookie1 = getCookie("info1");
    toArray(cookie1);
    var cookie2 = getCookie("info2");
    toArray(cookie2);
    var cookie3 = getCookie("info3");
    toArray(cookie3);
    var cookie4 = getCookie("info4");
    toArray(cookie4);
    var cookie5 = getCookie("info5");
    toArray(cookie5);
    var cookie6 = getCookie("info6");
    toArray(cookie6);

    document.getElementById("storySummary").innerHTML = "Congratulations "+info[0].fontcolor("yellow")+" "+
    "you just bought a house in Chico. As you began to get familiar with your"+" "+
    "new neighborhood you found out that your best friend "+info[1].fontcolor("yellow")+" during high"+" "+
    "school lives in the same area.  You both again got really close to each"+" "+
    "other and always hangout. On the weekends you both always go to the park"+" "+
    "and play "+info[2].fontcolor("yellow")+" then go to the local restaurant to eat "+info[3].fontcolor("yellow")+". Then one day"+" "+
    "as you both were at the park a "+info[4].fontcolor("yellow")+" came out of nowhere and attack your"+" "+
    "friend. You rush him to the hospital but it was too late. As the months"+" "+
    "go by you realize that this neighborhood have nothing better to offer but sadness."+" "+
    "So you decided to move out and live with "+info[5].fontcolor("yellow")+", your family member.";

}

function toArray(values) {
    return info.push(values);
}

function getInfo1() {
    var inputName = document.getElementById("name").value;
    if(document.getElementById("name").value != "") {
      increment++;
    }
    if (!isNaN(inputName)) {
      alert("Numeric input not allow!");
    }
    setCookie("info1",inputName);
}

function getInfo2() {
    var inputFriend = document.getElementById("friendName").value;
    if(document.getElementById("friendName").value != "") {
      increment++;
    }
    if (!isNaN(inputFriend)) {
      alert("Numeric input not allow!");
    }
    setCookie("info2",inputFriend);
}

function getInfo3() {
    var inputAnimal = document.getElementById("animal").value;
    if(document.getElementById("animal").value != "") {
      increment++;
    }
    if (!isNaN(inputAnimal)) {
      alert("Numeric input not allow!");
    }
    setCookie("info3",inputAnimal);
}

function getInfo4() {
    var inputSport = document.getElementById("sport").value;
    if(document.getElementById("sport").value != "") {
      increment++;
    }
    if (!isNaN(inputSport)) {
      alert("Numeric input not allow!");
    }
    setCookie("info4",inputSport);
}

function getInfo5() {
    var inputFood = document.getElementById("food").value;
    if(document.getElementById("food").value != "") {
      increment++;
    }
    if (!isNaN(inputFood)) {
      alert("Numeric input not allow!");
    }
    setCookie("info5",inputFood);
}

function getInfo6() {
    var inputFamMember = document.getElementById("familyMember").value;
    if(document.getElementById("familyMember").value != "") {
      increment++;
    }
    if (!isNaN(inputFamMember)) {
      alert("Numeric input not allow!");
    }
    setCookie("info6",inputFamMember);
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
