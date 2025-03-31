import { describe, test, expect } from '@jest/globals'
import { types } from '../../../src/auth'

describe('Test in types.js', () => {

    test('should return this types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })

    })

})
