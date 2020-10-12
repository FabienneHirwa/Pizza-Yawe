$(document).ready(function(){
    $(".selects").click(function(){
        $(this).next("div").slideToggle("slow");
    });
});

function formVal(){
    var size = document.querySelector('option[name="size"]:checked').value; console.log("size="+size);
    var sizePrice = 3000;
  if (size === "Medium") {
    sizePrice = 5000;
  };
  if (size === "Large") {
    sizePrice = 8000;
  }; 
  if (size === "Small") {
    sizePrice = 3000;
  };
  

var crust = document.querySelector('option[name="crust"]:checked').value; console.log("crust="+crust);
var crustPrice = 0
if ( crust === "Crispy"){
    crustPrice = 1000;
}
if ( crust === "Stuffed"){
    crustPrice = 800;
}
if ( crust === "Gluten-free"){
    crustPrice = 500;
}


var topping = document.querySelector('option[name="topping"]:checked').value; console.log("topping="+topping);
var toppingPrice = 0
if ( topping=== "Pepperoni"){
    toppingPrice = 200;
}
if ( topping=== "Mushrooms"){
    toppingPrice = 200;
}
if ( topping=== "Onions"){
    toppingPrice = 300;
}
if ( topping=== "Sausage"){
    toppingPrice = 500;
}
if ( topping=== "Bacon"){
    toppingPrice = 400;
}
if ( topping=== "Extra"){
    toppingPrice = 300;
}
var quality = document.getElementById("inputNumber").value
var sum= crustPrice +sizePrice+ toppingPrice;
alert("Total=" + (sum*quality));




}