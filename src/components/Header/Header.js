import "./Header.css";
import React, { useState } from "react";
import { Button, Icon } from "antd";

function Header(props) {
  const [is_login, setLogin] = useState(true);
  const ToggleLogin = () => {
    setLogin(!is_login);
  };
  return (
    <div className="HeaderContainer">
      <div className="HeaderLogoContainer">
        {/* <img src="" alt="logo" width="100%" /> */}
        Logo
      </div>
      <div className="HeaderMenuContainer">
        {is_login ? (
          <button className="HeaderBtn" onClick={ToggleLogin}>
            Login
          </button>
        ) : (
          <div className="HDropdown">
            <button className="HeaderBtn">
              <Icon type="unordered-list" />
            </button>
            {/*
            <div className="HDcontent">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Logout</a>
            </div>*/}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
