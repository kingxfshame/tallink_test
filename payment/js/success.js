const pay_buy = sessionStorage.getItem("pay_buy");
const pay_bank = sessionStorage.getItem("bank");
const price = sessionStorage.getItem("price");
var pay_text = "";
if(pay_buy == "online"){
    pay_text = "Makstud OnlinePankiga : " + pay_bank; 
}
else if(pay_buy == "credit"){
    pay_text = "Makstud krediitkaardiga"
}
$('#makstud').html(pay_text);
$('#price').html(price + " €");