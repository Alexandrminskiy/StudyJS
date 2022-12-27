// Карточка из бустрапа
const gerenationCatCard = (cat) => {
    return `<div data-card_id=${cat.id} class="card mx-2" style="width: 18rem;">
    <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
    <div class="card-body">
      <h5 class="card-title">${cat.name}</h5>
       <p class="card-text">${cat.description}</p>
       <button data-action='show' class="btn btn-primary">Показать</button>
       <button data-action='delete' class="btn btn-danger">Удалить</button>
       <button data-action='edit' class="btn btn-success">Изменить</button>
     </div>
    </div>
  </div>`}

api.getCats()
    .then((responce) => {
        return responce.json()
    })
    .then((data) => {
        setTimeout(() => {
            $spinner.classList.add('hidden')
            data.forEach(cat => {
                $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
            });
        }, 500);

    });

$wrapper.addEventListener('click', (event) => {
    switch (event.target.dataset.action) {
        case 'delete':
            const $currentCard = event.target.closest('[data-card_id]');
            const catId = $currentCard.dataset.card_id;
            api.delCat(catId);
            $currentCard.remove()
            break;

        case 'show':
            //по нажатию должна открыватся модалка, подробная информация
            break;

        case 'edit':
            console.log(event.target);
            // найти id
            // Запрос к api.getOneCat(id)
            // Открываеия форма с модалкой
            // set data в поляформы
            break;
        default:
            break;
    }
})

// addForm.js
// $closeButton.addEventListener('click', () => {
//     $modal.classList.add('hidden');
// })

// addForm.js
// document.forms.catsForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const data = Object.fromEntries(new FormData(event.target).entries());

//     data.age = Number(data.age)
//     data.id = Number(data.id)
//     data.rate = Number(data.rate)
//     data.favorite = data.favorite === 'on' // undefined, off, on

//     console.log(data)

//     api.addCat(data)
//         .then(res => {
//             return res.ok ? $modal.classList.add('hidden') : res.json()
//         })
//         .then(errMsg => console.log(errMsg))
// })

// const reEddingCats = async () => {
//     return $modal.classList.add('hidden')
// }

// addForm.js
// $addButton.addEventListener('click', () => {
//     $modal.classList.remove('hidden');
// })

// const realGetCatAsyncAwait = async () => {
//     const responce = await api.getCats();
//     const cats = await responce.json();

//     cats.forEach(cat => {
//         $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
//     });
// }

// realGetCatAsyncAwait()



    // по добавлениякота через форму, делать новый запрос на бек и обновлять список котов
    // добавить форму редактирования
    // сделать закрытие модалок по клику на крестик или на пространство воокруг
    // чистить форму если человек ее закрыл сам