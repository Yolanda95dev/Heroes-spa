import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'




describe('Tests in <AppRouter/>', () => {

    test('should show login if not authenticated', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )


        expect(screen.getAllByText('Login').length).toBe(2)
    })


    test('should show the component of Marvel if authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: '134'
            }
        }
        render(
            <MemoryRouter initialEntries={['/login']} >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter >
        )

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)

    })

})


