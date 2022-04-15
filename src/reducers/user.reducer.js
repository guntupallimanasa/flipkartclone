import { userConstants } from "../actions/constants";

const initialState = {
  address: [],
  orders: [],
  orderDetails: {},
  error: null,
  loading: false,
  orderFetching: false,
  placedOrderId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_ADDRESS_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        address: action.payload.address,
      });
    case userConstants.GET_USER_ADDRESS_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
      
    case userConstants.ADD_USER_ADDRESS_REQUSET:
      return (state = {
        ...state,
        loading: true,
      });
    case userConstants.ADD_USER_ADDRESS_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        address: action.payload.address,
      });
    case userConstants.ADD_USER_ADDRESS_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });

    case userConstants.ADD_USER_ORDER_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case userConstants.ADD_USER_ORDER_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        placedOrderId: action.payload.order._id,
      });
    case userConstants.ADD_USER_ORDER_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });

    case userConstants.GET_USER_ORDER_REQUEST:
      return (state = {
        ...state,
        orderFetching: true,
      });
    case userConstants.GET_USER_ORDER_SUCCESS:
      return (state = {
        ...state,
        orders: action.payload.orders,
        orderFetching: false,
      });
    case userConstants.GET_USER_ORDER_FAILURE:
      return (state = {
        ...state,
        orderFetching: false,
        error: action.payload.error,
      });

    case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
      return (state = {
        ...state,
        orderFetching: true,
      });
    case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
      return (state = {
        ...state,
        orderDetails: action.payload.order,
      });
    case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
      return (state = {
        ...state,
        orderFetching: false,
        error: action.payload.error,
      });

    default:
      return state;
  }
};
