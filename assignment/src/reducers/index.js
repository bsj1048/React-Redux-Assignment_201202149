import * as types from '../actions/ActionTypes';

const initialState = {
  counter: 0,
  img: ['https://placeimg.com/150/150/animals/sepia', 'https://placeimg.com/150/150/people/sepia', 'https://placeimg.com/150/150/tech/sepia']
};

export default function slider(state = initialState, action) {
  switch (action.type) {
    case types.PREV:
      if(state.counter <= 0){
        return {...state, counter: state.img.length-1}
      }
      else{
        return {...state, counter: state.counter-1}
      }


    case types.NEXT:
      if(state.counter >= state.img.length-1){
        return {...state, counter: 0}
      }
      else{
        return {...state, counter: state.counter+1}
      }

    default:
      return state;
  }
}
