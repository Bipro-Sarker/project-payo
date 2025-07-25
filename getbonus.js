document.getElementById("coupon-btn")
.addEventListener("click", function(event){
    event.preventDefault;
    const cupon=document.getElementById("coupon").value;
    if(cupon!=''){
        alert("Congratulations. Your bonus money will be added soon.");
    }
    else{
        alert("Enter Cupon Code.");
    }
})