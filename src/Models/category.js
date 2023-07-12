export class category {
    id;
    name;
    logo;
    constructor(id, name, logo) {
        this.id = id;
        this.name = name;
        this.logo = logo;
    }
    get() {
        return {
            'id': this.id,
            'name': this.name,
            'logo': this.logo
        }
    }
}
