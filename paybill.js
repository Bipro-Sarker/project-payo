document.getElementById("pay-bill-btn").addEventListener("click", function(event){
    event.preventDefault;
    const amount=document.getElementById("pay-amount").value;
    const convertedAmount=parseFloat(amount);
    const pinNum= document.getElementById("pay-pin-num").value;
    const convertedPin=parseFloat(pinNum);
    const mainBalance=document.getElementById("main-balance").innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    const bank=document.getElementById("pay-bank-name").value;
    const accNum= document.getElementById("bill-acc-num").value;

    if(bank==='Bkash' || bank==='Nagad' || bank==='DBBL' || bank==='G-PAY'){
        if(convertedPin===1234 && accNum.length===11){
            if(amount!=''){
                const sub= convertedMainBalance-convertedAmount;
            document.getElementById("main-balance").innerText=sub;
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


