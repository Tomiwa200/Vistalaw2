function scollevent(){
	var getheaderelement = document.getElementsByTagName('header')[0].classList;
	if(document.documentElement.scrollTop > 100){
		getheaderelement.add('fixed');
	}else{
		getheaderelement.remove('fixed');
	}
}
window.onscroll = scollevent;

/* function swapText() {
	var show = document.getElementsByClassName('lht_100');
	if(show.innerHTML === 'Welcome to Neo Vista Practice') {
		show.innerHTML = 'The Best Law Firm in Nigeria';
	} 
	return show.innerHTML = 'Welcome to Neo Vista Practice';
}

var dis = document.getElementsByTagName('body');
dis.onload = setInterval(swapText(), 2000); */

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i=0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
