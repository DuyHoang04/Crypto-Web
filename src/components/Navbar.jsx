import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar, Image } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BuildOutlined,
  MenuUnfoldOutlined,
  FundOutlined,
} from "@ant-design/icons";
import Logo from "../img/logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth); // xet width window bao nhiêu px

    window.addEventListener("resize", handleResize); // event resize-thay đổi kích thước width or height
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size="large" src={Logo} />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={(e) => setActiveMenu(!activeMenu)}
        >
          <MenuUnfoldOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/crypto">Crypto</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BuildOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
