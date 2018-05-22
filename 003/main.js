
//[16 = base Hexadecimal]
//The toString() method returns a string representing the object.
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
 }


//___________

const acessaClasse = document.querySelectorAll(".progress")
const acessaContainer = document.getElementById("container")
 
//forEach método que pode receber outra função callback
// acessaClasse.forEach(elemento=>{
	//elemento é um argumento de forEach
for (const elemento of acessaClasse) {
	elemento.style.height = "5px"
	//elemento.style.backgroundColor= randomColors();
	
	
	const percentageH1 = document.createElement("h1")
	percentageH1.textContent = elemento.dataset.percentage+"%"	
	acessaContainer.appendChild(percentageH1)
	acessaContainer.insertBefore(percentageH1, elemento);

	setTimeout (() => {
		elemento.style.width = elemento.dataset.percentage+"%"
		elemento.style.backgroundColor = randomColors()
	}, 500)

}





//tips:
// => arrow function expression has a shorter syntax than a function expression 
//for in loop no objeto 
//for of loop no Array
//load settimeout

