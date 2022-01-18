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