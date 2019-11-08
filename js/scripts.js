// BUSINESS LOGIC--------
function PizzaOrder(size, toppings,cost){
  this.size = size,
  this.toppings = toppings,
  this.cost = cost
}


PizzaOrder.prototype.getCost = function() {
  console.log(this.cost);
  if(this.size === 8){
    this.cost += 8;
  } else if(this.size === 12){
    this.cost += 12;
  } else{
    this.cost += 14;
  }
  console.log(this.size);
  console.log(this.toppings);
  this.toppings.forEach(function(topping) {
    if(topping === "1"){
      this.cost += 1;
    }
    return this.cost
  });
  return this.cost
}


// UI LOGIC ----------
$(document).ready(function(){
  $('form#pizzaOrder').submit(function(event){
    event.preventDefault();
    var cost = 5;
    var toppingArray = [];
    var sizeInput = parseInt($("input:radio[name=pizzaSize]:checked").val());
    $("input:checkbox[name='toppings']:checked").each(function(){
     var topping = $(this).val();
     toppingArray.push(topping);
   });
   var pizzaOrder = new PizzaOrder(sizeInput, toppingArray, cost);


    console.log(toppingArray);
    console.log(pizzaOrder);
    // console.log(pizzaOrder.costCalc());

  });
});
