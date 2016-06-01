/*==============================================================================
                              ACTION CREATORS
                            ------------------
                          Action Creators Config File
                          Action Creator Function Names:
                          *) testAction(item)
                              Test action creator for running boilerplate.
                          *) anotherTestAction(item)
                              Another test action creator demonstrating mulitple
                              reducers for boilerplate usage.
==============================================================================*/
import * as types  from '../constants/ActionTypes'

export function testAction(item) {
  return {
    type: types.TEST_ACTION,
    item
  };
}

export function anotherTestAction(item) {
  return {
    type: types.ANOTHER_TEST_ACTION,
    item
  };
}
