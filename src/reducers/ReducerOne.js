/*==============================================================================
                               REDUCER ONE
                            ------------------
                            Reducer One File
==============================================================================*/
import * as types  from '../constants/ActionTypes'
import { InitialStateOne } from './InitialState'

const ReducerOne = function(state = InitialStateOne, action) {
  switch(action.type) {
    case types.TEST_ACTION:
      return Object.assign({}, state, { items: state.items.concat(action.item) });
  }
  return state;
}

export default ReducerOne;
