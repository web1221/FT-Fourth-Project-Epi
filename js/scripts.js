// BUSINESS LOGIC--------
function PizzaOrder(size, toppings,cost){
  this.size = size,
  this.toppings = toppings,
  this.cost = cost
}


PizzaOrder.prototype.getCost = function() {
    this.cost = 5;
    this.toppings.forEach(function(topping) {
    if(topping === "1"){
      this.cost += 1;
    }
    return this.cost
    });
    console.log(this.cost);
    if(this.size === 8){
      this.cost += 8;
    } else if(this.size === 12){
      this.cost += 12;
    } else{
      this.cost += 14;
    }
    return this.cost;
    console.log(this.cost);
}




// UI LOGIC ----------
$(document).ready(function(){
  $('form#pizzaOrderForm').submit(function(event){
    event.preventDefault();
    var toppingArray = [];
    var sizeInput = parseInt($("input:radio[name=pizzaSize]:checked").val());
    $("input:checkbox[name='toppings']:checked").each(function(){
     var topping = $(this).val();
     toppingArray.push(topping);
   });
   var pizzaOrder = new PizzaOrder(sizeInput, toppingArray, cost);
   var cost = pizzaOrder.getCost()


    console.log(pizzaOrder);
    console.log(cost);
    // console.log(pizzaOrder.costCalc());

  });
});
