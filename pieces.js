const pieces = await fetch('pieces-autos.json');
const piece = await pieces.json();

for (let i=0;i<piece.length;i++){

    const article = document.createElement('article');
    const fiches = document.querySelector('.fiches');

    const elmt = piece[i];
    

    const imageElement = document.createElement('img');
    imageElement.src = elmt.image;

    const nomElement = document.createElement('h2');
    nomElement.innerText = elmt.nom;

    const prixElement = document.createElement('p');
    prixElement.innerText = "Prix " + elmt.prix + " $"+ " (" + (elmt.prix <35 ? "$" : "$$$") + ")";

    const categorieElement = document.createElement('p');
    categorieElement.innerText = elmt.categorie ?? ("Aucune catégorie");

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = elmt.description ?? "Pas de description pout le moment.";

    const disponibiliteElement = document.createElement('p');
    disponibiliteElement.innerText =  elmt.disponibilite ? "En stock" : "Rupture de stock";

    article.appendChild(imageElement);
    article.appendChild(nomElement);
    article.appendChild(prixElement);
    article.appendChild(categorieElement);
    article.appendChild(descriptionElement);
    article.appendChild(disponibiliteElement);

    fiches.appendChild(article);

}

const boutonTrierCroissant = document.querySelector('.btn-trierCroissant');

boutonTrierCroissant.addEventListener('click',function(){
   const listPieces1 = Array.from(piece);
    listPieces1.sort(function(a,b){
        return a.prix - b.prix;
    });
    console.log(listPieces1);
})

const boutonFiltrePrix = document.querySelector('.btn-filtrer-prix');

boutonFiltrePrix.addEventListener('click',function(){
    const piecesFiltrePrix = piece.filter(function(p){
        return p.prix <= 35;
    });
    console.log(piecesFiltrePrix);
})

const boutonFiltreDescription = document.querySelector('.btn-filtrer-description');

boutonFiltreDescription.addEventListener('click',function(){
    
    const piecesFiltreDescription = piece.filter(function(p){
           return p.description;
    });
    console.log(piecesFiltreDescription);
})

const boutonTrierDecroissant = document.querySelector('.btn-trierDecroissant');

boutonTrierDecroissant.addEventListener('click',function(){
    const listPieces2 = Array.from(piece);
    listPieces2.sort(function(a,b){
        return b.prix - a.prix;
    });
    console.log(listPieces2);
})

const elementsAbordables = document.createElement('ul');


for(let i = 0;i< piece.length;i++){
    if(piece[i].prix<35){
        const nomElement1 = document.createElement('li');
        nomElement1.innerText = piece[i].nom;
        elementsAbordables.appendChild(nomElement1);
    }
}

document.querySelector('.abordables').appendChild(elementsAbordables);

const elementsDisonibles = document.createElement('ul');


for(let i=0;i<piece.length;i++){
    if(piece[i].disponibilite == true){
        const nomElement2 = document.createElement('li');
        nomElement2.innerText = piece[i].nom + " - "+ piece[i].prix + " $";
        elementsDisonibles.appendChild(nomElement2);
    }
}


document.querySelector('.disponibles').appendChild(elementsDisonibles);