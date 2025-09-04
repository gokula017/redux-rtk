import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { useEffect } from "react";
import { fetchProducts } from '../redux/productSlice'

export default function ProductList() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const productSelector = useSelector((state) => state.products.items)
    const cartSelector = useSelector((state) => state.cart.items)

    return (
        <>
            <div className="container">

                {productSelector && productSelector.map((item, index) => {
                    return (
                        <article className="card" key={index}>
                            <div className="media">
                                <img src={item.thumbnail} alt="Smartwatch" />
                            </div>
                            <div className="content">
                                <h2 className="title">{item.title}</h2>
                                <p className="muted">{item.availabilityStatus}</p>
                                <p className="price">₹{item.price}</p>
                            </div>
                            <div className="actions">
                                {
                                    cartSelector.find(cartItem => cartItem.id === item.id)
                                        ?
                                        <button className="btn btn-remove" type="button" onClick={() => dispatch(removeItem(item))}>Remove Item</button>
                                        :
                                        <button className="btn" type="button" onClick={() => dispatch(addItem(item))}>Add to Cart</button>
                                }
                            </div>
                        </article>
                    )
                }
                )}

            </div>
        </>
    );
}