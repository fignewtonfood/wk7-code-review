describe('Pizza', function() {
    it('creates a new pizza with the given specifications', function() {
        var testPizza = new Pizza(1, 0, "S", 1, 1, 1, 1, 1, 1, 1, 1);
        expect(testPizza.quantity).to.equal(1);
        expect(testPizza.price).to.equal(0);
        expect(testPizza.pizzaSize).to.equal("S");
        expect(testPizza.bacon).to.equal(1);
        expect(testPizza.greenPepper).to.equal(1);
        expect(testPizza.mushroom).to.equal(1);
        expect(testPizza.olive).to.equal(1);
        expect(testPizza.onion).to.equal(1);
        expect(testPizza.pepperoni).to.equal(1);
        expect(testPizza.sausage).to.equal(1);
        expect(testPizza.tomato).to.equal(1);
    });

    it('adds the finalCost method to all pizzas', function() {
        var testPizza = new Pizza(2, 3, "M", 1, 1, 1, 1, 1, 1, 1, 1);
        expect(testPizza.finalCost()).to.equal("You ordered 2 of our delicious M pizza(s), at a cost of $3 each, for a total of $6  Thanks!");
    });

    it('adds the summary method to all pizzas', function() {
        var testPizza = new Pizza(2, 3, "M", 1, 1, 1, 1, 1, 1, 1, 1);
        expect(testPizza.summary()).to.equal('You have ordered a pizza with the following toppings: <ul><li>bacon</li><li>green peppers</li><li>mushrooms</li><li>olives</li><li>onions</li><li>pepperoni</li><li>sausage</li><li>tomatoes</li></ul>');
    });

    it('adds the toppingCost method to all pizzas', function() {
        var testPizza = new Pizza(2, 3, "M", 1, 1, 1, 1, 1, 1, 1, 1);
        expect(testPizza.toppingCost()).to.equal(2);
    });
});
