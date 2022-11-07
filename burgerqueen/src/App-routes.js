import { HomePage } from "./pages/HomePage";
import { OrderPage } from "./pages/OrderPage";
import { KitchenPage } from "./pages/KitchenPage";

import { Routes, Route } from "react-router-dom";

//Routes: es el contenedor de cada una de las rutas
//Route: es la ruta específica de cada componente. Recibe 2 atributos, path (la ruta) y element.

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<HomePage />}/>
        <Route path="/order" element= {<OrderPage />}/>
        <Route path="/kitchen" element= {<KitchenPage />}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
