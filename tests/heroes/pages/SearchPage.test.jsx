import { describe, test, expect, jest, beforeEach } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test in <SearchPage/>', () => {

    beforeEach(() => jest.clearAllMocks())

    test('should show correctly with default values ', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()


    })

    test('should show Batman and the input with the value of query', () => {

        const searchValue = 'batman'

        render(
            <MemoryRouter initialEntries={[`/search?q=${searchValue}`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('none')
    })

    test('should show the error if not found the hero (batman123)', () => {


        const searchValue = 'batman123'

        render(
            <MemoryRouter initialEntries={[`/search?q=${searchValue}`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('')
    })

    test('should call naigate to the new screen', () => {

        const inputValue = 'superman'

        render(
            <MemoryRouter initialEntries={['/search/']}>
                <SearchPage />
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } })

        const form = screen.getByLabelText('form')
        fireEvent.submit(form)

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
    })




})
