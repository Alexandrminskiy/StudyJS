const generationCatCard = (cat) => 
  `<div data-card_id=${cat.id} class="card mx-2" style="width: 18rem;">
  <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
  <div class="card-body">
    <h5 class="card-title">${cat.name}</h5>
    <p class="card-text">Возраст: ${cat.age}</p>
    <p class="card-text">Рейтинг ${cat.rate}</p>
    <p class="card-text">Любичик: ${cat.favorite}</p>
    
    <button data-action="show" class="btn btn-primary btn-sm">Показать</button>
    <button data-action="delete" class="btn btn-danger btn-sm">Удалить</button>
    <button data-action="edit" class="btn btn-success btn-sm">Изменить</button>
    </div>
  </div>`;
