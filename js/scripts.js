function Pizza(quantity, price, pizzaSize, pizzaToppings){
    this.quantity = quantity;
    this.price = price;
    this.pizzaSize = pizzaSize;
    this.toppings = [];
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

function resetPizza() {
    $("input").val("");
}

//jQuery
$(document).ready(function(){
    $("#addPizza").click(function(){
        $(".new-pizza").clone().last().appendTo('.new-pizza')
        $resetPizza();
    });

    $("form#new-pizzas").submit(function(event){
        event.preventDefault();
        var inputtedQuantity = $("input#quantity").val();
        var inputtedPrice = 0;
        var inputtedPizzaSize = $("input#size").val();
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
    });

    $("#choose-size").click(function(){
        $("#show-toppings").show();
    });

    $("#next").click(function(){
        event.preventDefault();
        $(".show-quantity").show();
    })
});
