import { React, useState } from 'react'
import "./Card.css"
import { Link, useParams } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../CardReducer/CardReducer';
import useFetch from '../../Hook/useFetch';

const Card = ({ item }) => {

    const [quantity, setquantity] = useState(1);
    const id = useParams().id

    return (

        <Link class="pro" to={`/product/${item.id}`}>
            <img src={item?.attributes?.img?.data?.attributes?.url} alt="" />
            <div class="description">
                <span>Model 05</span>
                <h5>{item?.attributes?.title} </h5>
                <h4>{item?.attributes?.price}</h4>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
              
            </div>
            <div >
                <i className="fa fa-shopping-cart cart"></i>
            </div>

        </Link>


    )
}
export default Card
