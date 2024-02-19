import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/modules/userSlice";
import styled from "styled-components";

export default function Nav() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);
  return (
    <>
      <NavigateBar>
        <Link to="/">
          <NavText>HOME</NavText>
        </Link>
        <section>
          <Link to="/profile">
            <NavText>내 프로필</NavText>
          </Link>

          <NavText onClick={() => dispatch(logout())}>로그아웃</NavText>
        </section>
      </NavigateBar>
      <Outlet />
    </>
  );
}

const NavigateBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background-color: #2e2e2e;
  padding: 12px 0;
  & div {
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
  & section {
    display: flex;
    gap: 12px;
  }
`;

const NavText = styled.p`
  color: white;
`;
