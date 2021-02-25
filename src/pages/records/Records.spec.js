import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Records } from "./Records";

configure({ adapter: new Adapter() });

describe("Records page table check", () => {
  const props = {
    propRecords: [
      {
        key: "1",
        name: "John Doe",
        gender: "Male",
        dob: "1992-12-12",
        class: "XI",
        email: "johndoe@gmail.com",
      },
    ],
    propError: false,
    getRecord: () => {},
    onDelete: ({}) => {},
  };

  let records = shallow(<Records {...props} />);
  it("should check if the table is present", () => {
    console.log(records.debug());
    // There must be only one <h1> for heading
    expect(records.find("Table")).toHaveLength(1);
  });

  it("should check if the register record button is present", () => {
    expect(records.find("Button").text()).toEqual("Register Record");
  });

  it("should check if the length of the records populated is equal to the length", () => {
    records = shallow(<Records {...props} />).instance();
    console.log(records);
    const total = records.props.propRecords.length;
    // There must be only one <h1> for heading
    expect(parseInt(total)).toBe(props.propRecords.length);
  });
});
