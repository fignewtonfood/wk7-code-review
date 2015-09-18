function Pizza(quantity, price, pizzaSize, pizzaToppings){
    this.quantity = quantity;
    this.price = price;
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = [];
}

Pizza.prototype.finalCost = function() {
    return "You ordered " + this.quantity + " of our delicious " + this.pizzaSize + " pizza(s), at a cost of $" + this.price + " each, for a total of $" + (this.quantity*this.price) + "  Thanks!"
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

Toppings.prototype.summary = function () {
    var myPizzaSummary = "You have ordered a pizza with the following toppings: <ul>";
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
    myPizzaSummary += "</ul>"
    return myPizzaSummary;
}

var individualToppingCost;
Toppings.prototype.toppingCost = function () {
    var individualToppingCost = (this.bacon+this.greenPepper+this.mushroom+this.olive+this.onion+this.pepperoni+this.sausage+this.tomato)*(0.25)
    $this.price = individualToppingCost;
    return individualToppingCost;
}

function resetPizza() {
    $("input").val("");
}

//jQuery
$(document).ready(function(){
    // $("#addPizza").click(function(){
    //     $(".new-pizza").clone().last().appendTo('.new-pizza')
    //     // $resetPizza();
    // });

    $("form#new-pizzas").submit(function(event){
        event.preventDefault();
        var inputtedQuantity = $("input#quantity").val();
        var inputtedPrice = 0;
        var inputtedPizzaSize = $("input.pizzaSize").val();
        var newPizza = new Pizza(inputtedQuantity, inputtedPrice, inputtedPizzaSize);

        $(".new-toppings").each(function(){
            var inputtedBacon = $(this).find("input.baconTopping").val();
            var inputtedGreenPepper = $(this).find("input.greenPepperTopping").val();
            var inputtedMushroom = $(this).find("input.mushroomTopping").val();
            var inputtedOlive = $(this).find("input.oliveTopping").val();
            var inputtedOnion = $(this).find("input.onionTopping").val();
            var inputtedPepperoni = $(this).find("input.pepperoniTopping").val();
            var inputtedSausage = $(this).find("input.sausageTopping").val();
            var inputtedTomato = $(this).find("input.tomatoTopping").val();

            var newToppings = new Toppings(inputtedBacon, inputtedGreenPepper, inputtedMushroom, inputtedOlive, inputtedOnion, inputtedPepperoni, inputtedSausage, inputtedTomato);
            newPizza.pizzaToppings.push(newToppings);
        });

        newToppings.toppingCost();
        $newPizza.inputtedPrice = individualToppingCost;

        $("ul#order").append("<li><span class='pizza'>" + newPizza.finalCost() + "</span></li>");

        $(".pizza").last().click(function(){

        });
    });



    $("#choose-size").click(function(){
        $("#show-toppings").show();
    });

    $("#next").click(function(){
        event.preventDefault();
        $(".show-quantity").show();
    })
});
