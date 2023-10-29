import { React, useState } from 'react'
import "./Card.css"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../CardReducer/CardReducer';
import useFetch from '../../Hook/useFetch';

const Card = ({ item }) => {

    const [quantity, setquantity] = useState(1);
    const id = useParams().id
    const { data, error, loading } = useFetch(`/products/${id}?populate=*`)

    const dispatch = useDispatch()
    return (

        <Link class="pro" to={`/product/${item.id}`}>
            <img src={process.env.REACT_APP_API_UPLOAD + item?.attributes?.img?.data?.attributes?.url} alt="" />
            <div class="description">
                <span>Model 05</span>
                <h5>{item?.attributes?.title} </h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>{item?.attributes?.Price}</h4>
            </div>
            <div onClick={() => {
                if (data && data.id) {
                    dispatch(addToCart({
                        id: data.id,
                        // other properties...
                        quantity
                    }));
                }
            }}>
                <i className="fa fa-shopping-cart cart"></i>
            </div>

        </Link>


    )
}
export default Card
