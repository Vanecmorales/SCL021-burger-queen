import { Link } from "react-router-dom"; //Link to = es parecido al a href en HTML.

export const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="homeOptions">
        <img className="logoHome" src='img/logoHome.png' alt="Logo" />
        <button className="waiterButton">
          <Link to="/order">Mesero</Link>
        </button>
        <button className="kitchenButton">
          <Link to="/kitchen">Cocina</Link>
        </button>
      </div>
      <img className="imageHome" src='img/burgerHome.png' alt="Burger Home" />
      {/* <img src={burgerHome} alt="Burger Home"/>
      <img src='../assets/burgerHome.png' alt="Burger Home"/> */}
    </div>
  );
};
