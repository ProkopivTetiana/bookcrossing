import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecoveryPassword from "./pages/Auth/RecoveryPassword/RecoveryPassword";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import AdvertisementList from "./pages/AdvertisementList/AdvertisementList";
import Profile from "./pages/Profile/Profile";
import Advertisement from "./pages/Advertisement/Advertisement";
import CreateAdvertisement from "./pages/CreateAdvertisement/CreateAdvertisement";

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
          path="/advertisements/:list"
          element={<PrivateRoute component={AdvertisementList} />}
        />
        <Route
          path="/advertisements/:list/:name/:id"
          element={<PrivateRoute component={AdvertisementList} />}
        />
        <Route
          path="/advertisement/:id"
          element={<PrivateRoute component={Advertisement} />}
        />
        {/* <Route
          path="/Advertisement/:id/edit"
          element={<PrivateRoute component={Advertisement} />}
        /> */}

        <Route
          path="/create-advertisement"
          element={<PrivateRoute component={CreateAdvertisement} />}
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
