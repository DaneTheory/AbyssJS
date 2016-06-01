/*==============================================================================
                               REDUCER TWO
                            ------------------
                            Reducer Two File
==============================================================================*/
import * as types  from '../constants/ActionTypes'
import { InitialStateTwo } from './InitialState'

const ReducerTwo = function(state = InitialStateTwo, action) {
  switch(action.type) {
    case types.ANOTHER_TEST_ACTION:
      return Object.assign({}, state, { items: state.items.concat(action.item) });
  }
  return state;
}

export default ReducerTwo;
