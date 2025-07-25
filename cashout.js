document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault;
    const amount=document.getElementById("cashout-amount").value;
    const convertedAmount=parseFloat(amount);
    const pinNum= document.getElementById("cashout-pin-num").value;
    const convertedPin=parseFloat(pinNum);
    const mainBalance=document.getElementById("main-balance").innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    const agentNum= document.getElementById("agent-num").value;



    if(convertedPin===1234 && agentNum.length===11){
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

