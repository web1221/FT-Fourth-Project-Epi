// BUSINESS LOGIC--------
function PizzaOrder(size, toppings){
  this.size = size,
  this.toppings = toppings,
  this.cost = cost
}


// UI LOGIC ----------
$(document).ready(function(){
  $('form#pizzaOrder').submit(function(event){
    var sizeInput = parseInt($("input:radio[name='pizzaSize']:checked").val());
    console.log(sizeInput);


    event.preventDefault();
  });
});
