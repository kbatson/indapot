$(document).ready(function(){
  $(".list-toggle").on('click', function(){
    $(".mainNav__list").toggleClass("is-hidden");

    return false;
  });
});