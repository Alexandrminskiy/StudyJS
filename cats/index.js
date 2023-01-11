api.getCats()
  .then((responce) => {
    return responce.json()
  })
  .then((data) => {
      data.forEach(cat => {
        $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
      });

  });

$wrapper.addEventListener('click', (event) => {
  switch (event.target.dataset.action) {
    case 'delete':
      const $currentCard = event.target.closest("[data-card_id]");
      const catId = $currentCard.dataset.card_id;
      api.delCat(catId);
      $currentCard.remove()
      break;

    case 'show':
      $modalShow.classList.remove("hidden");
      const $currentCardAbout = event.target.closest("[data-card_id]");
      const catIdAbout = $currentCardAbout.dataset.card_id;
      const aboutCat = async (catIdAbout) => {
        const response = await api.getCat(catIdAbout);
        const data = await response.json();
        document.querySelector(".cat_name").innerHTML = `${data.name}`;
        document.querySelector(".cat_description").innerHTML = `${data.description}`;
      };
      aboutCat(catIdAbout);
      break;
      break;

    case 'edit':
      console.log(event.target);
      // найти id
      // запрос к api.getOneCat(id)
      // открываться модалка с формой редактирования
      // set data в поля формы
      break;
    default:
      break;
  }
})

console.log($closeButton)


//TODO: добавить форму редактирования
//TODO: сделать закрытие модалок по клику на крестик или на пространство вокруг
//TODO: чистить формы если человек закрыл их сам
//TODO: спрашивать перед удалением "Вы уверены?"
//TODO: заюзать LocalStorage


