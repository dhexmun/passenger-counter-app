// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(count)
}

let saveEL = document.getElementById("save-el")
console.log(saveEL)

function save() {
    let entryCount = count + " - "
    saveEL.textContent += entryCount
    console.log(count)

    countEl.textContent = 0
    count = 0
}
