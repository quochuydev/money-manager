import axios from "axios";
import { API_URL } from "../../config";
import { message } from "antd";

export const ADD_RECORD = "ADD_RECORD";
export const GET_RECORDS = "GET_RECORDS";
export const DELETE_RECORD = "DELETE_RECORD";
export const UPDATE_RECORD = "UPDATE_RECORD";

export const returnRecords = (records, error) => {
  return {
    type: GET_RECORDS,
    records: records,
    error: error,
  };
};

export const returnRecord = (record, error) => {
  return {
    type: UPDATE_RECORD,
    record: record,
    error: error,
  };
};

export const getRecords = () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  return (dispatch) => {
    axios
      .get(API_URL + "records.json?auth=" + user.idToken)
      .then((response) => {
        // console.log(response);
        let records = [];
        for (let key in response.data) {
          // console.log(response.data[key]);
          records.push({
            key: key,
            amount: response.data[key]["amount"],
            type: response.data[key]["type"],
            time: response.data[key]["time"],
            createdAt: response.data[key]["createdAt"],
          });
        }
        dispatch(returnRecords(records, false));
      })
      .catch((error) => {
        console.log(error.repsonse);
        dispatch(returnRecords([], true));
        message.error("Session expired, Please login.");
      });
  };
};

export const addRecord = (record) => {
  // console.log(record);
  const user = JSON.parse(localStorage.getItem("auth"));
  return (dispatch) => {
    axios
      .post(API_URL + "records.json?auth=" + user.idToken, record)
      .then((response) => {
        console.log("add record response: ", response);
        message.success("Success! Record information saved successfully.");
        dispatch(returnRecord({ response }, false));
      })
      .catch((error) => {
        console.log(error.repsonse);
        message.error(
          "Opps! Something went wrong. Unable to save record record."
        );
        dispatch(returnRecord(null, true));
      });
  };
};

export const updateRecord = (record) => {
  // console.log(record);
  const user = JSON.parse(localStorage.getItem("auth"));
  return (dispatch, getState) => {
    axios
      .put(
        API_URL + "records/" + record.key + ".json?auth=" + user.idToken,
        record
      )
      .then((response) => {
        // console.log('record update response:', response.data);
        // dispatch(returnRecord({ response.data }, false));
        let record = response.data;
        getState().records.forEach((stud) => {
          if (stud.key === record.key) {
            stud = record;
          }
        });
        // console.log(getState().records);
        message.success("Success! Record information saved successfully.");
        dispatch(returnRecord(record, false));
      })
      .catch((error) => {
        console.log(error.repsonse);
        message.error(
          "Opps! Something went wrong. Unable to save record record."
        );
        dispatch(returnRecords(getState().records, true));
      });
  };
};

export const deleteRecord = (record) => {
  const user = JSON.parse(localStorage.getItem("auth"));
  return (dispatch, getState) => {
    axios
      .delete(API_URL + "records/" + record.key + "/.json?auth=" + user.idToken)
      .then((response) => {
        // console.log(response);

        // FILTER THE RECORD LIST ONCE RECORD DELETED
        let records = getState().records.filter((stud) => {
          return stud.key !== record.key;
        });
        dispatch(returnRecords(records, false));

        // GET RECORDS FROM SERVER
        // dispatch(getRecords());

        message.success("Record record deleted.");
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(returnRecords(null, true));
        message.error(
          "Opps! Something went wrong. Unable to delete record record."
        );
      });
  };
};
