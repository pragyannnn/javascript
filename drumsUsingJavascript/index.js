let button_element = document.querySelectorAll('.drum');                     //button element is now an array that contains all the .drum classes
for (let i = 0; i < button_element.length; i++) {                            //here we are iterating through the array of drum classes
    button_element[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        clickSound(buttonInnerHTML);
    });                                                                      //for each drum element we are using the addEventListener() click is the event we are listening to and clickSound is
} 
document.addEventListener("keydown", function(event) {
    clickSound(event.key);
});                                                                          //the function we are going to call when that event happens that is when we click we will call 
                                                                             //Note we are not using parenthesis after clickSound because we are not calling it immediately when the page loads
                                                                             //rather we want to call it when the user clicks or presses a key
function clickSound(key) {
    switch (key) {                                                           //key is either the button's inner text or the key pressed
        case "w":
            let w = new Audio('sounds/crash.mp3');
            w.play();
            break;
        case "a":
            let a = new Audio('sounds/kick-bass.mp3');
            a.play();
            break;
        case "s":
            let s = new Audio("sounds/snare.mp3");
            s.play();
            break;
        case "d":
            let d = new Audio("sounds/tom-1.mp3");
            d.play();
            break;
        case "j":
            let j = new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case "k":
            let k = new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case "l":
            let l = new Audio("sounds/tom-4.mp3");
            l.play();
            break;
        default: 
            console.log("Unrecognized key/button: " + key);
            break;
    }
}
