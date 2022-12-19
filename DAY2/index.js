// api.getcats('alexandrminskiy')
const getCats = async () => {
    const responce = await fetch('https://cats.petiteweb.dev/api/single/alexandrminskiy/show', {
        method: 'GET',
    });
    const data = await responce.json();

    console.log(data)
}
// getCats()

const newCat = {
    id: 111,
    name: "барон",
    image: "https://telegrator.ru/wp-content/uploads/2021/05/chat_avatar-136.jpg",
    age: 2,
    rate: 8,
    favorite: false,
    description: "Милый кот"
}

const addCat = async () => {
    const responce = await fetch('https://cats.petiteweb.dev/api/single/alexandrminskiy/add', {
        method: 'POST',
        headers: {
            'Accept': 'app;ication/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCat)
    });
    const data = await responce.json();
    console.log(data)
}

// addCat()

const changeidObj = { id: 7 }
// PUT
const changeCat = async () => {
    const responce = await fetch('https://cats.petiteweb.dev/api/single/alexandrminskiy/update/11', {
        method: 'PUT',
        headers: {
            'Accept': 'app;ication/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changeidObj)
    });
    const data = await responce.json();
    console.log(data)
}

const api = new Api('alexandrminskiy');
// console.log(api.getCats());

// Промисы
// api.getCats()
//     .then(res => res.json())
//     .then(data => console.log(data))

// Асинки
const getting = async () => {
    const res = await api.getCats();
    const data = await res.json()

    console.log(data);
}
getting()

const adding = async (body) => {
    const res = await api.addCat(body);
    const data = res.json();

    console.log(data);
}
// adding(newCat)
configured
const deleting = async (id) => {
    const res = await api.delCat(id);
    const data = res.json();
    // console.log(data);
}
deleting(111)