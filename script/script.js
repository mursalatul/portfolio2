function swapTextColor() {
    let texts = document.getElementsByClassName("text-here"); // Get all elements with class "text-here"
    for (let i = 0; i < texts.length; i++) { // Loop through each element
        let currentColor = window.getComputedStyle(texts[i]).color; // Get computed color
        if (currentColor === 'rgb(255, 255, 255)') { // Check if color is white
            texts[i].style.color = 'black'; // Set color to black
        } else {
            texts[i].style.color = 'white'; // Set color to white
        }
    }
}



function swapBodyColor() {
    let body = document.body; // Directly get the <body> element
    let currentColor = window.getComputedStyle(body).backgroundColor; // Get the computed background color

    if (currentColor === 'rgb(255, 255, 255)') { // Check if the current background is white
        body.style.backgroundColor = 'black'; // Change background to black
    } else {
        body.style.backgroundColor = 'white'; // Change background to white
    }
}

function swapCardColor() {
    let card = document.getElementsByClassName("bg-swap");
    console.log(card[0])
    for (let i = 0; i < card.length; i++) { // Loop through each element
        let currentColor = window.getComputedStyle(card[i]).backgroundColor; // Get computed color
        if (currentColor === 'rgb(210, 154, 242)') { // Check if color is white
            card[i].style.backgroundColor = 'rgb(75, 96, 106)'; // Set color to black
        } else {
            card[i].style.backgroundColor = 'rgb(210, 154, 242)'; // Set color to white
        }
    }
}



function moodchange() {
    // check currect theme
    // let myname = document.getElementById("my-name");
    // if (myname.style.color == 'black') {

    // }
    swapBodyColor();
    swapTextColor();
    swapCardColor();

}