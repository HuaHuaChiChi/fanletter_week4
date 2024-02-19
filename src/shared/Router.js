import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux/modules/jsonSet";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/memo")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setData(json));
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
