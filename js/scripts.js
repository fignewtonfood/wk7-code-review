function Pizza(quantity, price, pizzaSize, bacon, greenPepper, mushroom, olive, onion, pepperoni, sausage, tomato){
    this.quantity = quantity;
    this.price = price;
    this.pizzaSize = pizzaSize;
    this.bacon = bacon;
    this.greenPepper = greenPepper;
    this.mushroom = mushroom;
    this.olive = olive;
    this.onion = onion;
    this.pepperoni = pepperoni;
    this.sausage = sausage;
    this.tomato = tomato;
}

Pizza.prototype.finalCost = function() {
    return "You ordered " + this.quantity + " of our delicious " + this.pizzaSize + " pizza(s), at a cost of $" + this.price.toFixed(2) + " each, for a total of $" + (this.quantity*this.price).toFixed(2) + "  Thanks!"
}

Pizza.prototype.pizzaSummary = function () {
    var myPizzaSummary = "";
    if (this.bacon == 2) {
        myPizzaSummary += "<li>double bacon</li>";
    } else if (this.bacon == 1) {
        myPizzaSummary += "<li>bacon</li>";
    }
    if (this.greenPepper == 2) {
        myPizzaSummary += "<li>double green peppers</li>";
    } else if (this.greenPepper == 1) {
        myPizzaSummary += "<li>green peppers</li>";
    }
    if (this.mushroom == 2) {
        myPizzaSummary += "<li>double mushrooms</li>";
    } else if (this.mushroom == 1) {
        myPizzaSummary += "<li>mushrooms</li>";
    }
    if (this.olive == 2) {
        myPizzaSummary += "<li>double olives</li>";
    } else if (this.olive == 1) {
        myPizzaSummary += "<li>olives</li>";
    }
    if (this.onion == 2) {
        myPizzaSummary += "<li>double onions</li>";
    } else if (this.onion == 1) {
        myPizzaSummary += "<li>onions</li>";
    }
    if (this.pepperoni == 2) {
        myPizzaSummary += "<li>double pepperoni</li>";
    } else if (this.pepperoni == 1) {
        myPizzaSummary += "<li>pepperoni</li>";
    }
    if (this.sausage == 2) {
        myPizzaSummary += "<li>double sausage</li>";
    } else if (this.sausage == 1) {
        myPizzaSummary += "<li>sausage</li>";
    }
    if (this.tomato == 2) {
        myPizzaSummary += "<li>double tomatoes</li>";
    } else if (this.tomato == 1) {
        myPizzaSummary += "<li>tomatoes</li>";
    }
    myPizzaSummary += ""
    return myPizzaSummary;
}

var individualToppingCost = 0;

Pizza.prototype.pizzaCost = function () {

    individualToppingCost = (parseFloat(this.bacon)+parseFloat(this.greenPepper)+parseFloat(this.mushroom)+parseFloat(this.olive)+parseFloat(this.onion)+parseFloat(this.pepperoni)+parseFloat(this.sausage)+parseFloat(this.tomato))/4;
    if (this.pizzaSize == "SMALL") {
        individualToppingCost += 5;
    } else if (this.pizzaSize == "MEDIUM") {
        individualToppingCost += 7;
    } else if (this.pizzaSize == "LARGE") {
        individualToppingCost += 9;
    } else {
        individualToppingCost += 11;
    }
    return individualToppingCost;
}

function resetPizza() {
    $("input").val("");
}

//jQuery
$(document).ready(function(){
    $("form#new-pizzas").submit(function(event){
        event.preventDefault();
        var inputtedQuantity = $("input#quantity").val();
        var inputtedPrice = individualToppingCost;
        var inputtedPizzaSize = $("input.pizzaSize:checked").val();
        var inputtedBacon = $("input.baconTopping:checked").val();
        var inputtedGreenPepper = $("input.greenPepperTopping:checked").val();
        var inputtedMushroom = $("input.mushroomTopping:checked").val();
        var inputtedOlive = $("input.oliveTopping:checked").val();
        var inputtedOnion = $("input.onionTopping:checked").val();
        var inputtedPepperoni = $("input.pepperoniTopping:checked").val();
        var inputtedSausage = $("input.sausageTopping:checked").val();
        var inputtedTomato = $("input.tomatoTopping:checked").val();

        var newPizza = new Pizza(inputtedQuantity, inputtedPrice, inputtedPizzaSize, inputtedBacon, inputtedGreenPepper, inputtedMushroom, inputtedOlive, inputtedOnion, inputtedPepperoni, inputtedSausage, inputtedTomato);

        newPizza.pizzaCost();
        newPizza.price = individualToppingCost;

        $("#show-order").show();

        $("ul#order").append("<li class='nobullet emphatic'>" + newPizza.finalCost() + "</li>");
        $("ul#order").append("<li class='nobullet'> Your pizza has the following toppings:</li>");
        $("ul#order").append(newPizza.pizzaSummary());

        $(".pizza").last().click(function(){
        });
    });
});
