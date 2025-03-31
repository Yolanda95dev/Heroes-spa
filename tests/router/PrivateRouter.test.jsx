import { describe, test, expect, jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { AuthContext } from '../../src/auth'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Tests in <PrivateRoute/>', () => {

    test('should show children if  authenticated', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private Route')).toBeTruthy()
        expect( localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman")

    })


})
