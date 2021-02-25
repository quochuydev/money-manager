import React from "react";
import * as classes from "./Header.module.scss";
import { PageHeader, Menu } from "antd";
import {
  SnippetsOutlined,
  CodeOutlined,
  BarChartOutlined,
  LogoutOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
// import { MenuItem } from './menuitem/MenuItem';

class Header extends React.Component {
  state = {
    current: window.location.pathname,
  };

  navigate = (e) => {
    this.props.history.push(e.key);
    if (e.key === "/login") {
      localStorage.clear();
    } else {
      this.setState({ current: window.location.pathname });
    }
  };

  render() {
    const { current } = this.state;
    const menu = (
      <Menu
        onClick={this.navigate}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/" icon={<TeamOutlined />}>
          Records
        </Menu.Item>
        <Menu.Item
          key="/login"
          icon={<LogoutOutlined />}
          className={classes.Logout}
        >
          Logout
        </Menu.Item>
      </Menu>
    );
    return <PageHeader className={classes.AppHeader}>{menu}</PageHeader>;
  }
}

export default Header;
