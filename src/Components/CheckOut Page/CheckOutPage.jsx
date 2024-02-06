import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import KhaltiCheckout from "khalti-checkout-web";


const CheckOutPage = () => {

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
        productUrl: "http://localhost:2700",
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
    <div className="flex flex-col sm:items-baseline gap-[10px] py-[40px] px-[20px]">
        <h3 className='font-ubuntu font-semibold'>Basic Information</h3>
        <div className="flex flex-col items-center sm:items-baseline px-[30px]">
          <form action="" className='sm:grid flex flex-col  6 sm:grid-cols-2  items-center sm:grid-rows-3 sm:items-start justify-start gap-y-3 gap-x-3 ' onSubmit={handleSubmit}>
            <label htmlFor="firstName" className={"flex flex-col items-start"}>
              First Name:
              <input
                type="text"
                placeholder='Enter your first'
                name='firstName'
                value={customerInfo.firstName}
                onChange={handleChange}
                className={`py-[7px] px-[8px] outline-none border-[1px] md:w-full sm:w-[270px] w-full  rounded-md border-black`}
              />
            </label>
            <label htmlFor="lastName" className={"flex flex-col items-start"}>
              Last Name:
              <input
                type="text"
                placeholder='Enter your last'
                name='lastName'
                value={customerInfo.lastName}
                onChange={handleChange}
                className={`py-[7px] px-[8px] outline-none border-[1px] md:w-full sm:w-[270px] w-full  rounded-md border-black`}
              />
            </label>
            <label htmlFor="phoneNumber" className={"flex flex-col items-start"}>
              Phone Number:
              <input
                type="text"
                placeholder='Enter your Phone'
                name='phoneNumber'
                value={customerInfo.phoneNumber}
                onChange={handleChange}
                className={`py-[7px] px-[8px] outline-none border-[1px] md:w-full sm:w-[270px] w-full  rounded-md border-black`}
              />
            </label>
            <label htmlFor="email" className={"flex flex-col items-start"}>
              Email Address:
              <input
                type="email"
                placeholder='Enter your email'
                name='email'
                value={customerInfo.email}
                onChange={handleChange}
                className={`py-[7px] px-[8px] outline-none border-[1px] rounded-md md:w-full sm:w-[270px] w-full  border-black`}
              />
            </label>
            <label htmlFor="shippingAddress" className={"flex flex-col items-start"}>
              Shipping Address:
              <input
                type="text"
                placeholder='Your Shipping Address'
                name='shippingAddress'
                value={customerInfo.shippingAddress}
                onChange={handleChange}
                className={`py-[7px] px-[8px] outline-none md:w-full sm:w-[270px] w-full  border-[1px] rounded-md border-black`}
              />
            </label>
            <label htmlFor="address" className={"flex flex-col items-start"}>
              Address:
              <input
                type="text"
                placeholder='Enter your address'
                name='address'
                value={customerInfo.address}
                onChange={handleChange}
                className={`py-[7px] px-[8px] outline-none  md:w-full sm:w-[270px] w-full border-[1px] rounded-md border-black`}
              />
            </label>
            <button type="submit" className='py-[5px] px-[8px] bg-blue-500 w-full rounded-sm hover:bg-blue-400'>Proceed to pay</button>
          </form>
        </div>
      </div>
 
  );
};

export default CheckOutPage;
