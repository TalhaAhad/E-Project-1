$(document).ready(function(){
  $(".bar").click(function(){
    $(this).find(".answer").slideToggle();
  });
  $(".bar").click(function(){
    $(this).find(".i").toggleClass("fa-plus fa-minus");
  });
});