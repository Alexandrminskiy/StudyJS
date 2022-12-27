// Сохранение набратого текста в локалстородж

// данные из хранилища
const dataFromStorage = localStorage.getItem(document.forms.exForm.name)
// парсинг из хранилища
const parseDataFromStorage = dataFromStorage ? JSON.parse(dataFromStorage) : null; // смотрим есть ли че в датесторидж, если нет суем нул

// если есть хоть какой то ключ с данными в хранилище то мы действуем дальше
if (parseDataFromStorage) {
    Object.keys(parseDataFromStorage).forEach(key => {
        document.forms.exForm[key].value = parseDataFromStorage[key]
    })
}


document.forms.exForm.addEventListener('input', () => {
    // console.log(1)
    const fromData = Object.fromEntries(new FormData(document.forms.exForm).entries())
    localStorage.setItem(document.forms.exForm.name, JSON.stringify(fromData))
})

document.querySelector('#btn').addEventListener('click', (event)=>{
    event.preventDefault() // удаляет из хранилища но не из формы
    localStorage.clear();
})

// const $inputFirst = document.forms.exForm.input1;
// const valueFromStorage = localStorage.getItem($inputFirst);
// $inputFirst.value = valueFromStorage ?? ""; // тернарное выражение
// $inputFirst.addEventListener('input', (event) => {
//     console.log(event.target.value);
//     localStorage.setItem(event.target.name, event.target.value)
// })