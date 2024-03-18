import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil"
import Erreur from "../pages/Erreur"
import Produit from "../pages/Produit"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/produits/:name" element={<Produit />} />
      <Route path="/*" element={<Erreur />} />
    </Routes>
  );
}

export default Router;