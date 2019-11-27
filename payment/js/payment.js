

const from = "Tallinn";
const where = "Stockhom";
const back = "true";
var answer = "1";
const price = 253;
const online_pangad = $('#online_pangad_purchase');
const kredit_card = $('#kreditkaart_purchase');
loadEventListener();
if(back == "true"){
    answer = from.toUpperCase() + "-" + where.toUpperCase() + "-" + from.toUpperCase() ;
}
else{
    answer = from.toUpperCase() + "-" + where.toUpperCase();
}
$('#pileti_info').html(
answer + " <i class='fa fa-info-circle' aria-hidden='true'></i> " + price + " €"
);

$("#number input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('#number input').focus();
    }
  });
  
  $("#date input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('#date input').focus();
    }
  });
  
  
  (function ($) {
      $.toggleShowPassword = function (options) {
          var settings = $.extend({
              field: "#password",
              control: "#toggle_show_password",
          }, options);
  
          var control = $(settings.control);
          var field = $(settings.field)
  
          control.bind('click', function () {
              if (control.is(':checked')) {
                  field.attr('type', 'text');
              } else {
                  field.attr('type', 'password');
              }
          })
      };
  }(jQuery));
  
  $.toggleShowPassword({
      field: '#number input',
      control: '#show'
  });

function loadEventListener(){
    sessionStorage.setItem('price', price);
    online_pangad.bind('click', function() {
        const radio_checked = $('input[name=radio]:checked', 
        '#onlinepangad').val();
        if(radio_checked == null){
            alert("null")
        }
        else{
            sessionStorage.setItem('pay_buy', 'online');
            sessionStorage.setItem('bank', $('input[name=radio]:checked', 
            '#onlinepangad').val());
            window.location.replace("successs.html");
        }
      });
      kredit_card.bind('click', function() {
        const card_numbers_1 = $('#card_numbers_1').val();
        const card_numbers_2 = $('#card_numbers_2').val();
        const card_numbers_3 = $('#card_numbers_3').val();
        const card_numbers_4 = $('#card_numbers_4').val();
        const name_of_card = $('#name_of_card').val();
        const first_date = $('#first_date').val();
        const second_date = $('#second_date').val();
        const cvv = $('#cv').val();
        var error = "";
        if (card_numbers_1.length < 4 || card_numbers_2.length < 4 || card_numbers_3.length < 4 || card_numbers_4.length < 4){
            error ="Check the correctness of the card number";
        }
        else if(name_of_card.length < 5){
            error = "Check the correctness of the entered name from the card";
        }
        else if(first_date.length < 1 || second_date.length < 1){
            error = "Check the correctness of the entered card date";
        }
        else if( cvv.length < 3){
            error = "Check the correctness of the entered card CVV";
        }
        if(error == ""){
            sessionStorage.setItem('pay_buy', 'credit');
            window.location.replace("successs.html");
        }
        else{
            

            alert(error);
        }
      });
}