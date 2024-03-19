import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
      <Link to="/">Acceuil</Link>
    </header>
  );
}
