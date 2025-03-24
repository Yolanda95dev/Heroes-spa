import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'

export const SearchPage = () => {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if (searchText.trim().length <= 1) return
    navigate(`?q=${searchText}`.toLowerCase().trim())

  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} >
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>{searchParams.get("q")}</b>
          </div>

          {/* <HeroCard /> */}

        </div>
      </div>
    </>
  )
}

