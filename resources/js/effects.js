//Writes out the text in the docElement in a typewriter style
// delay is in ms
function typeWriter(docElement, delay = 70) {
    const txt = docElement.textContent;
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

const all = {
    typeWriter
}
export default all;