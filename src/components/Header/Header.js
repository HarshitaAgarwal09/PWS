import "./Header.css";
import React, { useState } from "react";
import { Icon } from "antd";
import { Menu } from "antd";
const { SubMenu } = Menu;

function Header(props) {
  const [is_login, setLogin] = useState(true);
  const ToggleLogin = () => {
    setLogin(!is_login);
  };

  const [current, setCurrent] = useState("mail");

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src="" alt="LOGO" />
      </div>
      <div className="header-menu">
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            backgroundColor: " #db222a",
            color: " white",
            border: "none"
          }}
        >
          <Menu.Item key="notification">
            <Icon type="mail" />
            Notifications
          </Menu.Item>

          <Menu.Item key="orders">
            <Icon type="appstore" />
            Offers
          </Menu.Item>

          <button className="header-login-btn">Login</button>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <i className="fa fa-user-circle" aria-hidden="true" />
              </span>
            }
          >
            <Menu.Item key="setting:1">Wallet</Menu.Item>
            <Menu.Item key="setting:2">My Profile</Menu.Item>
            <Menu.Item key="setting:3">My Orders</Menu.Item>
            <Menu.Item key="setting:4">Past Events</Menu.Item>
            <Menu.Item key="setting:5">Support</Menu.Item>
            <Menu.Item key="setting:6">Newsfeed</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
