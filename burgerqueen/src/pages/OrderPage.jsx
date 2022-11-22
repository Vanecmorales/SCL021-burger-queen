import Nav from "../components/Nav";
import { useState } from "react";
import menu from "../data/menu.json";

const {breakfast, lunch} = menu;

export const OrderPage = () => {
  const [items, setItems] = useState([...breakfast]);
  //El spreat operator establece el estado inicial, en este caso que al entrar a la sección de órdenes cargue automaticamente con el menú de desayuno
  return (
    <div className="orderPageContainer">
      <Nav />
      <div className="sectionsContainer">
        <section className="menuContainer">
          <div className="menuButtonContainer">
          <button onClick={() => {setItems(breakfast);}} className="breakfastButton">Desayuno</button>
          <button onClick={() => {setItems(lunch); }} className="mealsButton">Comidas</button>
          </div>
          

          <section className="menuDetails">
            {/* Acá van los items del menú */}
            {items.map((item) => (
              <div className="item" key={item.id}>
                <h4 className="itemName">{item.name}</h4>
                <img src={item.image} className="itemImage" alt=""></img>

                <div className="priceButtonContainer">
                  <h4 className="itemPrice">{"$ " + item.price}</h4>
                  <button className="addButton">Agregar</button>
                </div>

              </div>
            ))}
          </section>
        </section>
        
        <section className="orderDetailsContainer">
          {/* acá va el detalle de la orden */}
        </section>
      </div>
    </div>
  );
};
