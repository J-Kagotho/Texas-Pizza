function Pizza(toppings, size, delivery){
    this.toppings = toppings,
    this.size = size,
    this.delivery = delivery
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
      return 500;
    } else if(this.size === "Medium"){
      return 750;
    } else if(this.size === "Large"){
      return 950;
    } else {
      alert ("Please select a size that you would prefer");
    }
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
     
     var crustArray = [];
      $("input:checkbox[name=crustCheck]:checked").each(function(){
       var inputtedCrust = $(this).val();
       crustArray.push(inputtedCrust);
       $("#displayCrust").text(inputtedCrust);
     });   
     var inputtedSize =$("input:radio[name=sizePizza]:checked").val();
     var inputtedDelivery =$("input:radio[name=delivery]:checked").val();
     $("#displayAmount").text(inputtedAmount);
     $("#displaySize").text(inputtedSize);
     $("#displayDelivery").text(inputtedDelivery);
  
     pizza = new Pizza(toppingArray,inputtedSize,inputtedDelivery);
  
     var toppingBasedAmt = inputtedAmount;
     
     var deliveryAmount = pizza.deliveryAmount();
     var sizeBasedAmt = pizza.sizeBasedAmount();
     pizza.calculateCost(toppingBasedAmt , sizeBasedAmt , deliveryAmount);
    });
  });          