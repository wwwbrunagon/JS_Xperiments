

const sliderAcss = document.getElementById("slider")

const volumeChange = document.getElementById("audio")

const knobAcss = document.getElementById("knob")

volumeChange.volume=0

knobAcss.addEventListener("click", (event) => {
	volumeChange.volume+=0.1 
})
		

