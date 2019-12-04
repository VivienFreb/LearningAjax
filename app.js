(function () {
    const links = document.querySelectorAll('.eleve');
    const result = document.getElementById('resultat');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            e.preventDefault();
            const httpRequest = new XMLHttpRequest();
            if (!httpRequest) {
                alert('Abandon :( Impossible de créer une instance de XMLHTTP');
                return false;
            }
            result.innerHTML = "Chargement en cours...";
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        const api_results = JSON.parse(httpRequest.responseText);
                        result.innerHTML = ''
                        const ul = document.createElement('ul');
                        result.appendChild(ul);
                        for(let i = 0; i < api_results.length; i++){
                            var li = document.createElement('li');
                            li.innerHTML = api_results[i].name;
                            ul.appendChild(li);
                        }

                    } else {
                        result.innerHTML = "Il y a eu un problème avec la requête."
                    }
                }
            };
            // httpRequest.open('GET', this.getAttribute('href'));
            // Il n'est pas toujours possible d'accéder à des ressources extérieures à cause de l'AJAx (cf. CORS)
            httpRequest.open('GET', "https://jsonplaceholder.typicode.com/users"); // Faux JSON pour test, le site accepte le Cross Origin via ses Headers
            httpRequest.send();
        })
    }
})();