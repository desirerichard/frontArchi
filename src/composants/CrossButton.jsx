import React from "react";

export default function CrossBouton(props) {
  return (
    <button className="crossBouton" value={props.title} title={props.title}>
      {props.nom}
    </button>
  );
}
