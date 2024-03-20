import React from "react";
import ProduitListContainer from "../Container/ProduitListContainer";
import Bouton from "../composants/Bouton";

export default function Accueil(props) {
  return (
    <main className="acceuil container">
      <ProduitListContainer />
      <Bouton class="croixBouton" boutonNom="+" title="Ajouter un produit" />
    </main>
  );
}
