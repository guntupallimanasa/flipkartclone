import React, { useEffect } from 'react'
import { getProductsByPage } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux'
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Card } from '../../../components/UI/Card';

/**
* @author
* @function ProductPage
**/

export const ProductPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer);
    const { page } = product;

    useEffect(() => {
        const params = getParams(props.location.search);
        dispatch(getProductsByPage(params))
    }, [])


    return (
        <div style={{ margin: '0 10px' }}>
            <h3>{page.title}</h3>
            <Carousel
                renderThumbs={() => { }}
            >
                {
                    page.banners && page.banners.map((banner, index) => {
                        return <a
                            key={index}
                            style={{ display: 'block' }}
                            href={banner.navigateTo}
                        >
                            <img src={banner.img} alt="" />
                        </a>
                    })
                }
            </Carousel>
            <div style = {{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '10px 0'
            }}>
                {
                    page.products && page.products.map((product, index) => {
                        return <Card
                                key = {index}
                                style = {{
                                    width: '400px',
                                    height: '200px',
                                    margin: '0 5px'
                                }}
                        >
                            <img style = {{
                                width: '100%',
                                height: '100%',

                            }} src={product.img} alt="" />
                        </Card>
                    })
                }
            </div>
        </div>
    )

}