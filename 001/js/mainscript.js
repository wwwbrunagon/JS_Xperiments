
var formulario = document.querySelector("#input");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 

     	var inputsson = formulario.querySelector("input").value;     	
    //reseta texto
     	formulario.reset();
	//cria li
		var criaNaLi = document.createElement("li");
	//clica e risca o input
		criaNaLi.addEventListener("click", function (event) {
			event.preventDefault();
			criaNaLi.className ="done";
			console.log("riscou");
		});
	//adiciona texto 
		var textoInput = document.createTextNode(inputsson);
		criaNaLi.appendChild (textoInput);

		var addTexto = document.querySelector("#list");
		addTexto.appendChild(criaNaLi);
    	console.log(inputsson);        	
});



