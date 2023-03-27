import React from "react";
import styled from "styled-components";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdCorporateFare } from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  ContainerOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  DashOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const item1 = [
  getItem("YOUR COMPANY", "1", <MdCorporateFare size="18px" />),
  getItem("Dashboard", "sub1", <AiOutlineDashboard size="15px" />, [
    getItem("Dashboard Light", "2"),
    getItem("Dashboard Dark", "3"),
  ]),

  getItem("Employees", "4", <PieChartOutlined />),
  getItem("Core HR", "5", <DesktopOutlined />),
  getItem("Finance", "6", <ContainerOutlined />),
  getItem("Tasks", "7", <ContainerOutlined />),
  getItem("Performance", "8", <ContainerOutlined />),
  getItem("Projects", "9", <ContainerOutlined />),
  getItem("Reports", "10", <ContainerOutlined />),
  getItem("Manage Clients", "11", <ContainerOutlined />),
];
const item2 = [
  getItem("OUR FEATURES", "1", <RiAppsLine size="18px" />),
  getItem("Apps", "2", <PieChartOutlined />),
  getItem("Charts", "3", <DesktopOutlined />),
  getItem("Bootstrap", "4", <ContainerOutlined />),
  getItem("Plugins", "5", <ContainerOutlined />),
  getItem("Widget", "6", <ContainerOutlined />),
  getItem("Forms", "7", <ContainerOutlined />),
  getItem("Table", "8", <ContainerOutlined />),
  getItem("Pages", "9", <ContainerOutlined />),
];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <ToggleButton
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: "-80px",
          position: "relative",
          left: "258px",
          bottom: "42.5px",
          height: "40px",
          color: "gray",
          borderRadius: "none !important",
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </ToggleButton>
      {/* <Sidebartitle>YOUR COMPANY</Sidebartitle> */}

      <Menu
        style={{ position: "relative", bottom: "26px" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={item1}
      />
      {/* <Sidebartitle>OUR FEATURES</Sidebartitle> */}
      <Menu
        style={{ position: "relative", bottom: "26px" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={item2}
      />
    </div>
  );
};

const ToggleButton = styled(Button)`
  background-color: black;
`;

const Sidebartitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: #1677ff;
  margin: 8px 115px 8px 0;
`;

export default Sidebar;
