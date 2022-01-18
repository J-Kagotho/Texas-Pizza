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