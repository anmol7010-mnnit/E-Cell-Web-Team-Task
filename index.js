let btn = document.querySelector(".checkbtn");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function() {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    }
    else {
        icon.classList.replace("fa-times", "fa-bars");
    }
}

for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".grid-item")[i].addEventListener("click", function () {
        document.querySelector(".i").style.background = "#7A0000";
    });
}