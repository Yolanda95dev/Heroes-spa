import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth'
import { MemoryRouter,Route,Routes } from 'react-router-dom'

describe('Tests in <PublicRoute/>', () => {

    test('should show children if not authenticated', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Public Route')).toBeTruthy()

    })

    test('should navigate if authenticated', () => {
      
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )
    
        expect(screen.getByText('Página Marvel')).toBeTruthy()
    })
    

})
