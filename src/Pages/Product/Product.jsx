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


    const [selectedImg, setselectedImg] = useState("img");

    const [quantity, setquantity] = useState(1);

    const dispatch = useDispatch();



    return (
        <>
           {error ? "error occured" : loading ? "please wait..." : <div className="product">
                <div className="left">
                    <div className="images">
                        <img src={ data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setselectedImg("img")} />
                        <img src={ data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setselectedImg("img")} />
                    </div>
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

                    <button className="add" onClick={() => dispatch(addToCart({
                        id: data.id,
                        img:data.attributes.img?.data.attributes.url,
                        price: data.attributes.price,
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


            </div >}
        </>
    )
}

export default Product
