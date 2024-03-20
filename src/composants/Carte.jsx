import React from "react";
import Bouton from "./Bouton";
import { Link } from "react-router-dom";

export default function Carte(props) {
  const produit = {
    display: "flex",
    gap: "10rem",
    justifyContent: "space-between",
    background: "var(--color-third)",
    padding: "2rem",
    borderRadius: "2rem",
  };
  const boutonContainer = {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
  };
  return (
    <article style={produit}>
      <div>
        <ul>
          <li>
            {props.nom} - {props.prix}
          </li>
          <li>{props.description}</li>
        </ul>
        <div style={boutonContainer}>
          <Bouton title="Modifier un produit" boutonNom="Modifier" />
          <Bouton
            class="supprimerBouton"
            title="Supprimer un produit"
            boutonNom="Supprimer"
          />
        </div>
      </div>
      <Link to="/">
        <img src={props.image} />
      </Link>
    </article>
  );
}
