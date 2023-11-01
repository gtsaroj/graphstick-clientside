import React, { useState } from 'react';
import "./CheckOut.scss";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import KhaltiCheckout from "khalti-checkout-web";


const CheckOut_page = () => {

  const location = useLocation();
  const { products } = location.state;

  const total = () => {
    let total = 0;
    products.forEach(element => {
      total += element.price * element.quantity;

    });
    return total.toFixed(2)

  }

  console.log(total())

  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    shippingAddress: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Khalti payment configuration
      const config = {
        publicKey: "test_public_key_8cfdae6270864204b8086b4df9e829f5",
        productIdentity: products?.map((item) => item.id).join(),
        productName: products?.map((item) => item.title).join(),
        productUrl: "http://localhost:3000",
        eventHandler: {
          onSuccess(payload) {
            // Handle Khalti payment success
            console.log(payload);

            const data = {
              ...customerInfo,
              token: payload.token,
              amount: payload.amount
            };

            // Make an API request to create the order
            axios.post(
              process.env.REACT_APP_API_URL + "/order",
              { data },
              {
                headers: {
                  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
                }
              }
            )
              .then(response => {
                if (response.status === 200) {
                  alert('Order created successfully.');
                } else {
                  console.error('Failed to create the order.');
                }
              })
              .catch(error => {
                console.error('Error creating the order:', error);
              });
          },
          onError(error) {
            // Handle Khalti payment error
            console.error('Khalti payment error:', error);
          },
          onClose() {
            // Handle Khalti widget closure
            console.log('Khalti widget is closing');
          }
        }
      };

      // Create KhaltiCheckout instance and initiate payment
      const checkout = new KhaltiCheckout(config);
      checkout.show({ amount: total() }); // Replace with your desired amount

    } catch (error) {
      console.error(`Error found: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value
    });
  };



  return (
    <div className="step-1">
      <div className="checkout">
        <h3>Basic Information</h3>
        <div className="form">
          <form action="" className='form1' onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                placeholder='Enter your first'
                name='firstName'
                value={customerInfo.firstName}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                placeholder='Enter your last'
                name='lastName'
                value={customerInfo.lastName}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                type="text"
                placeholder='Enter your Phone'
                name='phoneNumber'
                value={customerInfo.phoneNumber}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              Email Address:
              <input
                type="email"
                placeholder='Enter your email'
                name='email'
                value={customerInfo.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="shippingAddress">
              Shipping Address:
              <input
                type="text"
                placeholder='Your Shipping Address'
                name='shippingAddress'
                value={customerInfo.shippingAddress}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="address">
              Address:
              <input
                type="text"
                placeholder='Enter your address'
                name='address'
                value={customerInfo.address}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Proceed to pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut_page;
