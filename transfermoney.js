document.getElementById("transfer-btn").addEventListener("click", function(event){
    event.preventDefault;
    const amount=document.getElementById("transfer-amount").value;
    const convertedAmount=parseFloat(amount);
    const pinNum= document.getElementById("transfer-pin-num").value;
    const convertedPin=parseFloat(pinNum);
    const mainBalance=document.getElementById("main-balance").innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    const userNum= document.getElementById("user-num").value;



    if(convertedPin===1234 && userNum.length===11){
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
})

