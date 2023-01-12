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
        document.querySelector(".cat_age").innerHTML = `Возраст:  ${data.age}`;
        document.querySelector(".cat_description").innerHTML = `<div class='description_cat'>${data.description}</div>`;
      };
      aboutCat(catIdAbout);
      break;
    case "edit":
      $modalEdit.classList.remove("hidden");
      const $currentCardEdit = event.target.closest("[data-card_id]");
      const catIdEdit = $currentCardEdit.dataset.card_id;

      const editCat = async (catIdEdit) => {
        const response = await api.getCat(catIdEdit);
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          document.forms.updateForm[key].value = data[key];
        });
        document.querySelector("[data-cat_id]").value = `${data.id}`;
        document.querySelector("[data-cat_age]").value = `${data.age}`;
      };
      editCat(catIdEdit);
      break;
    default:
      break;
  }
});



// LocalStorage
const dataFromStorage = localStorage.getItem(document.forms.catsForm.name);

const parsedDataFromStorage = dataFromStorage
  ? JSON.parse(dataFromStorage)
  : null;

if (parsedDataFromStorage) {
  Object.keys(parsedDataFromStorage).forEach((key) => {
    document.forms.catsForm[key].value = parsedDataFromStorage[key];
  });
}

document.forms.catsForm.addEventListener("input", () => {
  const formData = Object.fromEntries(
    new FormData(document.forms.catsForm).entries()
  );
  localStorage.setItem(document.forms.catsForm.name, JSON.stringify(formData));
});

//TODO: добавить форму редактирования
//TODO: сделать закрытие модалок по клику на крестик или на пространство вокруг
//TODO: чистить формы если человек закрыл их сам
//TODO: спрашивать перед удалением "Вы уверены?"
//TODO: заюзать LocalStorage


