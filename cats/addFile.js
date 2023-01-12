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








document.forms.updateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  data.age = Number(data.age);
  data.rate = Number(data.rate);
  data.favorite = data.favorite === "on";
  
  const catIdUpdate = document.querySelector("[data-cat_id]").value;
  const updateCat = async (data, catIdUpdate) => {
    const response = await api.updCat(data, catIdUpdate);
    const cat = await response.json();
    gettingCats();
    return $modalEdit.classList.add("hidden");
  };
  updateCat(data, catIdUpdate);
});

$addButton.addEventListener("click", () => {
  $modal.classList.remove("hidden");
});

const gettingCats = async () => {
  const response = await api.getCats();
  const data = await response.json();
  $wrapper.replaceChildren();
  data.forEach((cat) => {
    $wrapper.insertAdjacentHTML("beforeend", generationCatCard(cat));
  });
  $errorMessage.innerHTML = "";
  return $modal.classList.add("hidden");
};
gettingCats();

document.forms.catsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  data.age = Number(data.age);
  data.id = Number(data.id);
  data.rate = Number(data.rate);
  data.favorite = data.favorite === "on";

  const addingCat = async (data) => {
    const response = await api.addCat(data);
    const errorMsg = await response.json();
    if (response.ok) {
      gettingCats();
    } else {
      $errorMessage.innerHTML = errorMsg.message;
    }
  };
  addingCat(data);
});
