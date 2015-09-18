$(document).ready(function() {
    $("button#start-order").on("click", function(){
        $("button#start-order").hide();
        $(".form-area").append("<form id='select-size'>"+
                                "<select class=''>"+
                                "<option value='1'>" + "Small" + "</option>"+
                                "<option value='2'>"+"Medium"+"</option>"+
                                "<option value='3'>"+"Large"+"</option>"+
                                "</select>" +"<button type='submit'>"+"Next"+"</button>"+
                               "</form>")
    });

    $("form#select-size").submit(function(event){
        event.preventDefault();
    });

});

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
