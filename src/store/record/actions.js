import axios from "axios";
import { API_URL } from "../../config";
import { message } from "antd";

export const ADD_STUDENT = "ADD_STUDENT";
export const GET_STUDENTS = "GET_STUDENTS";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";

export const returnRecords = (records, error) => {
  return {
    type: GET_STUDENTS,
    records: records,
    error: error,
  };
};

export const returnRecord = (record, error) => {
  return {
    type: UPDATE_STUDENT,
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
            name: response.data[key]["name"],
            dob: response.data[key]["dob"],
            gender: response.data[key]["gender"],
            email: response.data[key]["email"],
            // address: response.data[key]['address'],
            class: response.data[key]["class"],
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

        // FILTER THE STUDENT LIST ONCE RECORD DELETED
        let records = getState().records.filter((stud) => {
          return stud.key !== record.key;
        });
        dispatch(returnRecords(records, false));

        // GET STUDENTS FROM SERVER
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
