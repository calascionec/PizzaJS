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
}

Pizza.prototype.printOutToppings = function() {
    
    var string = "<li>";
    if (this.toppings.length === 0) {
        string += "No Toppings";
    } else {
        for(i = 0; i < this.toppings.length - 1; i++ ){
            string += this.toppings[i].name + ", " ;
        }
    }
    string+= this.toppings[(this.toppings.length) - 1].name;
    string += "</li>";
    return string;
}

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
    return (price * this.number);
}
var sizeForm ="<select id= 'pizza-size' >"+
                        "<option value='Small'>" + "Small" + "</option>"+
                        "<option value='Medium'>"+"Medium"+"</option>"+
                        "<option value='Large'>"+"Large"+"</option>"+
                        "</select>" +
                        "<label>"+"Number Of Pizzas"+
                        "<input type='number' id='quantity' value ='1' min='1'></input>" +
                        "<button id='pizza'>"+"Next"+"</button>";

var toppingsCheckList = "<select id = 'toppings'>" +
                        "<option value='.50'>" + "Pepperoni" + "</option>"+
                        "<option value='.50'>"+"Onion"+"</option>"+
                        "<option value='.50'>"+"Mushrooms"+"</option>"+
                        "</select>" + "<button id='add-topping'>" + "Add" + "</button>"+
                        "<button id='done'>"+"Next"+"</button>";


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

            $("button#add-topping").click(function(){
                var toppingName = $("#toppings option:selected").text();
                var toppingPrice = $("#toppings option:selected").val();
                var topping = new Topping(toppingName, toppingPrice);
                newPizza.addTopping(topping);
            });
            $("button#done").click(function(){
                $(".form-area").empty();
                $("h1").text("Review your Order");
                $(".form-area").append("<h2> You ordered </h2>" +
                                        "<ul><li>" + newPizza.size + "</li>" +
                                        newPizza.printOutToppings() +"</li>"+
                                        "<li>" + newPizza.getPrice() + "</li>" +
                                        "</ul>" +"<button id = 'start-over'>" +"Start Over"+"</button>");
                $("button#start-over").click(function(){location.reload();});
            });

        });
    });


});
