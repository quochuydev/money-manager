import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  message,
  DatePicker,
} from "antd";
import * as classes from "./Record.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/record/actions";
import { types } from "../types";
import NumberFormat from "react-number-format";
import moment from "moment";

function Record(props) {
  const formRef = React.createRef();
  const user = JSON.parse(localStorage.getItem("auth"));
  const initRecord = {
    amount: 0,
    time: new Date(),
    type: null,
  }
  const [record, setRecord] = useState(props.location.state?.record || initRecord);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // console.log(props.location.state.record, loading);
  useEffect(() => {
    if (props.propError) {
      setLoading(false);
      message.error("Something went wrong. Unable to save record information.");
    }
  }, [props.propError]);

  useEffect(() => {
    if (props.propRecord && loading) {
      setLoading(false);
      props.history.push({ pathname: "/records" });
    }
  }, [props.propRecord]);

  const onFinish = () => {
    console.log("onFinish data : ", record);
    console.log("props.location.state : ", props.location.state);
    if (
      props.location.state &&
      props.location.state.record &&
      props.location.state.record.key
    ) {
      setLoading(true);
      props.onUpdate({
        ...record,
        updatedAt: new Date(),
        key: props.location.state.record.key,
      });
    } else {
      setLoading(true);
      props.onCreate({
        ...record,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      });
      setLoading(true);
    }
  };

  const onReset = () => {
    setRecord(initRecord)
  };

  return (
    <Row className={classes.FormContainer}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {error && msg}
          <Form
            name="basic"
            ref={formRef}
            name="control-ref"
            onFinish={onFinish}
          >
            <NumberFormat
              className="ant-input w-full"
              thousandSeparator={true}
              suffix={"đ"}
              style={{ textAlign: "right" }}
              value={record.amount}
              onValueChange={(e) => {
                setRecord({ ...record, amount: e.floatValue });
              }}
            />
            <br />
            <DatePicker
              className="m-t-md w-full"
              name="time"
              onChange={(e) => setRecord({ ...record, time: new Date(e) })}
              defaultValue={
                record.time ? moment(record.time, "YYYY-MM-DD") : null
              }
            />
            <br />
            <Select
              className="m-t-md w-full"
              label="Type"
              name="type"
              placeholder="Type"
              onChange={(e) => {
                setRecord({ ...record, type: e });
              }}
            >
              {types.map((e) => (
                <Select.Option key={e.id} value={e.id}>
                  {e.name}
                </Select.Option>
              ))}
            </Select>
            <br />
            <Button
              className="m-t-md"
              type="primary"
              htmlType="submit"
              disabled={loading}
              loading={loading}
            >
              {loading ? "Saving.." : "Submit"}
            </Button>
          </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => {
  return {
    propRecord: state.record,
    propError: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (record) => dispatch(actions.addRecord(record)),
    onUpdate: (record) => dispatch(actions.updateRecord(record)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
