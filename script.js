var btn = document.querySelector("#btn");
var url = "https://randomuser.me/api/";

var nameDis = document.querySelector("#Name");
var picDisplay = document.querySelector("#imageDisplay");


btn.addEventListener("click", function () {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            //change full name
            var fullName = data.results[0].name.first + " " + data.results[0].name.last;
            nameDis.innerText = fullName;
            //change profile pic
            var profilePic = data.results[0].picture.large;
            picDisplay.src = profilePic;
            //change user ID 
            var userID = data.results[0].login.username;
            document.querySelector("#userId").innerText = userID;
            //change email 
            var userEmail = data.results[0].email;
            document.querySelector("#email span").innerText = userEmail;
            //change city
            var userCity = data.results[0].location.city;
            document.querySelector("#city span").innerText = userCity;
        })
        .catch(function (err) {
            console.log(err);
        });
});