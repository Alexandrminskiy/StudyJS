const $wrapper = document.querySelector('[data-wrapper]');
const $addButton = document.querySelector('[data-add_button]');
const $modal = document.querySelector('[data-modal]');
const $spinner = document.querySelector('[data-spinner]')

const api = new Api('alexandrminskiy')

// Карточка из бустрапа
const gerenationCatCard = (cat) => `<div data-card_id=${cat.id} class="card mx-2" style="width: 18rem;">
<img src="${cat.image}" class="card-img-top" alt="${cat.name}">
<div class="card-body">
  <h5 class="card-title">${cat.name}</h5>
  <p class="card-text">${cat.description}</p>
  <button data-action='show' class="btn btn-primary">Показать</button>
  <button data-action='delete' class="btn btn-danger">Удалить</button>
  <button data-action='edit' class="btn btn-success">Редактировать</button>
</div>
</div>`

$wrapper.addEventListener('click', (event) => {
    // console.log(event.target.dataset);
    switch (event.target.dataset.action) {
        case 'delete':
            const $currentCard = event.target.closest('[data-card_id]');
            const catId = $currentCard.dataset.card_id;
            console.log(catId);
            api.delCat(catId);
            $currentCard.remove()
            break;

        case 'show':
            //по нажатию должна открыватся модалка, подробная информация
            break;

            case 'edit':
            console.log(event.target);
            break;
        default:
            break;
    }
})

document.forms.catsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target).entries());

    data.age = Number(data.age)
    data.id = Number(data.id)
    data.rate = Number(data.rate)
    data.favorite = data.favorite === 'on' // undefined, off, on

    console.log(data)

    api.addCat(data).then(res => res.ok && $modal.classList.add('hidden'))
    //catch
    // $modal.classList.add('hidden')
})

$addButton.addEventListener('click', () => {
    $modal.classList.remove('hidden');
})

api.getCats()
    .then((responce) => {
        return responce.json()
    })
    .then((data) => {
        setTimeout(() => {
            $spinner.classList.add('hidden')
            data.forEach(cat => {
                $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
            })
        }, 500);

    });


