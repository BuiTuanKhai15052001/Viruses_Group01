const accordion = document.getElementsByClassName("listener");
const accordion2 = document.getElementsByClassName("ans1");


for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}
for (i = 0; i < accordion2.length; i++) {
    accordion2[i].addEventListener("click", function () {
        this.classList.toggle("active2");
    })
}