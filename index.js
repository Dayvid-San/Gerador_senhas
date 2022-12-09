let output = document.querySelector('#result')
let copyBTN = document.querySelector('#copy').addEventListener('click', () => {
    copy()
    alert("Copiado!")
})
let inputNumberChar = document.getElementById("numberChar");


const random = (length = 8) => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+=§:;.,°';

    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};


function toRender () {
    output.innerText = random(inputNumberChar.value)
    copy()
}

function copy () {
    const copyText = output.innerHTML
    navigator.clipboard.writeText(copyText)
}
