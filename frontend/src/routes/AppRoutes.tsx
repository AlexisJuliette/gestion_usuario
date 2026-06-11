import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "../pages/UserListPage";
import UserCreatePage from "../pages/UserCreatePage";
import UserEditPage from "../pages/UserEditPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/create" element={<UserCreatePage />} />
        <Route path="/edit/:id" element={<UserEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;