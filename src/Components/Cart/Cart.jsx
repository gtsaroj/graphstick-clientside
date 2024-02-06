import { React, useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../CardReducer/CardReducer";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const [empty, setEmpty] = useState(true);
  const [checkout, setCheckout] = useState(false);

  // }

  const products = useSelector((state) => state.cart.products);

  function handleCheck() {
    if (products?.length > 0) {
      navigate("/checkout", { state: { products } });
    } else {
      toast.error("please add to cart!");
    }
  }

  useEffect(() => {
    if (products.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [products]);

  const total = () => {
    let total = 0;
    products.forEach((element) => {
      total += element.price * element.quantity;
    });
    return total.toFixed(2);
  };

  const dispatch = useDispatch();

  function handleRemove(itemId) {
    dispatch(removeItem(itemId));
  }

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
              <div className="emptyCart">
                <lord-icon
                  s
                  src="https://cdn.lordicon.com/guothkao.json"
                  trigger="loop"
                  delay="500"
                                  style={{
                                      width: "126px",
                                      height : "103px"
                  }}
                ></lord-icon>

                <p>Your Cart is empty</p>
              </div>
            ) : (
              products?.map((item) => (
                <tbody>
                  <tr className="cart-container" key={item.id}>
                    <td
                      onClick={() => handleRemove(item.id)}
                      className="removeButton"
                    >
                      <DeleteIcon />
                    </td>
                    <td>
                      <img src={item.img} alt="" />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      {" "}
                      <span>
                        {item.quantity}×{item.price}
                      </span>
                    </td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                </tbody>
              ))
            )}
            <tfoot>
              <tr className="subtotal">
                <td>Subtotal: </td>
                <td>{total()}</td>
                {
                  <Link
                    state={{ products }}
                    className="link"
                    onClick={handleCheck}
                  >
                    {" "}
                    <td>Proceed to checkout</td>
                  </Link>
                }
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
