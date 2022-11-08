import images from "../assets/images";

const Nav = () => {
  return (
    <div className="navBar">
        <img className="goBackArrow" src={images.img14} alt="Go back" />
        <img className="logoNav" src={images.img1} alt="Logo" />
        <img className="iconNewOrder" src={images.img15} alt="Icono nueva orden" />
        <p>Nueva orden</p>
        <img className="iconHistory" src={images.img16} alt="Icono historial de pedidos" />
        <p>Nueva orden</p>
    </div>
  )
}

export default Nav;