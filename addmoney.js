document.getElementById("add-money").addEventListener("click", function(event){
    event.preventDefault;
    const amount=document.getElementById("amount").value;
    const convertedAmount=parseFloat(amount);
    const pinNum= document.getElementById("pin-num").value;
    const convertedPin=parseFloat(pinNum);
    const mainBalance=document.getElementById("main-balance").innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    const bank=document.getElementById("bank-name").value;
    const accNum= document.getElementById("acc-num").value;

    if(bank==='Bkash' || bank==='Nagad' || bank==='DBBL' || bank==='G-PAY'){
        if(convertedPin===1234 && accNum.length===11){
            if(amount!=''){
                const sum= convertedMainBalance+convertedAmount;
            document.getElementById("main-balance").innerText=sum;
            }
            else{
                alert("Enter Amount.");
            }
        }
        else{
            alert("Enter valid pin & eleven digits of account number.");
        }
    }
    else{
        alert("Select Bank Name.");
    }
})


