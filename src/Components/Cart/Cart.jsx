import { React, useEffect, useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../CardReducer/CardReducer';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { toast, ToastContainer } from 'react-toastify';




const Cart = () => {


    const [empty, setEmpty] = useState(true);
    const [checkout, setCheckout] = useState(false);



    // }


    const products = useSelector(state => state.cart.products);


    //     function handleCheck() {

    //         if (products?.length == 0) {
    //             toast.error("Please add To cart")
    //             setCheckout(true)


    //         }
    //         else if (products?.map((item) => item.id)) {
    //             toast.success("process to checkout")
    // redirect.push()
    //         }


    //     }

    useEffect(() => {
        if (products.length === 0) {
            setEmpty(true)
        }
        else {
            setEmpty(false)
        }
    }, [products])



    const total = () => {
        let total = 0;
        products.forEach(element => {
            total += element.Price * element.quantity;

        });
        return total.toFixed(2)

    }


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
                    {empty ?
                        <div className="emptyCart">
                            <ProductionQuantityLimitsIcon className='cartIcons' style={{ fontSize: "7rem" }} />
                            <p>Your Cart is empty</p>
                        </div>

                        : products?.map((item) => (
                            <tbody>

                                <tr className='cart-container' key={item.id}  >
                                    <td onClick={() => handleRemove(item.id)} className='removeButton'><i className="far fa-times-circle"></i></td>
                                    <td ><img src={item.Img} alt="" /></td>
                                    <td>{item.Price}</td>
                                    <td> <span>{item.quantity}×{item.Price}</span></td>
                                    <td>{item.Price * item.quantity}</td>
                                </tr>

                            </tbody>
                        ))
                    }
                    <tfoot>
                        <tr className="subtotal">
                            <td>Subtotal:  </td>
                            <td>{total()}</td>
                            <Link to={"/checkout"} state={{ products }} className='link' > <td>Proceed to Checkout</td></Link>
                        </tr>
                    </tfoot>



                </table>
            </div>

        </section>
    </>

    );
}
    ;


export default Cart
