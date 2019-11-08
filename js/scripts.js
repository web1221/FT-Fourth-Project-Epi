// BUSINESS LOGIC--------
function PizzaOrder(size, toppings, cost){
  this.size = size,
  this.toppings = toppings,
  this.cost = 5;
}


PizzaOrder.prototype.costCalc = function() {
  console.log(this.cost);
  var toppings = this.toppings
  toppings.forEach(function(topping){
    this.cost += 1;
    console.log(this.cost);

  });
  // for(var i = 0; i < toppings.length; i++){
  //   alert("ENTER")
  //   if(toppings[i] === "1"){
  //     return this.cost += 1;
  //     console.log(this.cost);
  //     console.log("This.Cost in the loop", this.cost)
  //   }else if (toppings[i] === '2'){
  //     this.cost += 2;
  //   }
  //
  //
  //   console.log(result);
  // }
  //
  // console.log(this.cost);

  if(this.size === 8){
    this.cost += 8;
  } else if(this.size === 12){
    this.cost += 12;
  } else if(this.size === 14){
    this.cost += 14;
  }
  return this.cost
}

// UI LOGIC ----------
$(document).ready(function(){
  $('form#pizzaOrder').submit(function(event){
    event.preventDefault();
    var pizzaOrder = new PizzaOrder(sizeInput, toppingInputs, pizzaCost);
    var toppingInputs = [];
    var pizzaCost = pizzaOrder.costCalc()
    var sizeInput = parseInt($("input:radio[name=pizzaSize]:checked").val());

    $("input:checkbox[name=veggies]:checked").each(function(){
      var veggies = $(this).val();
      toppingInputs.push(veggies);
    });

    $("input:checkbox[name=meats]:checked").each(function(){
      var meats = $(this).val();
      toppingInputs.push(meats);
    });
    console.log(toppingInputs);

    console.log(pizzaOrder.costCalc(sizeInput, toppingInputs));

  });
});
