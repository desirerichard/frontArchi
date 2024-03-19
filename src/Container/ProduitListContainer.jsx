import React, { useState, useEffect } from "react";
import Carte from "../composants/Carte";

export default function ProduitListContainer() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/produits")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Problème lors de la récupération des données produits"
          );
        }
        return response.json();
      })
      .then((data) => {
        setProduits(data);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch", error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Produits</h1>
      <section>
        {produits.map((produit) => (
          <div key={produit.id}>
            <Carte
              nom={produit.nom}
              prix={produit.prix}
              description={produit.description}
              image={produit.image}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
