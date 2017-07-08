$(document).ready(function(){
  var a =['assets/images/home/slide1.jpg','assets/images/home/slide2.jpg','assets/images/home/slide3.jpg']
  var i=0
  function show(){
    $("#banner").attr("src",a[i])
    i++
    if (i==3) i=0;
  }
  setInterval(show,1500);
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
    opacity: "1"
  },2500);
  $(" #tiburcia").animate({
    opacity: "1"
  },2500);

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

  $(".zoom figure img").mouseover(function(){
    $(this).animate({
      opacity: 0.5
    },500)
  }).mouseout(function(){
    $(this).animate({
      opacity: 1
    },500)
  });
  $("#formulario").mouseover(function () {
    $("#formulario h3").css("color","red")
  }).mouseout(function(){
    $("#formulario h3").css("color","")
  });
  $("#formulario-enviar").click(function(){
    var nombre = document.getElementsByName('nombres')[0].value;
    var telefono = document.getElementsByName('telefono')[0].value;
    var expreLetras = /^[a-zA-Z_áéíóúñ\s]*$/;
    var expreNumeros = /^\d+$/
    if (expreLetras.test(nombre) && expreNumeros.test(telefono)){
      alert("Se guardo exitosamente")
    }
    else {
      alert("Escribio mal en uno de los campos")
    }

  })

})
