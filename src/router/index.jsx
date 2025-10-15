import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components";
import { Home, Login, UserProfile } from "../pages"


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;