// Update the header menu based on window width
window.addEventListener('resize', () => {
    const langSwapElem = document.getElementById('lang-swap');
    if(langSwapElem){
        const targetElem = window.innerWidth > 576 ? '.fip-bar' : '.branding';
        document.querySelector(targetElem).appendChild(langSwapElem);
    } 
});

window.dispatchEvent(new Event('resize'));



var h = false;


$('.menuBtn').click(function (event) {
    var curID =  $(this).attr("column");

    if(h == false){        
    	$('.menu').each(function(){
        if($(this).attr("column") == curID)
          $(this).toggle( "fast", function() { left: "0" });
        });
    }else{
        $('.menu').each(function(){$(this).toggle( "fast", function() { left: "50" });});
    }    
});


/* CAROUSEL */

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dotty");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
//  slides[slidePosition-1].style.display = "block";
//  circles[slidePosition-1].className += " enable";
} 