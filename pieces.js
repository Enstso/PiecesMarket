const pieces = await fetch("http://127.0.0.1:8081/pieces");
const piece = await pieces.json();
let fiches = document.querySelector('.fiches').innerHTML = '';

function listOriginal() {
    return Array.from(piece);
}


function inputRange() {
    const range = document.querySelector('#range-filtre');
    range.addEventListener('change', function (event) {
        const rangeFiltre = listOriginal().filter(function (p) {
            return p.prix <= event.target.value;
        });
        document.querySelector('.fiches').innerHTML = '';
        genererpieces(rangeFiltre);
    })
}
function genererpieces(piece) {
    for (let i = 0; i < piece.length; i++) {

        const article = document.createElement('article');
        const btnavis = document.createElement('button');
        const elmt = piece[i];
        const fiches = document.querySelector('.fiches');

        const imageElement = document.createElement('img');
        imageElement.src = elmt.image;

        const nomElement = document.createElement('h2');
        nomElement.innerText = elmt.nom;

        const prixElement = document.createElement('p');
        prixElement.innerText = "Prix " + elmt.prix + " $" + " (" + (elmt.prix < 35 ? "$" : "$$$") + ")";

        const categorieElement = document.createElement('p');
        categorieElement.innerText = elmt.categorie ?? ("Aucune catégorie");

        const descriptionElement = document.createElement('p');
        descriptionElement.innerText = elmt.description ?? "Pas de description pout le moment.";

        const disponibiliteElement = document.createElement('p');
        disponibiliteElement.innerText = elmt.disponibilite ? "En stock" : "Rupture de stock";
        btnavis.dataset.id = elmt.id;
        btnavis.setAttribute("class", "btn-avis");
        btnavis.innerText = 'Voir les avis';
        article.appendChild(imageElement);
        article.appendChild(nomElement);
        article.appendChild(prixElement);
        article.appendChild(categorieElement);
        article.appendChild(descriptionElement);
        article.appendChild(disponibiliteElement);
        article.appendChild(btnavis);
        fiches.appendChild(article);

    }

}


genererpieces(piece);
console.log(piece);
const boutonTrierCroissant = document.querySelector('.btn-trierCroissant');

boutonTrierCroissant.addEventListener('click', function () {
    const listPieces1 = listOriginal();
    listPieces1.sort(function (a, b) {
        return a.prix - b.prix;
    });
    document.querySelector('.fiches').innerHTML = '';
    genererpieces(listPieces1);
})

const boutonFiltrePrix = document.querySelector('.btn-filtrer-prix');

boutonFiltrePrix.addEventListener('click', function () {
    const piecesFiltrePrix = listOriginal().filter(function (p) {
        return p.prix <= 35;
    });
    document.querySelector('.fiches').innerHTML = '';
    genererpieces(piecesFiltrePrix);
})

const boutonFiltreDescription = document.querySelector('.btn-filtrer-description');

boutonFiltreDescription.addEventListener('click', function () {

    const piecesFiltreDescription = listOriginal().filter(function (p) {
        return p.description;
    });
    document.querySelector('.fiches').innerHTML = '';
    genererpieces(piecesFiltreDescription);
})


const boutonTrierDecroissant = document.querySelector('.btn-trierDecroissant');

boutonTrierDecroissant.addEventListener('click', function () {
    const listPieces2 = listOriginal();
    listPieces2.sort(function (a, b) {
        return b.prix - a.prix;
    });
    document.querySelector('.fiches').innerHTML = '';
    genererpieces(listPieces2);
})

const btnViewAvis = document.querySelectorAll('.fiches article button');

console.log(btnViewAvis);
for (let i = 0; i < btnViewAvis.length; i++) {
    btnViewAvis[i].addEventListener('click', async function (elmt) {
        const article = elmt.target.parentElement;
        const idElmt = elmt.target.dataset.id;
        const divAvis = document.createElement('div'); 
        if (btnViewAvis[i].innerText == "Voir les avis") {
            btnViewAvis[i].innerText = "Fermer les avis"
            console.log(elmt);
            console.log(idElmt);
            const response = await fetch("http://127.0.0.1:8081/pieces/" + idElmt + "/avis");
            const avis = await response.json();
            for (let i = 0; i < avis.length; i++) {
                const avisElmt = document.createElement('p');
                avisElmt.innerText = "L\'avis de " + avis[i].utilisateur + " commentaire :" + avis[i].commentaire + "\r";

                divAvis.appendChild(avisElmt);
            }
            article.appendChild(divAvis);
        }
        else {
            btnViewAvis[i].innerText = "Voir les avis"
            article.removeChild(article.lastElementChild);
        }
    });
}


inputRange();
