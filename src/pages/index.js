import { Route, Routes } from "react-router-dom";
import { links } from "../lib/links";
import { MainPage } from "./MainPage";
import { RentPage } from "./RentPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainPage />} />
      <Route path={links.rent} element={<RentPage />} />
    </Routes>
  );
};
