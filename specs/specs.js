describe("Pizza", function() {
    it("will return properties of pizza", function(){
        var pepperoni = new Topping("pepperoni", .50);
        var onion = new Topping("onion", .50);
        var green_pepper = new Topping("green pepper", .50);
        var testPizza = new Pizza("Large", 2, [pepperoni, onion, green_pepper]);
        expect(testPizza.size).to.equal("Large");
        expect(testPizza.number).to.equal(2);
        expect(testPizza.toppings).to.eql([pepperoni, onion, green_pepper]);
    });

    it("tests to make sure that you can add a topping to a pizza", function(){
        var testPizza = new Pizza("Large", 1, []);
        var testTopping = new Topping("Onion", .50);
        testPizza.addTopping(testTopping)
        expect(testTopping).to.equal(testPizza.toppings[0]);
    });

    it("test to make sure that you can add multiple toppings at once", function(){
        var testPizza = new Pizza("Large", 1, []);
        var testTopping = new Topping("Onion", .50);
        var testTopping2 = new Topping("Pepperoni", .50);
        testPizza.addTopping(testTopping, testTopping2);
        expect([testTopping, testTopping2]).to.eql(testPizza.toppings);
    });

    it("find cost of pizza based on toppings added", function() {
        var testPizza = new Pizza("Large", 1, []);
        var testTopping = new Topping("Onion", .50);
        var testTopping2 = new Topping("Pepperoni", .50);
        testPizza.addTopping(testTopping, testTopping2);
        expect(testPizza.getPrice()).to.equal(11.99);
    })
});

describe("Topping", function() {
    it("will return properties of topping", function() {
        var testTopping = new Topping("Pepperoni", .50);
        expect(testTopping.name).to.equal("Pepperoni");
        expect(testTopping.price).to.equal(.50);
    });
});
