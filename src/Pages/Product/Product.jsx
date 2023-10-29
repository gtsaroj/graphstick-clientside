import React from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import "./Product.scss"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hook/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../CardReducer/CardReducer"
const Product = () => {

    const id = useParams().id;
    console.log(id)


    const { data, error, loading } = useFetch(`/products/${id}?populate=*`)


    const [selectedImg, setselectedImg] = useState("Img");

    const [quantity, setquantity] = useState(1);

    const dispatch = useDispatch();



    return (
        <>
            <div className="product">
                <div className="left">
                    <div className="images">
                        <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setselectedImg("Img")} />
                        <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setselectedImg("Img")} />
                    </div>
                    <div className="mainImg">
                        <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
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

                    <button className="add" onClick={() => dispatch(addToCart({
                        id: data.id,
                        Img: process.env.REACT_APP_API_UPLOAD + data.attributes.Img?.data.attributes.url,
                        Price: data.attributes.Price,
                        desc: data.attributes.desc,
                        title: data.attributes.title,
                        quantity

                    }))}>
                        <AddShoppingCartIcon />
                    </button>
                    <div className="link">
                        <div className="item"><FavoriteBorderIcon />Add To Wish List</div>
                        <div className="item"><BalanceIcon />Add To COMPARE</div>
                    </div>
                    <div className="info">
                        <span>vendor: Polo</span>
                        <span>Product Type: {data?.attributes?.title}</span>
                        <span>Tag: T-shirt, Women, Top</span>
                    </div>
                    <div className="info">
                        <span>Description: {data?.attributes?.desc}</span>
                        <hr />
                        <span>Additional Information</span>
                        <hr />
                        <span>FAQ</span>
                    </div>

                </div>


            </div >
        </>
    )
}

export default Product
