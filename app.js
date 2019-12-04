(function () {
    const links = document.querySelectorAll('.eleve');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            e.preventDefault();
            const httpRequest = new XMLHttpRequest();
            if (!httpRequest) {
                alert('Abandon :( Impossible de créer une instance de XMLHTTP');
                return false;
            }
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        document.getElementById('resultat').innerHTML = httpRequest.responseText;
                    } else {
                        document.getElementById('resultat').innerHTML = "Il y a eu un problème avec la requête."
                    }
                }
            };
            httpRequest.open('GET', this.getAttribute('href'));
            httpRequest.send();
        })
    }
})();