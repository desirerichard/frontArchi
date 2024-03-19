import React from "react";

export default function Carte(props) {
  return (
    <div key={props.id}>
      <ul>
        <li>
          {props.nom} - {props.prix}
        </li>
        <li>{props.description}</li>
      </ul>
      <img src={props.image} />
    </div>
  );
}
