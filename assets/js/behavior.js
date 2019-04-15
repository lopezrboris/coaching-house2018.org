// Set the date we're counting down to
    var countDownDate = new Date("Apr 26, 2018 19:30:00").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //    + minutes + "m " + seconds + "s ";
        $("#banner > header > h2").html("A tan solo " +
            //(days > 0 ? days + " días" : "") +
            (days > 0 ? days + (days==1 ? " día" : " días") : "") +
            (hours > 0 ? (days > 0 ? ", ":"") + hours +  (hours==1 ? " hora" : " horas") : "") +
            (minutes > 0 ? (days || hours ? ", ":"") + minutes + (minutes==1 ? " minuto" : " minutos") : "") +
            (days || hours || minutes ? " y ":"") + seconds + (seconds==1 ? " segundo" : " segundos"));

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);

            $("#banner > header > h2").html("COACHING HOUSE");

            setTimeout(function(){
              $("#banner header").css("display", "initial").css("opacity", 0);
              $("#banner > header > h2").html("");
              $("#banner > header > p").html("");
            },1000);
        }
    }, 1000);



// Get the modal

$(".zoom-pic").click(function(){
  var modal = document.getElementById('myModal');

  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var content = document.getElementById("cvContent");

  /*$(this).click(function(){*/
      modal.style.display = "block";
      modalImg.src = $(this).attr("src");
      modalImg.src = $(this).attr("src");
      $(content).toggle(false);
      $(modalImg).toggle(true);
      captionText.innerHTML = $(this).attr("alt"); //this.alt;
  //});

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  modal.onclick = function() {
      modal.style.display = "none";
  }
});

$(document).ready(function(){
 $('#header > h1').mousemove(function(e){
   var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
   var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
   $('#header > h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
 });
});


$(".zoom-CV").click(function(e){
  e.preventDefault();
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var content = document.getElementById("cvContent");
  /*$(this).click(function(){*/
      modal.style.display = "block";
      if($(this).hasClass("zoom-pic")){
        modalImg.src = $(this).attr("src");
        $(content).toggle(false);
        $(modalImg).toggle(true);
      }
      else{
        $(content).html($(this).attr("content"));// contentText.html = $(this).attr("content");
        $(modalImg).toggle(false);
        $(content).toggle(true);
      }

      captionText.innerHTML = $(this).attr("alt"); //this.alt;
  //});

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  modal.onclick = function() {
      modal.style.display = "none";
  }
});
