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
                        result.innerHTML = httpRequest.responseText;
                    } else {
                        result.innerHTML = "Il y a eu un problème avec la requête."
                    }
                }
            };
            httpRequest.open('GET', this.getAttribute('href'));
            httpRequest.send();
        })
    }
})();