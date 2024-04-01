import MenuItem from "./MenuItem";
import "../assets/specials.css";

const Specials = () => {
  return (
    <div className="special-section">
        <section className="specials">
          <div className="special-container">
            <h2 id="special-title">Specials Menu</h2>
            <button id="order-button">Online Menu</button>
          </div>
          <div className="menu-container">
            <MenuItem />
          </div>
        </section>
    </div>
  );
};

export default Specials;