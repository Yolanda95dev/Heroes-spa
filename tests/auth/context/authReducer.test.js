import { describe, test, expect } from '@jest/globals'
import { authReducer, types } from '../../../src/auth'

describe('Test in authReducer', () => {

  test('should return default state', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('should call login, authenticate user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Juan',
        id: '123'
      }
    }

    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })

  test('should remove user name and logged = false  ', () => {
    const state = {
      logged: true,
      user: { id: '123', name: 'Juan' }
    }

    const action = {
      type: types.logout
    }

    const newState = authReducer(state, action)
    expect(newState).toEqual({ logged: false })
    
  })

})
