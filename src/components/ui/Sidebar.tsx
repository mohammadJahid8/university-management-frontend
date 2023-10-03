"use client";

import React, { useState } from "react";

import { Layout, Menu, theme } from "antd";
import { SidebarItems } from "@/constants/SidebarItems";

import { getUserInfo } from "@/services/auth.service";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="demo-logo-vertical">
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            margin: "1rem 0",
          }}
        >
          PH UNIVERSITY
        </h2>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
