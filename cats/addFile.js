$addButton.addEventListener('click', () => {
  $modal.classList.remove('hidden');
})
$closeButton.addEventListener('click', () => {
  $modal.classList.add('hidden')
})

// Закрытие окна о кошке
$closeButtonShow.addEventListener('click', () => {
  $modalShow.classList.add('hidden')
});





document.forms.catsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  $errorMessage.innerHTML = '';

  const data = Object.fromEntries(new FormData(event.target).entries());

  data.age = Number(data.age)
  data.id = Number(data.id)
  data.rate = Number(data.rate)
  data.favorite = data.favorite === 'on'

  api.addCat(data)
    .then(res => {
      return res.ok ? reGenData() : res.json()
    })
    .then(errMsg => {
      return $errorMessage.innerHTML = errMsg?.message
    })
})

const reGenData = async () => {
  const responce = await api.getCats();
  const newCats = await responce.json();

  $wrapper.childNodes.forEach(elment => elment.remove());

  newCats.forEach(cat => {
    $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat));
  });
  return $modal.classList.add('hidden')
}
