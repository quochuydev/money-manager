import React from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import * as classes from "./Records.module.scss";

import { connect } from "react-redux";
import * as actions from "../../store/record/actions";
import { types } from './types'

export class Records extends React.Component {
  user = JSON.parse(localStorage.getItem("auth"));
  cols = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt",
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
      pathname: "/records/record",
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
    this.props.history.push({ pathname });
  };

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Table
          columns={this.cols}
          dataSource={this.props.propRecords}
          bordered
          scroll={{ x: '100%' }}
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
