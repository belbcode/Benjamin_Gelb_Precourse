let languages = ["HTML", "CSS", "Javascript"]
const statement = "This website was built using: "

const footerText = document.getElementsByClassName('footer-text')[0];

let sentence = ""

function parseIntoStr(array) {
    for(let i = 0; i < array.length-1; i++) {
        sentence += array[i]
        sentence += ", "
    }
    sentence += " and " + array[array.length-1];

    return sentence
}

footerText.innerText = statement + parseIntoStr(languages);
