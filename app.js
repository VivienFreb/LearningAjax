(function () {
        let result = document.querySelector('#resultat');
        let form = document.querySelector('#form');
        form.addEventListener('submit', function (e) {
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
                        result.innerHTML = "Il y a eu un problème avec la requête. Erreur : " + httpRequest.status
                    }
                }
            };
            httpRequest.open('POST', "demo.php");
            // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // var test = "Oui&Non=Test"; // Au cas où l'utilisateur enverrait des informations érronés
            // httpRequest.send("firstname=Claude" + encodeURIComponent(test) + "&lastname=Francois");

            // Une méthode plus simple est d'utiliser le FormData
            let datas = new FormData();
            let input = document.querySelector('#query');
            datas.append('query', input.value);
            httpRequest.send(datas);
        })
})();