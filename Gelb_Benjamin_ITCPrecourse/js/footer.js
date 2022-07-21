const languages = ["HTML", "CSS", "Javascript", "Python"]
const statement = "This website was built using: "

const footerText = document.getElementsByClassName('footer-text')[0];


function parseIntoStr(array) {
    let sentence = ""

    for(let i = 0; i < array.length-1; i++) {
        sentence += array[i] + ", "
    }
    sentence += " and " + array[array.length-1];
    return sentence
}

footerText.innerText = statement + parseIntoStr(languages);
