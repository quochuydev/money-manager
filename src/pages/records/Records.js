import React from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import * as classes from "./Records.module.scss";

import { connect } from "react-redux";
import * as actions from "../../store/record/actions";

export class Records extends React.Component {
  user = JSON.parse(localStorage.getItem("auth"));
  cols = [
    /* {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        }, */
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Date of birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "x",
      render: (text, record) => (
        <Space>
          <Button
            htmlType="button"
            type="primary"
            onClick={() => this.onEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete?"
            // onConfirm={() => this.onDelete(record)}
            onConfirm={() => this.props.onDelete(record)}
            // onCancel={}
            okText="Delete"
            cancelText="No"
          >
            <Button className={classes.BtnDelete}>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      records: [],
      error: false,
      loading: false,
      message: "",
    };
  }

  onEdit = (record) => {
    console.log("onEdit", record);
    this.props.history.push({
      pathname: this.props.match.url + "/record",
      state: {
        record,
      },
    });
  };

  componentDidMount() {
    this.props.getRecords();
  }

  navigate = () => {
    const pathname = "/records/record";
    console.log(pathname);
    this.props.history.push({ pathname });
  };

  componentDidUpdate() {
    console.log(this.props);

    // Check if the action results error. Logout if the unauthorized
    /* if (this.props.propError) {
            localStorage.clear();
            this.props.history.push({ pathname: '/login' });
        } */
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.navigate}
          icon={<UserAddOutlined />}
          style={{ float: "right" }}
          type="primary"
        >
          Register Record
        </Button>
        <br />
        <h3>STUDENTS INFORMATION</h3>
        {/* <Table columns={this.cols} dataSource={this.state.records} bordered></Table> */}
        <Table
          columns={this.cols}
          dataSource={this.props.propRecords}
          bordered
        ></Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    propRecords: state.records,
    propError: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (record) => dispatch(actions.deleteRecord(record)),
    getRecords: () => dispatch(actions.getRecords()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);
