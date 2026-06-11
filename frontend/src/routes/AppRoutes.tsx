import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "../pages/UserListPage";
import UserCreatePage from "../pages/UserCreatePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/create" element={<UserCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;