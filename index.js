var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

var oneBox = document.getElementById("boxone");
var twoBox = document.getElementById("boxtwo");
var threeBox = document.getElementById("boxthree");

oneBox.addEventListener("mouseenter", function() {
    one.style.background = "var(--clr-secondary)"
});
oneBox.addEventListener("mouseleave", function () {
    one.style.background = "var(--clr-line)"
});

twoBox.addEventListener("mouseenter", function () {
    two.style.background = "var(--clr-secondary)"
});
twoBox.addEventListener("mouseleave", function () {
    two.style.background = "var(--clr-line)"
});

threeBox.addEventListener("mouseenter", function () {
    three.style.background = "var(--clr-secondary)"
});
threeBox.addEventListener("mouseleave", function () {
    three.style.background = "var(--clr-line)"
});