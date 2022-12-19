class Api {
    constructor(name) {
        this.url = 'https://cats.petiteweb.dev/api/single';
        this.name = name;
    }


    getCats() {
        return fetch(`${this.url}${this.name}/show`)
    }
    getCat()
    getCatsIds()


    addCat()
    updCat()
    delCat()






}

// https://sberbank-school.ru/programs/18135/item/947813
// 1.50