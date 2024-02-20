import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/modules/jsonSet";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Nav from "../components/common/Nav";
import { dbApi } from "../apis/api";

const Router = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);

  // useEffect(() => {
  //   fetch("http://localhost:3001/memo")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       dispatch(setData(json));
  //     });
  // }, []);

  useEffect(() => {
    dbApi.get().then((response) => dispatch(setData(response.data)));
    console.log(process.env);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route element={<Nav />}>
            <Route path="/" element={<Main />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        ) : (
          <>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
