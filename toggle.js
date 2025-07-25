document.getElementById("cashout").style.display="none";
document.getElementById("addmoney").style.display="none";
document.getElementById("Transfer-Money").style.display="none";
document.getElementById("get-bonus").style.display="none";
document.getElementById("Pay-Bill").style.display="none";
document.getElementById("Transactions").style.display="none";


document.getElementById("add-money-box").addEventListener("click", function(){
    document.getElementById("cashout").style.display="none";
    document.getElementById("addmoney").style.display="block";
    document.getElementById("Transfer-Money").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("Transactions").style.display="none";
})

document.getElementById("cash-out-box").addEventListener("click", function(){
    document.getElementById("cashout").style.display="block";
    document.getElementById("addmoney").style.display="none";
    document.getElementById("Transfer-Money").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("Transactions").style.display="none";
})

document.getElementById("transfer-money-box").addEventListener("click", function(){
    document.getElementById("cashout").style.display="none";
    document.getElementById("addmoney").style.display="none";
    document.getElementById("Transfer-Money").style.display="block";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("Transactions").style.display="none";
})

document.getElementById("get-bonus-box").addEventListener("click", function(){
    document.getElementById("cashout").style.display="none";
    document.getElementById("addmoney").style.display="none";
    document.getElementById("Transfer-Money").style.display="none";
    document.getElementById("get-bonus").style.display="block";
    document.getElementById("footer").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("Transactions").style.display="none";
})

document.getElementById("pay-bill-box").addEventListener("click", function(){
    document.getElementById("cashout").style.display="none";
    document.getElementById("addmoney").style.display="none";
    document.getElementById("Transfer-Money").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("Pay-Bill").style.display="block";
    document.getElementById("Transactions").style.display="none";
})

document.getElementById("transactions-box").addEventListener("click", function(){
    document.getElementById("cashout").style.display="none";
    document.getElementById("addmoney").style.display="none";
    document.getElementById("Transfer-Money").style.display="none";
    document.getElementById("get-bonus").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("Pay-Bill").style.display="none";
    document.getElementById("Transactions").style.display="block";
})