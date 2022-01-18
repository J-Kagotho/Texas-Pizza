function Pizza(toppings, size, delivery, crust, location){
  this.toppings = toppings,
  this.size = size,
  this.delivery = delivery,
  this.crust = crust,
  this.location = location
}

Pizza.prototype.deliveryAmount = function(){
  if (this.delivery === "no"){
    return 0;
  } else if(this.delivery === "yes"){
    return 200;
  } else {
    alert ("Please select delivery option");
  }
} 

Pizza.prototype.sizeBasedAmount = function(){
  if (this.size === "Small"){
    return 550;
  } else if(this.size === "Medium"){
    return 1000;
  } else if(this.size === "Large"){
    return 1200;
  } else {
    alert ("Please select a size that you would prefer");
  }
}

Pizza.prototype.crustBasedAmount = function(){
  if (this.crust === "crispy"){
    return 200;
  } else if(this.crust === "stuffed"){
    return 150;
  } else if(this.crust === "glutten"){
    return 100;
  } else {
    alert ("Please select a crust that you would prefer");
  }
}


Pizza.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt, deliveryAmount, crustBasedAmt){
  var totalCost = (tBasedAmt * sizeBasedAmt) + deliveryAmount + crustBasedAmt ;
  $("#displayTotalCost").html(totalCost);
}

var pizza;
$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    $("#show-Bill").show();
    var inputtedAmount = parseInt($("#amount").val());
    var toppingArray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
     var inputtedToppings = $(this).val();
     toppingArray.push(inputtedToppings);
     $("#displayToppings").text(inputtedToppings);
   });

   var inputtedSize =$("input:radio[name=sizePizza]:checked").val();
   var inputtedDelivery =$("input:radio[name=delivery]:checked").val();
   var inputtedCrust =$("input:radio[name=chooseCrust]:checked").val();
   $("#displayAmount").text(inputtedAmount);
   $("#displaySize").text(inputtedSize);
   $("#displayDelivery").text(inputtedDelivery);
   $("#displayCrust").text(inputtedCrust);

   pizza = new Pizza(toppingArray,inputtedSize,inputtedDelivery, inputtedCrust);

   var toppingBasedAmt = inputtedAmount;
   
   var deliveryAmount = pizza.deliveryAmount();
   var sizeBasedAmt = pizza.sizeBasedAmount();
   var crustBasedAmt = pizza.crustBasedAmount();
   pizza.calculateCost(toppingBasedAmt , sizeBasedAmt , deliveryAmount, crustBasedAmt);
  });
});
