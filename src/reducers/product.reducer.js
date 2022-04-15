import { productConstants } from "../actions/constants";
import axios from "../helpers/axios";

const initialState = {
  products: [],
  priceRange: {},
  productsByPrice: {},
  pageRequest: false,
  page: {},
  error: null,
  productDetails: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      return (state = {
        ...state,
        loading: true,
        products: action.payload.products,
        priceRange: action.payload.priceRange,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
      });
    case productConstants.GET_PRODUCT_PAGE_REQUEST:
      return (state = {
        ...state,
        loading: true,
        pageRequest: true,
      });
    case productConstants.GET_PRODUCT_PAGE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        page: action.payload,
        pageRequest: false,
      });

    case productConstants.GET_PRODUCT_PAGE_FAILURE:
      return (state = {
        ...state,
        loading: false,
        pageRequest: false,
        error: action.payload.error,
      });
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      return (state = {
        ...state,
        loading: true,
        pageRequest: true,
      });
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails,
      });
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return (state = {
        ...state,
        loading: false,
        pageRequest: false,
        error: action.payload.error,
      });

    default:
      return state;
  }
};
