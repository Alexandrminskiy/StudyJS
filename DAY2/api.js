class Api {
    constructor(name) {
        this.url = 'https://cats.petiteweb.dev/api/single/';
        this.name = name;
    }


    getCats() {
        return fetch(`${this.url}${this.name}/show`)
    }
    getCat(id) {
        return fetch(`${this.url}${this.name}/show/${id}`)
    }
    getCatsIds() {
        return fetch(`${this.url}${this.name}/show`)
    }

    addCat(bodyOfCat){
        fetch(`${this.url}${this.name}/add`, {
        method: 'POST',
        headers: {
            'Accept': 'app;ication/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyOfCat)
    });
    }

    updCat(changeiPartsOfCat, id){
        return fetch(`${this.url}${this.name}/update/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'app;ication/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changeiPartsOfCat)
    });
    }
    delCat(id){
        return fetch(`${this.url}${this.name}/update/${id}`, {
            method: 'DELETE'
        });
    }



   


}

