var slideIndex = 1;

function changeSlides(n){

	showSlides(slideIndex+=n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slides");
	if(n>slides.length){slideIndex=1}
	// alert(slide.length)
	if(n<1){slideIndex=slides.length}
	for(i = 0; i<slides.length; i++)
	{
		slides[i].style.display="none";
	}
	slides[slideIndex-1].style.display="block";

}