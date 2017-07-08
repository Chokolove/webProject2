$(document).ready(function(){
  var a =['assets/images/home/slide1.jpg','assets/images/home/slide2.jpg','assets/images/home/slide3.jpg']
  var i=0
  function show(){
    $("#banner").attr("src",a[i])
    i++
    if (i==3) i=0;
  }
  setInterval(show,2000);
  $("#banner-botones a").click(function(){
    $("#banner").attr("src",a[$(this).text()])
    i = $(this).text()
  });
  $("#banner-text").animate({
    top: "0"
  },2000);
  $("#bloq1").animate({
    left: "0"
  },2000);
  $("#bloq2").animate({
    right: "0"
  },2000);
  $("#footer").animate({
    opacity: "1"
  },3000)
  $("#banner-txt").animate({
    top:"0"
  },2000);

  $("#luchita").animate({
    left: "0"
  },1000);
  $("#jaimito").animate({
    right: "0"
  },1000);

  $(" #luchito").animate({
    top: "0"
  },1000);
  $(" #tiburcia").animate({
    top: "0"
  },1000);

  $("#pollito").animate({
    left: "0"
  },3000);
  $("#ceviche").animate({
    left: "0"
  },3000);
  $("#filete").animate({
    left: "0"
  },2000);
  $("#pan").animate({
    left: "0"
  },2000);
  $("#churrasco").animate({
    left: "0"
  },1000);
  $("#anticuchos").animate({
    left: "0"
  },1000);



})
