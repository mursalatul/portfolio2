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
    for (let i = 0; i < card.length; i++) { // Loop through each element
        let currentColor = window.getComputedStyle(card[i]).backgroundColor; // Get computed color
        if (currentColor === 'rgb(93, 173, 226)') { // Check if color is white
            card[i].style.backgroundColor = 'rgb(75, 96, 106)'; // Set color to black
        } else {
            card[i].style.backgroundColor = 'rgb(93, 173, 226)'; // Set color to white
        }
    }
}

function swapNavberColor() {
    let navber = document.getElementById("navber-id");
    if (navber.style.backgroundColor === 'rgb(93, 173, 226)') {
        navber.style.backgroundColor = 'rgb(75, 96, 106)';
    }
    else {
        navber.style.backgroundColor = 'rgb(93, 173, 226)';
    }
}

function swapProfilePicture() {
    let myimg = document.getElementById("profilepicture");
    let a = '<img src="img/myimg_color.png" width="400">';
    let b = '<img src="img/myimg_bnw.png" width="400">';
    console.log(myimg.innerHTML);
    if (myimg.innerHTML === a) {
        myimg.innerHTML = b;
    }
    else {
        myimg.innerHTML = a;
    }

}

function moodchange() {
    // change btn image and color
    let moodchangebtn = document.getElementById("moodchangebtn");
    if (moodchangebtn.style.backgroundColor === 'black') {
        moodchangebtn.style.backgroundColor = 'white';
        moodchangebtn.innerHTML = '<img height="20" src="img/light.png">';
    }
    else {
        moodchangebtn.style.backgroundColor = 'black';
        moodchangebtn.innerHTML = '<img height="20" src="img/moon-svgrepo-com.svg">'
    }
    swapBodyColor();
    swapTextColor();
    swapCardColor();
    swapNavberColor();
    swapProfilePicture();
}