//Writes out the text in the docElement in a typewriter style
// delay is in ms
function typeWriter(docElement, delay = 70) {
    const txt = docElement.textContent;
    docElement.textContent = '|';
    let i = 0;
    write();

    //writes text
    function write() {
        //adding in letters and cursor
        docElement.textContent = docElement.textContent.substring(0, i) + txt.charAt(i) + '|';
        i++;
        //looping
        if (i < txt.length) {
            setTimeout(write, delay)
        } else if (i == txt.length) {
            blink();
        }
    }

    //blinks the cursor 'nBlinks" times. Expects cursor is present when function called
    function blink(nBlinks = 3) {
        const blinkDelay = 500;
        let blinkCount = 0;//counts number of blinks
        removeCursor();

        function addCursor() {
            docElement.textContent += '|';
            setTimeout(removeCursor, blinkDelay);
        }

        function removeCursor() {
            docElement.textContent = docElement.textContent.substring(0, txt.length);
            blinkCount++;
            if (blinkCount <= nBlinks) {
                setTimeout(addCursor, blinkDelay);
            }
        }
    }
}

const all = {
    typeWriter
}
export default all;