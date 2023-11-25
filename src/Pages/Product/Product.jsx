import React from 'react'
import "./Product.scss"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hook/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../CardReducer/CardReducer"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useAuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
const Product = () => {

    const id = useParams().id;
    console.log(id)


    const { data, error, loading } = useFetch(`/products/${id}?populate=*`)
console.log(data)

    const [selectedImg, setselectedImg] = useState("img");
const navigate = useNavigate();

    const [quantity, setquantity] = useState(1);

    const dispatch = useDispatch();
const {user} = useAuthContext();
const handleAddToCart = () => {
    if (user) {
      dispatch(addToCart({
        id: data.id,
        img: data.attributes.img?.data.attributes.url,
        price: data.attributes.price,
        desc: data.attributes.desc,
        title: data.attributes.title,
        quantity
      }));
    } else {
      navigate('/login', { replace: true });
      message.error('please login the page')
    }
  };
  


    return (
        <>
           {error ? "error occured" : loading ? "please wait..." : <div className="product">
                <div className="left">
                    <div className="mainImg">
                        <img src={ data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>{data?.attributes?.title}</h1>
                    <span className="price">{data?.attributes?.Price}</span>
                    <p>{data?.attributes?.title}</p>
                    <div className="quantity">
                        <button onClick={() => setquantity(prev => prev + 1)}>+</button>
                        <h3>{quantity}</h3>
                        <button onClick={() => setquantity(prev => ((prev) === 1 ? 1 : prev - 1))}>-</button>
                    </div>

                    <button className="add" onClick={handleAddToCart}>
                        <AddShoppingCartIcon />
                    </button>
                    <div className="link">
                        <div className="item"><FavoriteBorderIcon />Add To <br/> WishList</div>
                        <div className="item"> <BalanceIcon />Add To <br/> COMPARE</div> 
                    </div>
                    <div className="info">
                        <span>vendor: Polo</span>
                        <span>Product Type: {data?.attributes?.title}</span>
                        <span>Tag: T-shirt, Women, Top</span>
                    </div>
                    <div className="infos">
                        <span>Description: {data?.attributes?.desc}</span>
                        <hr />
                        <span>Additional Information</span>
                        <hr />
                        <span>FAQ</span>
                    </div>

                </div>


            </div >}
        </>
    )
}

export default Product
