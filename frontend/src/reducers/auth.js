import {
  SIGNUP_SUCCESS,
  SIGIN_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.access)
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.access,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      }
    case SIGIN_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      }
    default:
      return state
  }
}
