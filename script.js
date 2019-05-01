// $(".bubble:nth-child(5)").css('background-color','red');


function bubblesAni(){$(".bubble:first-child").animate({
    top: '-10px',
    left: '210px'
  }, 1000, function() {
});
$(".bubble:nth-child(2)").animate({
    top: '-200px',
    left: '-200px'
  }, 1000, function() {
});
$(".bubble:nth-child(3)").animate({
    top: '-200px',
    left: '50px'
  }, 1000, function() {
});
$(".bubble:nth-child(4)").animate({
    top: '30px',
    left: '-50px'
  }, 1000, function() {
});
$(".bubble:nth-child(5)").animate({
    top: '-200px',
    left: '240px'
  }, 1000, function() {
      $('#bubbles p').fadeIn();
});}

$(document).scroll(()=>{
    var $doc = $(document);
    var $bubbles = $('#bubbles');
    var pageBott = $doc.scrollTop() + $(window).innerHeight();
    if(pageBott > $bubbles.offset().top){
        bubblesAni();
    }
});