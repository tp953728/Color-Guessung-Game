const button = document.querySelector('#changeColor');
const questionColor = document.querySelector('#questionColor');
const form = document.querySelector('form')
const score = document.querySelector('#score')
const text = document.querySelector('#text')

const compareAns = (e) => {
    e.preventDefault();
    const submit = document.querySelector('form > button')
    submit.disabled = true;
    const colorBlock = document.querySelectorAll('.colorBlock')
    for (let [idx, block] of colorBlock.entries()) {
        block.innerText = 'this is the color!'
        block.style.backgroundColor = e.currentTarget.array[idx]
    }
    if (e.currentTarget.array[form.elements.color.value] == e.currentTarget.ans) {
        text.innerText = "You Got It RIGHT!"
        score.innerText = parseInt(score.innerText) + 1
    } else {
        text.innerText = "WRONG! Try again!"
        console.log('wrong')
    }
}


const generateQuestion = () => {
    text.innerText = ""
    const newColor = makeRandColor();
    questionColor.style.backgroundColor = newColor;
    array = [newColor, makeRandColor(), makeRandColor(), makeRandColor()]
    makeForm(array);
    form.array = array
    form.ans = newColor
}

const makeForm = (array) => {
    form.innerText = ''
    ans = shuffle(array)
    for (let [idx, color] of array.entries()) {
        form.innerHTML +=
            `<input type="radio" name="color" id="${idx}" value="${idx}"></input>
            <label for="${idx}">${idx + 1}. ${color}</label>
            <div class="colorBlock"></div>`
    }
    form.innerHTML += "<button>submit</button>"
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


button.addEventListener('click', generateQuestion)

form.addEventListener('submit', compareAns)
