// BUSINESS LOGIC--------
function PizzaOrder(size, toppings, cost){
  this.size = size,
  this.toppings = toppings,
  this.cost = cost;
}

PizzaOrder.prototype.costCalc = function(size, toppings) {
  this.cost = 5;
  toppings.forEach(function(topping){
    alert("ENTER")
    // console.log(topping);
    // console.log(topping === 1);
    if(topping === 1){
      console.log("Equals 1", this.cost += 1);
      this.cost + 1;
    }else if (topping === 2){
      this.cost += 2;
    }
    return this.cost;
    console.log("ForEach loop calc",this.cost);
  });
  // for(var i = 0; i > toppings.length; i++){
  //   this.cost += toppings[i]
  // }


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
    var pizzaOrder = new PizzaOrder(sizeInput, toppingInputs, pizzaCost);
    var toppingInputs = [];
    var pizzaCost = pizzaOrder.costCalc(sizeInput, toppingInputs)
    var sizeInput = parseInt($("input:radio[name=pizzaSize]:checked").val());

    $("input:checkbox[name=veggies]:checked").each(function(){
      var veggies = parseInt($(this).val());
      toppingInputs.push(veggies);
    });

    $("input:checkbox[name=meats]:checked").each(function(){
      var meats = parseInt($(this).val());
      toppingInputs.push(meats);
    });
    console.log(toppingInputs);

    console.log(pizzaOrder.costCalc(sizeInput, toppingInputs));

  });
});
