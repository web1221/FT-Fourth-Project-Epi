// BUSINESS LOGIC--------
function PizzaOrder(size, toppings){
  this.size = size,
  this.toppings = toppings
  // this.cost = cost
}

PizzaOrder.prototype.costCalc = function(size, veggies) {
  this.cost = 5;
  veggies.forEach(function(veggie){
    if(veggie === true){
      this.cost += 1;
    }
    console.log("ForEach loop calc",this.cost);
  });
  
  if(size === 8){
    this.cost += 8;
  } else if(size === 12){
    this.cost += 12;
  } else if(size === 14){
    this.cost += 14;
  }
  return this.cost
}

// UI LOGIC ----------
$(document).ready(function(){
  $('form#pizzaOrder').submit(function(event){
    event.preventDefault();
    var pizzaOrder = new PizzaOrder(sizeInput, veggieInputs);
    var veggieInputs = [];
    var sizeInput = parseInt($("input:radio[name=pizzaSize]:checked").val());
    $("input:checkbox[name=veggies]:checked").each(function(){
      var veggies = $(this).val();
      veggieInputs.push(veggies);

    });

    console.log(veggieInputs);
    console.log(pizzaOrder.costCalc(sizeInput, veggieInputs));

  });
});
