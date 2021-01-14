import {ADD_TO_CART} from '../actionTypes'


const initialState = {

}

export default (state = initialState, { type, payload }) => {
 switch (type) {

 case ADD_TO_CART:
  return { ...state, ...payload }

 default:
  return state
 }
}


