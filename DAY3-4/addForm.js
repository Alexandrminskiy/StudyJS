$addButton.addEventListener('click', () => {
    $modal.classList.remove('hidden');
})

$closeButton.addEventListener('click', () => {
    $modal.classList.add('hidden');
})

document.forms.catsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target).entries());

    data.age = Number(data.age)
    data.id = Number(data.id)
    data.rate = Number(data.rate)
    data.favorite = data.favorite === 'on' // undefined, off, on

    api.addCat(data)
        .then(res => {
            return res.ok ? reGenData : res.json()
        })
        .then(errMsg => console.log(errMsg))
})

const reGenData = async () => {
    const responce = await api.getCats();
    const newCats = await responce.json();

    // console.log($wrapper.children)

    $wrapper.childNodes.forEach(elment => elment.remove())

    newCats.forEach(cat => {
        $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat));
    });

    return $modal.classList.add('hidden')
}
    // Запрашиваем новых котов
    // Удаляем старых котов
    // генирируем и вставляем в div этих новых котов