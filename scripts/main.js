let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
const myImage = document.querySelector("img");
myImage.onclick = () => {
    const imgSrc = myImage.getAttribute("src");
    if (imgSrc === 'images/firefox-normal.jpeg') {
        myImage.setAttribute("src", 'images/firefox-blue.jpeg');
    } else {
        myImage.setAttribute("src", 'images/firefox-normal.jpeg');
    }
};

function setUserName() {
    const userName = prompt("By what name do you go?");
    if (userName == null) {
        setUserName();
    } else {
        localStorage.setItem('User', userName);
        myHeading.textContent = `Oh What a Beautiful Morning, ${userName}`;
    }
}

if (!localStorage.getItem('User')) {
    setUserName();
} else {
    myHeading.textContent = `Oh What a Beautiful Morning, ${localStorage.getItem('User')}`;
}

myButton.onclick = () => {
    setUserName();
};