import {Link} from "react-router-dom"
//Link to = es parecido al a href en HTML. 

export const HomePage = () => {
  return (
    <div>
      <h1 className="homeTitle">Burger Queen</h1>
      <button className="waiterButton">
        <Link to = "/order">Mesero</Link>
      </button>
      <button className="kitchenButton">
        <Link to = "/kitchen">Cocina</Link>
      </button>
      {/* <img src="../content/assets/burgerHome.png"/> */}
    </div>
  );
};
