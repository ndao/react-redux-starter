import * as actions from '../actions'

export function startSpinner () {
  return {
    type: actions.START_SPINNER
  }
}

export function stopSpinner () {
  return {
    type: actions.STOP_SPINNER
  }
}
