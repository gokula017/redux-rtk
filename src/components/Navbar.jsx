import { Link } from "react-router-dom";
import Cart from "./AddToCart";

export default function Header() {

  return (
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" style={{textDecoration: "none"}}><div className="nav-brand">🛍 ShopLite</div></Link>        
          <Cart />
        </div>
      </nav>
  );
}