describe('Pizza', function() {
    it('creates a new pizza with the given specifications', function() {
        var testPizza = new Pizza(1, 0);
        expect(testPizza.quantity).to.equal(1);
        expect(testPizza.price).to.equal(0);
        expect(testPizza.toppings).to.eql([]);
    });

    it('adds the finalCost method to all pizzas', function() {
        var testPizza = new Pizza(2, 3);
        expect(testPizza.finalCost()).to.equal("You ordered 2 pizza(s), at a cost of $3 each, for a total of $6  Thanks!");
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
});
