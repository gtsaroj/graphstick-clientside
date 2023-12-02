import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../CardReducer/CardReducer';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(true);

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    setEmpty(products.length === 0);
  }, [products]);

  const total = () => {
    let total = 0;
    products.forEach((element) => {
      total += element.price * element.quantity;
    });
    return total.toFixed(2);
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheck = () => {
    if (products?.length > 0) {
      navigate('/checkout', { state: { products } });
    } else {
      toast.error('Please add items to the cart!');
    }
  };

  return (
    <>
      <section className="cart">
        <div className="Cart-items">
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
            
              {empty ? (
                <tr>
                  <td colSpan="5" className="emptyCart">
                    <ProductionQuantityLimitsIcon className="cartIcons" style={{ fontSize: '7rem' }} />
                    <p>Your Cart is empty</p>
                  </td>
                </tr>
              ) : (
                products?.map((item) => (
                  <CSSTransition key={item.id} timeout={300} classNames="cart-item">
                    <tr className="cart-container">
                      <td onClick={() => handleRemove(item.id)} className="removeButton">
                        <DeleteIcon />
                      </td>
                      <td>
                        <img src={item.img} alt="" />
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <span>
                          {item.quantity}×{item.price}
                        </span>
                      </td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  </CSSTransition>
                ))
              )}
         
            <tfoot>
              <tr className="subtotal">
                <td>Subtotal: </td>
                <td>{total()}</td>
                <td>
                  <Link state={{ products }} className="link" onClick={handleCheck}>
                    Proceed to checkout
                  </Link>
                </td>
              </tr>
              <ToastContainer />
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default Cart;
