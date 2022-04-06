import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../../actions';
import './style.css';
import { generalPublicUrl } from '../../../urlConfig';
import { Link } from 'react-router-dom';
import { Card } from '../../../../src/components/UI/Card'
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
                    return (<Card
                        headerLeft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
                        headerRight={<button>View All</button>}
                        style = {{
                            margin: '20px',
                            width: 'calc(100%-40px)'
                        }}
                    >
                        <div style={{ display: "flex" }}>
                            {
                                product.productsByPrice[key].map(product =>
                                    <Link
                                        to={`/${product.slug}/${product._id}/p`}
                                        style={{ display: 'block' }}
                                        className='productContainer'>
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
                                    </Link>)
                            }
                        </div>
                    </Card>)
                })
            }
        </div>
    )

}