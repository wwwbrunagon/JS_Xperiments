
console.log ("Hello")

function getData(url) { 

    return new Promise(function (resolve, reject) {

  	    const req = new XMLHttpRequest()

  	    req.open ('GET', url)

	    req.onload = function () {

	       if (req.status ===200) {

	           resolve(req.response) 
	       	} else {
	        	reject(req.status, req.statusText)
	        }
	    }


	    req.onerror = function () {
	    	reject ('Erro de Conexão')
	    }

	    req.send()
	})

}

const p = getData ("http://revistapolen.com/wp-json/wordpress-popular-posts/v1/popular-posts").then(function(response)
	{
	// console.log(typeof response)
	// console.log(JSON.parse(response))
	for (const post of JSON.parse (response)){
		console.log(post.title.rendered)
	}

})


 