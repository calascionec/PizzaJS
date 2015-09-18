describe("Pizza", function() {
    it("will return properties of pizza", function(){
        var pepperoni = new Topping("pepperoni", .50);
        var onion = new Topping("onion", .50);
        var green_pepper = new Topping("green pepper", .50);
        var testPizza = new Pizza("large", 10.99, [pepperoni, onion, green_pepper]);
        expect(testPizza.size).to.equal("large");
        expect(testPizza.price).to.equal(10.99);
        expect(testPizza.toppings).to.eql([pepperoni, onion, green_pepper]);
    });
});

describe("Topping", function() {
    it("will return properties of topping", function() {
        var testTopping = new Topping("Pepperoni", .50);
        expect(testTopping.name).to.equal("Pepperoni");
        expect(testTopping.price).to.equal(.50);
    });
});
