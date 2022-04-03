import { productConstants } from "../actions/constants";
import axios from '../helpers/axios';

const initialState = {
    products: [],
    productsByPrice: {
        under5K: [],
        under10K: [],
        under15K: [],
        under20K: [],
    },
    pageRequest: false,
    page: {},
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            return state = {
                ...state,
                loading: true,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }

            }
        case productConstants.GET_PRODUCT_PAGE_REQUEST:
            return state = {
                ...state,
                loading: true,
                pageRequest: true
            }
        case productConstants.GET_PRODUCT_PAGE_SUCCESS:
            return state = {
                ...state,
                loading: false,
                page: action.payload,
                pageRequest: false
            }

        case productConstants.GET_PRODUCT_PAGE_FAILURE:
            return state = {
                ...state,
                loading: false,
                pageRequest: false,
                error: action.payload.error

            }


        default: return state;
    }
}