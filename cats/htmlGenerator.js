const gerenationCatCard = (cat) => {
  return `<div data-card_id=${cat.id} class="card mx-2" style="width: 18rem;">
  <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
  <div class="card-body">
    <h5 class="card-title">${cat.name}</h5>
    <p class="card-text">Возраст: ${cat.age}</p>
    <p class="card-text">Рейтинг ${cat.rate}</p>
    <p class="card-text">Любичик: ${cat.favorite}</p>
    <div class='d-flex justify-content-around'>
    <button data-action="show" class="btn btn-primary btn-sm">Показать</button>
    <button data-action="delete" class="btn btn-danger btn-sm">Удалить</button>
    <button data-action="edit" class="btn btn-success btn-sm">Изменить</button>
    </div>
  </div>
</div>`}

{/* <p class="card-text">${cat.description}</p> */ }

// const showModalCat = (cat) => `<div  data-card-show>
// <img src="${cat.image}" class="img_card_show" alt="${cat.name}">
//     <div class="card__info"> 
//       <h3 class="card-title mt-2">${cat.name} ${cat.age} лет</h3>
//       <p class="card-text text-center p-3">${cat.description}</p>
//       <button data-action-add class="btn btn-success btn-success-edit"">Edit</button>
//     </div> 
// </div>`;