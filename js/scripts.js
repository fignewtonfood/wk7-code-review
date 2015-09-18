function Pizza(quantity, price, toppings){
    this.quantity = quantity;
    this.price = price;
    this.toppings = [];
}

Pizza.prototype.finalCost = function() {
    return "You ordered " + this.quantity + " pizza(s), at a cost of $" + this.price + " each, for a total of $" + (this.quantity*this.price) + "  Thanks!"
}

function Toppings(bacon, greenPepper, mushroom, olive, onion, pepperoni, sausage, tomato) {
    this.bacon = bacon;
    this.greenPepper = greenPepper;
    this.mushroom = mushroom;
    this.olive = olive;
    this.onion = onion;
    this.pepperoni = pepperoni;
    this.sausage = sausage;
    this.tomato = tomato;
}

//jQuery
$(document).ready(function(){

});
