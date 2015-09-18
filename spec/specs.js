describe('Pizza', function() {
    it('creates a new pizza with the given specifications', function() {
        var testPizza = new Pizza(1, 0, "S");
        expect(testPizza.quantity).to.equal(1);
        expect(testPizza.price).to.equal(0);
        expect(testPizza.pizzaSize).to.equal("S");
        expect(testPizza.pizzaToppings).to.eql([]);
    });

    it('adds the finalCost method to all pizzas', function() {
        var testPizza = new Pizza(2, 3, "M");
        expect(testPizza.finalCost()).to.equal("You ordered 2 of our delicious M pizza(s), at a cost of $3 each, for a total of $6  Thanks!");
    });
});

describe('Topping', function() {
    it('creates a new set of toppings with the given specifications', function() {
        var testToppings = new Toppings(1, 1, 1, 1, 1, 1, 1, 1);
        expect(testToppings.bacon).to.equal(1);
        expect(testToppings.greenPepper).to.equal(1);
        expect(testToppings.mushroom).to.equal(1);
        expect(testToppings.olive).to.equal(1);
        expect(testToppings.onion).to.equal(1);
        expect(testToppings.pepperoni).to.equal(1);
        expect(testToppings.sausage).to.equal(1);
        expect(testToppings.tomato).to.equal(1);
    });

    it('adds the summary method to all toppings', function() {
        var testToppings = new Toppings(1, 1, 1, 1, 1, 1, 1, 1);
        expect(testToppings.summary()).to.equal('You have ordered a pizza with the following toppings: <ul><li>bacon</li><li>green peppers</li><li>mushrooms</li><li>olives</li><li>onions</li><li>pepperoni</li><li>sausage</li><li>tomatoes</li></ul>');
    });

    it('adds the topingCost method to all toppings', function() {
        var testToppings = new Toppings(1, 1, 1, 1, 1, 1, 1, 1);
        expect(testToppings.toppingCost()).to.equal(2);
    });
});
