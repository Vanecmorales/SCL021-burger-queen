import { useNavigate } from "react-router-dom";
// import images from "../assets/images";

// const navigate = useNavigate();

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="navLogoContainer">
        <img className="goBackArrow" src='/public/img/burgerHome.png' alt="Go back" onClick={() => navigate(-1)}/>
        <img className="logoNav" src='/public/img/burgerHome.png' alt="Logo" />
      </div>
      <div className="navOptionsContainer">
        <img className="iconNewOrder" src='/public/img/burgerHome.png' alt="Icono nueva orden"/>
        <p className="newOrderText">Nueva orden</p>
        <img className="iconHistory" src='/public/img/burgerHome.png' alt="Icono historial de pedidos"/>
        <p className="orderHistoryText">Historial de pedidos</p>
      </div>
    </div>
  );
};

export default Nav;
