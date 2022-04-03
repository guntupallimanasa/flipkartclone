import axios from '../helpers/axios';
import { productConstants } from './constants';

export const getProductsBySlug = (slug) => {
    return async (dispatch) => {

        const res = await axios.get(`/product/${slug}`)
       console.log(">>>res",res)
       if (res.status === 200) {
        dispatch({
            type: productConstants.GET_PRODUCTS_BY_SLUG,
            payload: res.data
        })
    } else {
        // if (res.status === 400) {
        //     dispatch({
        //         type: productConstants.GET_ALL_CATEGORIES_FAILURE,
        //         payload: {
        //             error: res.data.error
        //         }
        //     })
        // }
    }
    }
}

export const getProductsByPage = (payload) => {
    return async (dispatch) => {

        const {cid, type} = payload;

        const res = await axios.get(`/page/${cid}/${type}`)
        console.log('>>>>>>>>>>>>>>>>>',res)
        dispatch({
            type: productConstants.GET_PRODUCT_PAGE_REQUEST
        })
       if (res.status === 200) {
        dispatch({
            type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
            payload: res.data.page
        })
    } else {
        if (res.status === 400) {
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    }
}

