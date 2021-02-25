import React from 'react';
import * as classes from './footer.module.scss';
import { UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function footer(props) {
  const pathname = "/records/record";
  return (
    <footer className={classes.Footer}>
      <Link to={pathname}>
        <UserAddOutlined />
      </Link>
    </footer>
  );
}

export default footer;