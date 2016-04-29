import * as actions from '../actions'
import createReducer from './_create_reducers'

const startSpinner = (state, { payload }) => {
  return {...state, isSpinnerOn: true}
}

const stopSpinner = (state, {payload}) => {
  return {...state, isSpinnerOn: false}
}

const handlers = {
  [actions.START_SPINNER]: startSpinner,
  [actions.STOP_SPINNER]: stopSpinner
}

export default createReducer({}, handlers)
