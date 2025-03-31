import { describe, test, expect, jest, beforeEach } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import { AuthContext } from '../../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { NavBar } from '../../../src/ui'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Tests in <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Juan',
            id: '123'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('should show user name logged ', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Juan')).toBeTruthy()

    })

    test('should call logout and navigate when click on the button', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByLabelText('btn-logout')
        fireEvent.click(logoutBtn)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true })
    })

})
