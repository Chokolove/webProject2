var a =['assets/images/home/slide1.jpg','assets/images/home/slide2.jpg','assets/images/home/slide3.jpg']
var i=0
function show(){
  $("#banner").attr("src",a[i])
  i++
  if (i==3) i=0;
}
setInterval(show,2000);
$(document).ready(function(){
  $("#banner-botones a").click(function(){
    $("#banner").attr("src",a[$(this).text()])
    i = $(this).text()
  });
  $("#banner-text").animate({
    top: "0"
  },2000);
  $()
})
