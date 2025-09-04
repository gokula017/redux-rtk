import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
    const cartSelector = useSelector((state) => state.cart.items);
    return (
        <>
            <Link to="/cart">
                <div className="cart">
                    <button className="cart-btn" id="viewCartBtn" type="button">
                        <span aria-hidden="true">🧺</span>
                        <span>My Cart</span>
                        <span className="cart-count" id="cartCount">{cartSelector.length > 0 ? cartSelector.length : 0}</span>
                    </button>
                </div>
            </Link>
        </>
    )
}