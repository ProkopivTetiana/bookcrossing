import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecoveryPassword from "./pages/Auth/RecoveryPassword/RecoveryPassword";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import AdvertismentList from "./pages/AdvertismentList/AdvertismentList";
import Profile from "./pages/Profile/Profile";
import Advertisment from "./pages/Advertisment/Advertisment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/recovery-password" element={<RecoveryPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/advertisments/:list"
          element={<PrivateRoute component={AdvertismentList} />}
        />
        <Route
          path="/advertisments/:list/:name/:id"
          element={<PrivateRoute component={AdvertismentList} />}
        />
        <Route
          path="/advertisment/:id"
          element={<PrivateRoute component={Advertisment} />}
        />

        <Route
          path="/profile/:id"
          element={<PrivateRoute component={Profile} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
