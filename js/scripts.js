// BUSINESS LOGIC--------
function PizzaOrder(size,toppings,cost){
  this.size = size,
  this.toppings = [toppings],
  this.cost = cost
}


PizzaOrder.prototype.getCost = function(toppings) {
    this.cost = 5;
    // this.toppings.forEach(function(topping) {
    //   console.log(this.cost);
    // });
    for (var i = 0; i < toppings.length; i++) {
      // this.cost += 1
      if(toppings[i] === "1"){
        this.cost += 1;
      } else if(toppings[i] === "2"){
        this.cost += 2;
      }
    }
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
   var cost = pizzaOrder.getCost(toppingArray)


    console.log(pizzaOrder);
    console.log(cost);
    // console.log(pizzaOrder.costCalc());

  });
});
