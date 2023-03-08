console.log("Halo dari js luar");
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}
// slideshow untuk bikin slider di hero section homepage
function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000)

function validateForm() {
    // Get input value
    var name = document.forms["message-form"]["full-name"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;
    // validate input
    if (name == "" || date == "" || gender == "" || messages == "") {
        alert("Input tidak boleh kosong");
        return false;
    }
    // menampilkan value input di halaman lain
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    return false;
}