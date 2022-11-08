import { useNavigate } from "react-router-dom";
import images from "../assets/images";

// const navigate = useNavigate();

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="navLogoContainer">
        <img
          className="goBackArrow"
          src={images.img3}
          alt="Go back"
          onClick={() => navigate(-1)}
        />
        <img className="logoNav" src={images.img1} alt="Logo" />
      </div>
      <div className="navOptionsContainer">
        <img
          className="iconNewOrder"
          src={images.img4}
          alt="Icono nueva orden"
        />
        <p className="newOrderText">Nueva orden</p>
        <img
          className="iconHistory"
          src={images.img5}
          alt="Icono historial de pedidos"
        />
        <p className="orderHistoryText">Historial de pedidos</p>
      </div>
    </div>
  );
};

export default Nav;
