var topPosition = -200;
var leftPosition = 200;
function runPuppy() {
        let puppy = document.getElementById("puppy");
    puppy.style.left = leftPosition + "px"
    puppy.style.top = topPosition + "px"
    puppy.style.visibility = "visible"
}
    
// // add if it reaches the screen end (you can check with screen.availwidth)