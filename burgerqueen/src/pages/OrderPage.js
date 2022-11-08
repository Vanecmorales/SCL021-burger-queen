import Nav from "../components/Nav";
export const OrderPage = () => {
  return (
    <div>
      <Nav/>
      <div className="sectionsContainer">
        <section className="menu">
          <button className="breakfastButton">Desayuno</button>
          <button className="mealsButton">Comidas</button>
        </section>
        <section className="orderDetails"></section>
      </div>
    </div>
  );
};
