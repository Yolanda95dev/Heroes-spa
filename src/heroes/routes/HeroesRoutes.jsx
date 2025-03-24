import { NavBar } from "../../ui"
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../../heroes'
import { Route, Routes, Navigate } from "react-router-dom"

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    {/* Search Hero by id */}

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>

        </>
    )
}

