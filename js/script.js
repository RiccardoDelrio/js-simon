const listEl = document.querySelector('#numbers-list')
const formControl = document.querySelectorAll('.form-control')
const countdownEl = document.querySelector('#countdown')
const answersForm = document.querySelector('#answers-form')
let timer = 2
const inputGroup = document.querySelector("#input-group")
const NumberCasual = []
const messageEL = document.querySelector("#message")
for (let i = 0; i < 5; i++) {
    let number = Math.floor((Math.random() * 10) + 1)
    NumberCasual.push(number)
    listEl.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
}
console.log(NumberCasual);

countdownEl.innerHTML = (timer)
const timerEl = setInterval(function () {
    timer -= 1
    /*  console.log(timer); */
    countdownEl.innerHTML = (timer)
    if (timer === 0) {
        clearInterval(timerEl)
        answersForm.classList.remove("d-none")
        listEl.classList.add("d-none")
    }
}, 1000)
let userChoise = [];
let counter
const numbFind = []
answersForm.addEventListener("submit", function (event) {
    event.preventDefault();

    userChoise = []; // Resetta l'array
    counter = 0
    formControl.forEach(input => {
        userChoise.push(Number(input.value))
    });
    console.log("Scelta dell utenteeee");
    console.log(userChoise); // Stampa l'array nella console
    for (let i = 0; i < 5; i++) {
        console.log("ciclo " + i);

        let indexOfArray = NumberCasual.indexOf(userChoise[i])
        if (indexOfArray >= 0) {
            counter += 1
            numbFind.push(userChoise[i])
            NumberCasual.splice(indexOfArray, 1)
            console.log(indexOfArray);
            console.log(NumberCasual);
        }

    }

    console.log(counter);
    messageEL.innerHTML = (`hai trovato: ${counter} i numeri sono: ${numbFind}`)
});

// contronatre i dati di NumberCasual con userChoise


