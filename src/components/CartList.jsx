import { useDispatch, useSelector } from "react-redux"
import { removeItem, clearCart, updateQuantity } from '../redux/slice'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function CartList() {
    const navigate = useNavigate();
    const cartSelector = useSelector((state) => state.cart.items)
    const [cartItems, setCartItems] = useState(cartSelector);

    useEffect(() => {
        setCartItems(cartSelector)
    }, [cartSelector])

    const dispatch = useDispatch()

    const handleOrder = () => {
        alert('Order placed successfully')
        localStorage.clear()
        dispatch(clearCart())
        navigate('/')
    }
    return (
        <div className="container list">
            <div className="flex justify-between align-center">
                <h2>Shopping Cart</h2>
                <div><strong>Total Items: {cartItems.length}</strong></div>
                <div>Total Amount: <strong> ₹{cartItems.reduce((sum, item) => item.quantity ? sum + parseInt(item.price) * parseInt(item.quantity) : sum + item.price, 0).toFixed(2)} </strong></div>
            </div>
            {cartItems.length > 0 ? (cartItems.map((item) => (

                <article className="card list" key={item.id}>
                    <div className="flex align-center">
                        <div className="media">
                            <img src={item.thumbnail} alt="Smartwatch" className="list" />
                        </div>
                        <div className="content">
                            <h2 className="title">{item.title}</h2>
                            <p className="price text-green">₹{item.quantity ? (item.price * item.quantity).toFixed(2) : item.price}</p>
                        </div>
                    </div>
                    <div className="actions list">
                        <div>
                            <input type="number" placeholder="Enter Quantity"
                                onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) || 1 }))}
                                value={item.quantity ? item.quantity : 1}
                                style={{ width: '120px', margin: '10px' }} />
                        </div>
                        <button className="btn btn-remove" type="button" onClick={() => dispatch(removeItem(item))}>Remove Item</button>
                    </div>
                </article>
            ))
            ) : (
                <div className="text-center">
                    <p className="text-center">Your cart is empty.</p>
                    <br />
                    <Link to="/">Back</Link>
                </div>
            )
            }
            <hr />
            <button className="btn" type="button" onClick={() => handleOrder()} style={{ width: '200px', marginLeft: 'auto' }}>Place Order</button>

        </div>

    );
}