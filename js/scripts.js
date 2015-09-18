function Pizza(size, number, toppings) {
    this.size = size;
    this.number = number;
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
        price = 5.99;
    } else if (this.size === "Medium"){
        price = 8.99;
    } else if (this.size === "Large"){
        price = 10.99;
    }
    for( var i = 0; i < this.toppings.length; i++) {
        price += parseFloat((this.toppings[i].price));
    }
    return price;
}
var sizeForm ="<select id= 'pizza-size' >"+
                        "<option value='Small'>" + "Small" + "</option>"+
                        "<option value='Medium'>"+"Medium"+"</option>"+
                        "<option value='Large'>"+"Large"+"</option>"+
                        "</select>" +
                        "<label>"+"Number Of Pizzas"+
                        "<input type='number' id='quantity' min='1'></input>" +
                        "<button id='pizza'>"+"Next"+"</button>";

var toppingsCheckList = "<input type='checkbox' name='topping' value='.50'>" +
                        "<label>"+"Pepperoni" +"</label>" +
                        "<input type='checkbox' name='topping' value='.50'>" +
                        "<label>"+"Onion" +"</label>" +
                        "<input type='checkbox' name='topping' value='.50'>" +
                        "<label>"+"Green Pepper" +"</label>" +
                        "<input type='checkbox' name='topping' value='.50'>" +
                        "<label>"+"Bacon" +"</label>" +
                        "<button id='toppings'>"+"Next"+"</button>";


var size;
var number;
var newPizza;
var chosenToppings = [];
$(document).ready(function() {

    $("button#start-order").click(function(){
        $("button#start-order").hide();
        $(".form-area").append(sizeForm);

        $("button#pizza").click(function(){
            size = $("#pizza-size option:selected").text();
            number = parseInt($("#quantity").val());
            newPizza = new Pizza(size, number, []);
            $(".form-area").empty();
            $(".form-area").append(toppingsCheckList);

            $("button#toppings").click(function(){
                $("input[type='checkbox']:checked").each(function() {
                    chosenToppings.push([$(this).next("label").text(), $(this).val()]);
                    for(i = 0; i < chosenToppings.length; i++) {
                        var topping = new Topping(chosenToppings[i][0], chosenToppings[i][1]);
                        newPizza.addTopping(topping);
                    }
                });
                $(".form-area").empty();
                $("h1").text("Review your Order");
                $(".form-area").append("<h2> You ordered </h2>" +
                                        "<ul><li>" + newPizza.size + "</li>" +
                                        "<li>" + newPizza.toppings[0].name+"</li>"+
                                        "<li>" + newPizza.getPrice() + "</li>" +
                                        "</ul>" +"<button id = 'start-over'>" +"Start Over"+"</button>");
                    $("button#start-over").click(function(){location.reload();});
            });
        });
    });


});
