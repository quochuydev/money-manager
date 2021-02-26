import React from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import * as classes from "./Records.module.scss";
import moment from "moment";

import { connect } from "react-redux";
import * as actions from "../../store/record/actions";
import { types } from "./types";

import NumberFormat from "react-number-format";

function formatMoney(value) {
  if (!value) {
    value = 0;
  }
  return (
    <NumberFormat
      value={value}
      displayType={"text"}
      suffix={" đ"}
      thousandSeparator={true}
    />
  );
}
const sumValues = (array) => {
  return array.reduce((a, b) => a + (b["amount"] || 0), 0);
};
export class Records extends React.Component {
  user = JSON.parse(localStorage.getItem("auth"));
  cols = [
    {
      title: "Day",
      key: "day",
      render: (text, record) => (
        <span>
          {record && record["days"][0] && record["days"][0]["time"]
            ? moment(record["days"][0]["time"]).format("DD-MM-YYYY")
            : null}
        </span>
      ),
    },
    {
      title: "Total",
      key: "total",
      render: (text, record) => (
        <span className="float-right color-red bold">
          {formatMoney(sumValues(record.days))}
        </span>
      ),
    },
  ];

  subColumns = [
    {
      title: "type",
      dataIndex: "type",
      key: "type",
      render: (text, record) => (
        <span onClick={() => this.onEdit(record)}>
          {types.find((e) => e.id == record.type)
            ? types.find((e) => e.id == record.type)["name"]
            : null}
        </span>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text, record) => (
        <span className="float-right">
          <span onClick={() => this.onEdit(record)}>
            {formatMoney(record.amount)}
          </span>{" "}
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => this.props.onDelete(record)}
            okText="Delete"
            cancelText="No"
            placement="left"
          >
            <CloseOutlined className={classes.BtnDelete} />
          </Popconfirm>
        </span>
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
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <Table
          rowKey="day"
          dataSource={this.props.propRecords}
          columns={this.cols}
          size={"small"}
          pagination={false}
          scroll={{ x: "100%" }}
          showHeader={false}
          // expandIconColumnIndex={-1}
          defaultExpandAllRows={true}
          expandedRowRender={(record) => (
            <Table
              rowKey="key"
              columns={this.subColumns}
              dataSource={record.days}
              pagination={false}
              showHeader={false}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  function thisYear() {
    return new Date().getFullYear();
  }

  function thisMonth() {
    var d = new Date();
    var n = d.getMonth();
    return n + 1;
  }

  const records = state.records;

  let res = {};

  let fn = (year, month, o = res, array = records) => {
    o[month] = array.filter(({ time: d }) => {
      return d ? `${year}-${month}` === d.slice(5, 10) : false;
    }); // 0 7
  };

  for (let { time } of records) {
    if (time) {
      let [year, month, day] = time.match(/\d+/g);
      if (!res) res = {};
      fn(month, day);
    }
  }

  const propRecords = [];
  for (const [key, value] of Object.entries(res)) {
    propRecords.push({ day: key, days: value });
  }
  console.log(propRecords);

  return {
    propRecords,
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
