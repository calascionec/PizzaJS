function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

function Topping(name, price) {
    this.name = name;
    this.price = price;
}

Pizza.prototype.addTopping = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i <args.length; i++){
        this.toppings.push(args[i]);
    }
};

Pizza.prototype.getPrice = function() {
    var price = 0;
    if (this.size === "Small"){
        price+= 5.99;
    } else if (this.size === "Medium"){
        price+= 8.99;
    } else if (this.size === "Large"){
        price+= 10.99;
    }
    for( var i = 0; i < this.toppings.length; i++) {
        price += this.toppings[i].price;
    }
    return price;
}
var sizeForm =           "<select id= 'pizza-size' >"+
                        "<option value='Small'>" + "Small" + "</option>"+
                        "<option value='Medium'>"+"Medium"+"</option>"+
                        "<option value='Large'>"+"Large"+"</option>"+
                        "</select>" +"<button id='pizza'>"+"Next"+"</button>";
var size;
var newPizza;
$(document).ready(function() {

    $("button#start-order").click(function(){
        $("button#start-order").hide();
        $(".form-area").append(sizeForm);

        $("button#pizza").click(function(){
            size = $("#pizza-size option:selected").text();
            newPizza = new Pizza(size, []);

        });
    });


});
