import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="navLogoContainer">
        <img className="goBackArrow" src='img/backArrow.png' alt="Go back" onClick={() => navigate(-1)}/>
        <img className="logoNav" src='img/logoHome.png' alt="Logo" />
      </div>
      <div className="navOptionsContainer">
        <img className="iconNewOrder" src='img/icon-new-order.png' alt="Icono nueva orden"/>
        <p className="newOrderText">Nueva orden</p>
        <img className="iconHistory" src='img/icon-history.png' alt="Icono historial de pedidos"/>
        <p className="orderHistoryText">Historial de pedidos</p>
      </div>
    </div>
  );
};

export default Nav;
