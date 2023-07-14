const avis_json = await fetch('http://127.0.0.1:8081/avis');
const avis = await avis_json.json();
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
        const lblavis = document.createElement('p');

        const elmt = piece[i];
        fiches = document.querySelector('.fiches');

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

        lblavis.innerText = "Les avis :";

        const mesAvis = document.createElement('p');


        for (let i = 0; i < avis.length; i++) {
            if (avis[i].pieceId === elmt.id) {
                mesAvis.innerText+= "De l'utilisateur " + avis[i].utilisateur + 'commentaire : ' + avis[i].commentaire;
            }
        }

        article.appendChild(imageElement);
        article.appendChild(nomElement);
        article.appendChild(prixElement);
        article.appendChild(categorieElement);
        article.appendChild(descriptionElement);
        article.appendChild(lblavis)
        article.appendChild(disponibiliteElement);
        article.appendChild(mesAvis)

        fiches.appendChild(article);
        btnavis.className = "btn-avis";
    }
    ajoutListenersAvis();

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


inputRange();
