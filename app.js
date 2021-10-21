const button = document.querySelector('#changeColor');
const questionColor = document.querySelector('#questionColor');
const score = document.querySelector('#score')
const text = document.querySelector('#text')
const btns = document.querySelectorAll('.select')

let ans = ''

const compareAns = (e) => {
    const selected = e.target.innerText
    if(selected === ans){
        text.innerText = "You Got It RIGHT!"
        score.innerText = parseInt(score.innerText) + 1
    } else{
        text.innerText = 'wrong, ans is ' +  ans
    }
    for(let btn of btns){
        if(btn !== e.target){
            btn.disabled = true
        }
    }
}


const generateQuestion = () => {
    text.innerText = ""
    for(let btn of btns){
        btn.disabled = false
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
for(let btn of btns){
    btn.addEventListener('click', compareAns)
}
