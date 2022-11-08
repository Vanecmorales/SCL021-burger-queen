import Nav from "../components/Nav";
export const OrderPage = () => {
  return (
    <div className="orderPageContainer">
      <Nav/>
      <div className="sectionsContainer">
        <section className="menuContainer">
          <button className="breakfastButton">Desayuno</button>
          <button className="mealsButton">Comidas</button>
          <section className="menuDetails">
            {/* acá va la info del .json */}
          </section>
        </section>
        <section className="orderDetailsContainer">
          {/* acá va el detalle de la orden */}
        </section>
      </div>
    </div>
  );
};
