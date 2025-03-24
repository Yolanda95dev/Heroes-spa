import { Link, NavLink, useNavigate } from 'react-router-dom'

export const NavBar = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/login',{
            replace: true
        })
    }

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary p-2" data-bs-theme="dark">


            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Asociaciones</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/marvel">
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/dc">
                            DC
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/hero">
                            Hero
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/search">
                            Search
                        </NavLink>

                    </div>
                </div>

                <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                    <ul className='navbar-nav ml-auto'>

                        <span className='nav-item nav-link text-primary'>
                            Yolanda
                        </span>

                        <button
                            className='nav-item nav-link btn'
                            onClick={onLogout}>
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>

    )
}


export default NavBar


