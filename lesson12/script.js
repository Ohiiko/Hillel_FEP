"use strict"

function Hamburger(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
}

Hamburger.prototype.addTopping = function(topping) {
    if (!this._toppings.includes(topping)) {
        return this._toppings.push(topping);
    };
}

Hamburger.prototype.getToppings = function() {
    return this._toppings;
}

Hamburger.prototype.calculatePrice = function() {
    let priceArr = this._toppings.map(i => Hamburger.TOPPINGS[i].price);
    priceArr.push(Hamburger.SIZES[this._size].price, Hamburger.STUFFINGS[this._stuffing].price);
    priceArr = priceArr.reduce((acc, prices) => acc + prices, 0);
    return priceArr;
}

Hamburger.prototype.calculateCalories = function() {
    let caloriesArr = this._toppings.map(i => Hamburger.TOPPINGS[i].calories);
    caloriesArr.push(Hamburger.SIZES[this._size].calories, Hamburger.STUFFINGS[this._stuffing].calories);
    caloriesArr = caloriesArr.reduce((acc, itemcalories) => acc + itemcalories, 0);
    return caloriesArr;
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_POTATOES = "STUFFING_POTATOES";
Hamburger.TOPPING_MAYO = 'TOPPING_MAYO';
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 50,
        calories: 20,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 100,
        calories: 40,
    },
};

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 20,
        calories: 10,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_POTATOES]: {
        price: 15,
        calories: 10,
    },
};

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_MAYO]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 0,
    },
};

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: " + hamburger.calculateCalories());
// сколько стоит
console.log("Price: " + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
console.log("Price with sauce: " + hamburger.calculatePrice());

