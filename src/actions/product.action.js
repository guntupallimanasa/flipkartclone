import axios from '../helpers/axios';
import { productConstants } from './constants';

export const getProductsBySlug = (slug) => {
    return async (dispatch) => {

        const res = await axios.get(`/products/${slug}`)
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

        const { cid, type } = payload;

        const res = await axios.get(`/page/${cid}/${type}`)
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

export const getProductsDetailsByID = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST
        })
        let result;
        try {
            const { productId } = payload.params
            result = await axios.get(`/product/${productId}`)
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: result.data.product }
            })

        } catch (error) {
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: {
                    error: result.data.error
                }
            })
        }

    }
}

