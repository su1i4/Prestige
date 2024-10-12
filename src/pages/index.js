import { Route, Routes } from "react-router-dom";
import { links } from "../lib/links";
import { MainPage } from "./MainPage";
import { RentPage } from "./RentPage";
import { AdvantagePage } from "./AdvantagePage";
import { FloorsPage } from "./FloorsPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainPage />} />
      <Route path={links.rent} element={<RentPage />} />
      <Route path={links.selling} element={<RentPage />} />
      <Route path={links.location} element={<AdvantagePage />} />
      <Route path={links.location} element={<AdvantagePage />} />
      <Route path={links.floors} element={<FloorsPage />} />
    </Routes>
  );
};
