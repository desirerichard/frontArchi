import React from "react";

export default function Carte(props) {
  const produit = {
    display: "flex",
    gap: "10rem",
    justifyContent: "space-between",
    background: "var(--color-third)",
    padding: "2rem",
    borderRadius: "2rem"
  };
  return (
    <article style={produit}>
      <ul>
        <li>
          {props.nom} - {props.prix}
        </li>
        <li>{props.description}</li>
      </ul>
      <img src={props.image} />
    </article>
  );
}
