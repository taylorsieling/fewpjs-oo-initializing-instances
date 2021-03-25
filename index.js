class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}

let brunch = new Breakfast("Eggs Benedict", "Mimosa")
let classic = new Lunch("House Salad", "French Onion Soup", "Iced Tea")
let fancy = new Dinner("Caesar", "Tomato Basil", "Eggplan Paremsean", "Cheesecake")
