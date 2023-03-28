import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecoveryPassword from './pages/Auth/RecoveryPassword/RecoveryPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

        </Routes>
    </BrowserRouter>
  );
};

export default App;
