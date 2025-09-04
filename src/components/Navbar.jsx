import { Link } from "react-router-dom";
import Cart from "./AddToCart";

export default function Header() {

  return (
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-brand">🛍 ShopLite</div>
          <div className="nav-links" id="navLinks">
            <Link to="/">Home</Link>
            <Link to="/cart">Shoppping Cart</Link>
          </div>
          
          <Cart />

        </div>
      </nav>
  );
}