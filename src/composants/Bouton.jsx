import React from "react";

export default function Boutton(props) {
  return <button className={props.class} value={props.title} title={props.title}>{props.boutonNom}</button>;
}
