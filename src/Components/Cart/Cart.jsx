import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../CardReducer/CardReducer';


const Cart = () => {
    const products = useSelector(state => state.cart.products);

    const dispatch = useDispatch()

    function handleRemove(itemId) {
        dispatch(removeItem(itemId))
    }



    return (<>
        <section className="cart">
            <div className="Cart-items" >
                <table>
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>SubTotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((item) => (
                            <tr className='cart-container' key={item.id}>
                                <td onClick={() => handleRemove(item.id)} className='removeButton'><i className="far fa-times-circle"></i></td>
                                <td ><img src={item.Img} alt="" /></td>
                                <td>{item.Price}</td>
                                <td> <span>{item.quantity}×{item.Price}</span></td>
                                <td>{item.Price * item.quantity}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

        </section>
        {/* <section className="cart-add section-p1">
            <div className="coupon">
                <h3>Apply coupon</h3>
                <div>
                    <input type="text" placeholder="Enter your  coupon" />
                    <button>Apply</button>
                </div>
            </div>
            <div className="cart-total">
                <h3>Cart Totals</h3>
                <table>
                    <tbody>

                        <tr>

                            <td>Cart Subtotal</td>
                            <td>{products.Price * products.quantity}</td>

                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>

                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$335</strong></td>

                        </tr>
                    </tbody>
                </table>
                <button className="normal">Proceed to checkout</button>
            </div>
        </section> */}
    </>

    );
}
    ;


export default Cart
