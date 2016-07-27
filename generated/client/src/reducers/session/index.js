'use strict'

import {
  LOAD, LOAD_SUCCESS, LOAD_FAILURE,
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../../actions/auth'

const initialState = {
  loaded: false
}

export default function session (state = initialState, action = {}) {

  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        loadError: null
      }
    case SIGNUP:
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        loading: true,
        error: null
      }
    case LOAD_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result.user
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        user: null
      }
    case LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        loadError: action.error.response
      }
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.response
      }
    default:
      return state
  }

}
