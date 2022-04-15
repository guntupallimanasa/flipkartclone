import axios from '../helpers/axios';
import { userConstants, cartConstants } from './constants';

export const getAddress = () => {
    return async (dispatch) => {

        const res = await axios.get(`/user/getAddress`)

        dispatch({
            type: userConstants.GET_USER_ADDRESS_REQUEST,
        })

        if (res.status === 200) {
            const {
                userAddress: {
                    address
                } } = res.data;
            dispatch({
                type: userConstants.GET_USER_ADDRESS_SUCCESS,
                payload: {
                    address
                }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }
    }
}

export const addAddress = (payload) => {
    return async (dispatch) => {

        const res = await axios.post(`/user/createAddress`,{payload})

        dispatch({
            type: userConstants.ADD_USER_ADDRESS_REQUSET,
        })

        if (res.status === 200) {
            const {
                address: {
                    address
                } } = res.data;
            dispatch({
                type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                payload: {
                    address
                }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }
    }
}

export const addOrder = (payload) => {
    return async (dispatch) => {
      try {
        const res = await axios.post(`/order/addOrder`, payload);
        dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
        if (res.status === 201) {
          const { order } = res.data;
          dispatch({
            type: cartConstants.RESET_CART,
          });
          dispatch({
            type: userConstants.ADD_USER_ORDER_SUCCESS,
            payload: { order },
          });
          // const {
          //   address: { address },
          // } = res.data;
          // dispatch({
          //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
          //   payload: { address },
          // });
        } else {
          const { error } = res.data;
          dispatch({
            type: userConstants.ADD_USER_ORDER_FAILURE,
            payload: { error },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const getOrders = () => {
    return async (dispatch) => {
      try {
        const res = await axios.get(`/order/getOrders`);
        dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
        if (res.status === 200) {
          const { orders } = res.data;
          dispatch({
            type: userConstants.GET_USER_ORDER_SUCCESS,
            payload: { orders },
          });
        } else {
          const { error } = res.data;
          dispatch({
            type: userConstants.GET_USER_ORDER_FAILURE,
            payload: { error },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  // single order with complete info and delivery location
  export const getOrder = (payload) => {
    return async (dispatch) => {
      try {
        const res = await axios.post(`/order/getOrder`, payload);
        dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
        if (res.status === 200) {
          const { order } = res.data;
          dispatch({
            type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
            payload: { order },
          });
        } else {
          const { error } = res.data;
          dispatch({
            type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
            payload: { error },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

