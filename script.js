function placeOrder(){

let name = document.getElementById("name").value
let flavor = document.getElementById("flavor").value
let qty = document.getElementById("qty").value

if(name=="" || qty==""){
alert("Please fill all fields")
return
}

document.getElementById("msg").innerHTML =
"Order placed successfully 🍦<br>" +
"Customer: "+name+"<br>"+
"Flavor: "+flavor+"<br>"+
"Quantity: "+qty

}