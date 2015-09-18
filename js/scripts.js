$(document).ready(function() {
    $("h1").show();
    $("button").on("click", function(){
        $(".form-area").append("<form id='select-size'>"+
                                "<select class=''>"+
                                "<option value='1'>" + "Small" + "</option>"+
                                "<option value'2'>"+"Medium"+"</option>"+
                                "<option value='3'>"+"Large"+"</option>"+
                                "</select>" +"<button type='submit'>"+"Next"+"</button>"+
                               "</form>")
    });
});

function Pizza(size, price, toppings) {
    this.size = size;
    this.price = price;
    this.toppings = toppings;
}

function Topping(name, price) {
    this.name = name;
    this.price = price;
}

Pizza.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
};
