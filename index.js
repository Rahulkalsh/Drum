// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

//     function handleclick() {
//         this.style.color = "white";
//     }
// }
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonNameHtlm = this.innerHTML;
        makeSound(buttonNameHtlm);
        buttonAnimation(buttonNameHtlm);
    });
}
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "p":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "O":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 200);
}