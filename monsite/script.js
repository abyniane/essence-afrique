let panier = {};

function modifierQuantite(nom, prix, changement) {

    if (!panier[nom]) {
        panier[nom] = { prix: prix, quantite: 0 };
    }

    panier[nom].quantite += changement;

    if (panier[nom].quantite <= 0) {
        delete panier[nom];
    }

    afficherPanier();
}

function afficherPanier() {
    let liste = document.getElementById("panier");
    liste.innerHTML = "";
    let total = 0;

    for (let produit in panier) {
        let item = panier[produit];
        let li = document.createElement("li");

        let sousTotal = item.prix * item.quantite;
        total += sousTotal;

        li.textContent = produit + " x" + item.quantite + " = " + sousTotal + " F";
        liste.appendChild(li);
    }

    document.getElementById("total").textContent = "Total : " + total + " F";
}