import React from "react";
import { Card, Form, Input, Button, Select, Row, Col, message } from "antd";
import * as classes from "./Record.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/record/actions";

class Record extends React.Component {
  formRef = React.createRef();
  user = JSON.parse(localStorage.getItem("auth"));
  state = {
    error: false,
    loading: false,
    message: "",
  };

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.record) {
      this.formRef.current.setFieldsValue({
        name: this.props.location.state.record.name,
        gender: this.props.location.state.record.gender,
        dob: this.props.location.state.record.dob,
        class: this.props.location.state.record.class,
        email: this.props.location.state.record.email,
      });
    }
  }

  componentDidUpdate() {
    // console.log(this.props);
    if (this.props.propError) {
      this.setState({ loading: false });
      message.error("Something went wrong. Unable to save record information.");
    } else if (this.props.propRecord) {
      this.setState({ loading: false });
      // message.success('Success! Record information saved successfully.');
      this.props.history.push({ pathname: "/records" });
    }
  }

  render() {
    // console.log(this.props);
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

    const onFinish = (formdata) => {
      // console.log('onFinish data : ', formdata);
      if (
        this.props.location.state &&
        this.props.location.state.record &&
        this.props.location.state.record.key
      ) {
        // updateRecord(data);
        this.setState({ loading: true });
        this.props.onUpdate({
          ...formdata,
          key: this.props.location.state.record.key,
        });
      } else {
        this.setState({ loading: true });
        this.props.onCreate(formdata);
      }
    };

    const onReset = () => {
      this.formRef.current.resetFields();
    };

    return (
      <Row className={classes.FormContainer}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card
            title="Record Registration Form"
            bordered={true}
            className={classes.Form}
          >
            {/* ERROR  MESSAGE*/}
            {this.state.error && this.state.message}

            {/* FORM */}
            <Form
              name="basic"
              ref={this.formRef}
              name="control-ref"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input type="text" placeholder="Name" maxLength="50" />
              </Form.Item>
              <Form.Item
                name="dob"
                rules={[
                  { required: true, message: "Date of birth is required" },
                ]}
              >
                <Input type="date" />
              </Form.Item>
              <Form.Item
                name="gender"
                rules={[{ required: true, message: "Gender is required" }]}
              >
                <Select label="Gender" placeholder="Gender">
                  <Select.Option value="Male">Male</Select.Option>
                  <Select.Option value="Female">Female</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input type="email" placeholder="Email" maxLength="50" />
              </Form.Item>
              <Form.Item
                name="class"
                rules={[{ required: true, message: "Class is required" }]}
              >
                <Input type="text" placeholder="Class" maxLength="3" />
              </Form.Item>
              <Form.Item style={{ float: "right" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={this.state.loading}
                  loading={this.state.loading}
                >
                  {this.state.loading ? "Saving.." : "Submit"}
                </Button>
                <Button
                  type="secondary"
                  htmlType="button"
                  style={{ marginLeft: "10px" }}
                  onClick={onReset}
                >
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
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
