import { Route, Routes } from "react-router-dom"
import { links } from "../lib/links"
import { MainPage } from "./MainPage"

export const Routing = () => {
    return (
        <Routes>
            <Route path={links.main} element={<MainPage />} />
        </Routes>
    )
}