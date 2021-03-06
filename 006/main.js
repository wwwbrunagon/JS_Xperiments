// Cria uma função que retorna uma Promise.
// Essa função recebe como argumento uma URL e faz uma request HTTP
// para essa URL. A Promise resolve se a request tiver sido bem sucedida
// e retorna os dados da resposta da request. Se a request nao for bem 
// sucedida a Promise sera rejeitada.
function getData(url) {
  return new Promise(function (resolve, reject) {
    // Cria uma nova request
    const req = new XMLHttpRequest()

    // Cria a request
    req.open('GET', url)

    // Captura o evento de 'onload', que é quando a 
    // request terminou de ser executada.
    req.onload = function () {
      // Checa se o status da request é 200, 
      // o que quer dizer que a request foi bem sucedida.
      if (req.status === 200) {
        // Resolve a Promise retornando a resposta da nossa request
        resolve(req.response)
      } else {
        // Rejeita a Promise retornando os status e texto da request
        reject(req.status + ' ' + req.statusText)
      }
    }

    // Captura o evento de 'onerror' caso o  não tenha conseguido
    // fazer a request. Geralmente por não estar conectado a internet.
    req.onerror = function () {
      // Rejeita a Promise retornando a string 'Erro de conexão'
      reject('Erro de conexão')
    }

    // Envia a request.
    req.send()
  })
} 

// const container = document.getElementById("container")
// container.innerHTML = "Carregando..."


const divcontainer = document.getElementById("container")

const p = getData("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=OvCy0T9edBcXvL0R7YNSssOZpdQ3hY5wLrsPnFX7").then(function(response) {
  console.log(response)
  const jsonResponse = JSON.parse(response)
  // container.innerHTML = ""
  for (const photo of jsonResponse['photos']) {
    console.log(photo.img_src)

    const nasaImg = document.createElement("div")
    const newImg = document.createElement("img") 
    nasaImg.appendChild(newImg)

    newImg.src = photo.img_src
    divcontainer.appendChild(newImg)

  }
}, function(error) { 
  // container.innerHTML = error
  //
})
