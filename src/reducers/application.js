import * as actions from '../actions'
import createReducer from './_create_reducers'

const startSpinner = (state, { payload }) => {
  return Object.assign({}, state, {isSpinnerOn: true})
}

const stopSpinner = (state, {payload}) => {
  console.log('state', state)
  return Object.assign({}, state, {isSpinnerOn: false})
}

const handlers = {
  [actions.START_SPINNER]: startSpinner,
  [actions.STOP_SPINNER]: stopSpinner
}

export default createReducer({}, handlers)
