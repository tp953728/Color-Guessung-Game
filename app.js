const button = document.querySelector('#changeColor');
const questionColor = document.querySelector('#questionColor');
const score = document.querySelector('#score')
const btns = document.querySelectorAll('.select')

let ans = ''

const compareAns = (e) => {
    const selected = e.target.innerText
    if (selected === ans) {
        score.innerText = parseInt(score.innerText) + 1
    }
    for (let btn of btns) {
        btn.style.backgroundColor = btn.innerText;
        if (btn !== e.target) {
            btn.disabled = true
        }
        if (btn.innerText === ans) {
            btn.style.border = '3px solid #00c853'
        } else {
            btn.style.border = '3px solid #f44336'
        }
    }
}


const generateQuestion = () => {
    for (let btn of btns) {
        btn.disabled = false
        btn.style.backgroundColor = '';
        btn.style.border = ''
    }
    const newColor = makeRandColor();
    ans = newColor
    questionColor.style.backgroundColor = newColor;
    array = [newColor, makeRandColor(), makeRandColor(), makeRandColor()]
    makeBtn(array);
}

const makeBtn = (array) => {
    shuffle(array)
    for (let [idx, color] of array.entries()) {
        btns[idx].innerText = color;
    }
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

generateQuestion()

button.addEventListener('click', generateQuestion)
for (let btn of btns) {
    btn.addEventListener('click', compareAns)
}
