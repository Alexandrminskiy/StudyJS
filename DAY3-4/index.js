// Карточка из бустрапа
const gerenationCatCard = (cat) =>
    `<div data-card_id=${cat.id} class="card mx-2" style="width: 18rem;">
    <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
    <div class="card-body">
      <h5 class="card-title">${cat.name}</h5>
       <p class="card-text">${cat.description}</p>
       <button data-action='show' class="btn btn-primary btn-sm">Показать</button>
       <button data-action='delete' class="btn btn-danger btn-sm">Удалить</button>
       <button data-action='edit' class="btn btn-success btn-sm">Изменить</button>
     </div>
    </div>
  </div>`;

api.getCats()
    .then((responce) => {
        return responce.json()
    })
    .then((data) => {
        // setTimeout(() => {
        //     $spinner.classList.add('hidden')
        data.forEach(cat => {
            $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
            // });
        }, 500);

    });

$wrapper.addEventListener("click", (event) => {
    switch (event.target.dataset.action) {
        case "delete":
            const $currentCard = event.target.closest("[data-card_id]");
            const catId = $currentCard.dataset.card_id;
            api.delCat(catId);
            $currentCard.remove();
            break;

        case "about":
            $modalAbout.classList.remove("hidden");
            const $currentCardAbout = event.target.closest("[data-card_id]");
            const catIdAbout = $currentCardAbout.dataset.card_id;
            const aboutCat = async (catIdAbout) => {
                const response = await api.getCat(catIdAbout);
                const data = await response.json();
                document.querySelector(
                    ".cat-description"
                ).innerHTML = `${data.description}`;
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
            };
            editCat(catIdEdit);
            break;
        default:
            break;
    }
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
document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        $modal.classList.add("hidden");
        $modalAbout.classList.add("hidden");
        $modalEdit.classList.add("hidden");
        $form.reset();
    }
});
$modal.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-modal")) {
        $modal.classList.add("hidden");
        $form.reset();
    }
});

$modalAbout.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-modal")) {
        $modalAbout.classList.add("hidden");
    }
});
$modalEdit.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-modal")) {
        $modalEdit.classList.add("hidden");
        $form.reset();
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
