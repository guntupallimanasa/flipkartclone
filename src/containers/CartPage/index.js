import React, { useEffect, useState } from 'react'
import { Card } from '../../../src/components/UI/Card'
import { Layout } from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { addToCart, getCartItems } from '../../actions';
/**
* @author
* @function CartPage
**/

export const CartPage = (props) => {
    const cart = useSelector(state => state.cartReducer);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState(cart.cartItems);

    useEffect(()=>{
        setCartItems(cart.cartItems)
    },[cart.cartItems])

    useEffect(()=>{
        if(auth.authenticate){
            dispatch(getCartItems())
        }
    },[auth.authenticate])

    const onQuantityIncrement = (_id, qty)=>{
        const { name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img},1))
    }

    const onQuantityDecrement = (_id, qty)=>{
        const { name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img},-1))
    }
   
    return (
        <Layout>
            <div className='cartContainer' style = {{alignItems:'flex-start'}}>
                <Card
                    headerLeft={`My Cart`}
                    headerRight={`Deliver to`}
                >
                    {
                        Object.keys(cartItems).map((key, index) => {
                            return (<CartItem
                                key={index}
                                cartItem={cartItems[key]}
                                onQuantityInc = {onQuantityIncrement}
                                onQuantityDec = {onQuantityDecrement}
                            >
                            </CartItem>)
                        })
                    }

                </Card>
                <Card
                headerLeft = 'Price'
                    style={{
                        width: '500px',
                    }}>
                    Price
                </Card>
            </div>
        </Layout>
    )

}