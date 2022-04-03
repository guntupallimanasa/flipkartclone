import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../../actions';
import './style.css';
import { generalPublicUrl } from '../../../urlConfig';

/**
* @author
* @function ProductsStore
**/

export const ProductsStore = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer);

    const [priceRange, setPriceRange] = useState({
        under5K: 5000,
        under10K: 10000,
        under15K: 15000,
        under20K: 20000,
    })

    useEffect(() => {
        dispatch(getProductsBySlug(props.match.params.slug))
    }, [])

    return (
        <div>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (<div className='card'>
                        <div className='cardHeader'>
                            <div>{props.match.params.slug} under {priceRange[key]}</div>
                            <button>View All</button>
                        </div>
                        <div style={{ display: "flex" }}>
                            {
                                product.productsByPrice[key].map(product =>
                                    <div className='productContainer'>
                                        <div className='productImgContainer'>
                                            <img src={generalPublicUrl(product.productPictures[0].img)} alt="" />
                                        </div>
                                        <div className='productInfo'>
                                            <div style={{ margin: '5px 0' }}>{product.name}</div>
                                            <div>
                                                <span>4.3</span>&nbsp;
                                                <span>544</span>
                                            </div>
                                            <div className='productPrice'>{product.price}</div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>)
                })
            }
        </div>
    )

}