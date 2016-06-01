/*==============================================================================
                               ROOT REDUCER
                            ------------------
                   **Main Reducer used in Redux store.**
                      Reducers Used:
                      1.) ReducerOne
                            Actions:
                              testAction(items)
                      1.) ReducerTwo
                            Actions:
                              anotherTestAction(items)
==============================================================================*/
import { combineReducers } from 'redux'
import ReducerOne  from './ReducerOne'
import ReducerTwo  from './ReducerTwo'


const rootReducer = combineReducers({
  ReducerOne,
  ReducerTwo
});

export default rootReducer;
