// BUSINESS LOGIC--------
function PizzaOrder(size,toppings){
  this.size = size,
  this.toppings = toppings
}


PizzaOrder.prototype.getCost = function() {
  var toppings = this.toppings
  this.cost = 5;
  for (var i = 0; i < toppings.length; i++) {
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
}

// UI LOGIC ----------
$(document).ready(function(){
  $('form#pizzaOrderForm').submit(function(event){
    event.preventDefault();
    var nameInput = $('input#nameInput').val();
    var sizeInput = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var toppingArray = [];
    $("input:checkbox[name='toppings']:checked").each(function(){
      var topping = $(this).val();
      toppingArray.push(topping);
    });
    var pizzaOrder = new PizzaOrder(sizeInput, toppingArray);
    pizzaOrder.getCost()
    $('.hidden').fadeIn(1000);
    $('.total').text(pizzaOrder.cost);
    $('.name').text(nameInput)
  });
  $('#deliveryOption').click(function(){
    $('#addressForm').show();
  });
  $('#carryOutOption').click(function(){
    $('#addressForm').hide();
  })
});
