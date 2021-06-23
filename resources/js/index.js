var landingTexts = document.getElementsByClassName("landingText");

//Writes out the text in the docElement in a typewriter style
// delay is in ms
function typeWriter(docElement, txt, delay = 70) {
    txt = docElement.textContent;
    docElement.textContent = '';
    let i = 0;
    write();

    function write() {
        docElement.textContent += txt.charAt(i);
        i++;
        if (i < txt.length) {
            setTimeout(write, delay)
        }
    }
}

for (element of landingTexts) {
    console.log("count");
};

