import * as types from './ActionTypes';

export function onPrev(){
  return {
    type: types.PREV
  };
}

export function onNext(){
  return {
    type: types.NEXT
  };
}
