import React from "react";
import ProduitListContainer from "../Container/ProduitListContainer";
import CrossBouton from "../composants/CrossButton";

export default function Accueil(props) {
  return (
    <main className="acceuil container">
      Accueil
      <ProduitListContainer />
      <CrossBouton nom="+" title="Ajouter un produit" />
    </main>
  );
}
