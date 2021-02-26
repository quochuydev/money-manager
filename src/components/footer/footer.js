import React from "react";
import * as classes from "./footer.module.scss";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function footer(props) {
  const pathname = "/records/record";
  return (
    <footer className={classes.Footer}>
      <Link to={pathname}>
        <PlusCircleOutlined width={300} />
      </Link>
    </footer>
  );
}

export default footer;
