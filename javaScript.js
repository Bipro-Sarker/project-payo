document.getElementById("btn-login")
.addEventListener("click", function(event){
    event.preventDefault();
    const accNum= document.getElementById("acc-num").value;
    const pinNum= document.getElementById("pin-num").value;
    if(accNum.length===11){
        if(pinNum==="1234"){
            window.location.href="./main.html"
        }
        else{
            alert("Wrong pin");

        }
    }
    else{
        alert("Invalid Account Number.");
    }
})