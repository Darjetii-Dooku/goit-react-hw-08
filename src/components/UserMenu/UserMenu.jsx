import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/authSlice";
import { selectUserData } from "../../redux/auth/selectors";

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(apiLogout());
  };
  return (
    <div>
      <div>
        <span>Welcome, {userData.name} </span>
        <button type="button" onClick={onLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;