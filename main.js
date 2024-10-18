
$(".open").on("click",function(){
    $("aside").animate({width:"250px",padding:"15px 10px"},1000)
})
$(".close").on("click",function(){
    $("aside").animate({width:"0px",padding:"0px 0px"},1000)
})
$(".singer h2").on("click", function(e) {
    $(".singer p").not($(this).next("p")).slideUp();
    $(this).next("p").slideToggle(500) ;
  });



  function countdown(targetDate) {
    const target = new Date(targetDate).getTime();    
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const distance = target - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.querySelector(".day").innerHTML=days +"d"
      document.querySelector(".hour").innerHTML=hours +"h"
      document.querySelector(".minuts").innerHTML=minutes + "m"
      document.querySelector(".second").innerHTML=seconds + "s"
    }, 1000);
  }
  countdown("2024-11-18")
  let maxchar=100;
  let message=document.querySelector(".message");
  $(".message").on("input",function(){
    $("#chars").html(maxchar - (message.value.length))
    if( $("#chars").html() < "0"){
        $(".maxave").show()
        $("#chars").hide()
    }else{
        $(".maxave").hide()
        $("#chars").show()
    }
  
    
  })