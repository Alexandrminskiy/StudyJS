document.forms.exForm.addEventListener('input', (event) => {
    // console.log(1)
    const fromData = Object.fromEntries(new FormData(document.forms.exForm).entries())
    console.log(fromData)
    localStorage.setItem(document.forms.exForm.name, JSON.stringify(fromData))
})


// const $inputFirst = document.forms.exForm.input1;
// const valueFromStorage = localStorage.getItem($inputFirst);
// $inputFirst.value = valueFromStorage ?? ""; // тернарное выражение
// $inputFirst.addEventListener('input', (event) => {
//     console.log(event.target.value);
//     localStorage.setItem(event.target.name, event.target.value)
// })