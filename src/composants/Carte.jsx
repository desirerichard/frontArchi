import React from "react";
import Bouton from "./Bouton";

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
          <Bouton boutonNom="Modifier" />
          <Bouton boutonNom="Supprimer" />
        </div>
      </div>

      <img src={props.image} />
    </article>
  );
}
