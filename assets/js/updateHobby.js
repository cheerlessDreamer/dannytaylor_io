const textList = [
    "recovering vanlife enthusiast",
    "avgeek",
    "VR enthusiast",
    "high-functioning introvert",
    "five-star Uber review holder",
    "budding self-hoster",
    "aspiring ceramicist",
    "tab hoarder",
    "sewing student",
    "good listener",
    "straight-talker",
    "night owl",
    "side-project hoarder",
];

const icon = "<i class='ph-bold ph-arrows-clockwise'></i>";

const textToChange = document.querySelector("#hobby");

function randomlyAssignText() {
    let randomIndex, newText;
    do {
        randomIndex = Math.floor(Math.random() * textList.length);
        newText = textList[randomIndex];
    } while (newText === textToChange.textContent);

    textToChange.innerHTML = newText + icon;
}

textToChange.addEventListener("click", randomlyAssignText);

randomlyAssignText();
