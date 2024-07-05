export default class Dog {
    bred_for: string;
    breed_group: string;
    height: Metrics;
    id: number;
    life_span: string;
    name: string;
    origin: string;
    reference_image_id: string;
    temperament: string;
    imageURL: string;
    constructor() {
        this.bred_for = '';
        this.breed_group = '';
        this.height = new Metrics();
        this.id = 0;
        this.life_span = '';
        this.name = '';
        this.origin = '';
        this.reference_image_id = '';
        this.temperament = '';
        this.imageURL = '';
    }
}

class Metrics {
    imperial: string;
    metric: string;
    constructor() {
        this.imperial = "";
        this.metric = "";
    }
}