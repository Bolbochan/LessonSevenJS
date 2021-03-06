console.log(`Hello`);

const baton = document.getElementById(`open-btn`);
const lookIt = document.getElementsByClassName(`modal`);
console.log(baton)
console.log(lookIt)
let isVisibile = false

function look() {
    lookIt.style.display = isVisibile ? `none` : `block`;
    isVisibile = !isVisibile;
}

baton.onclick = look;