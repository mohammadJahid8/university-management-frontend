"use client";

import { Col, Row } from "antd";
import FormInput from "../forms/FormInput";

const StudentLocalGuardianInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Local Guardian Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.localGuardianName"
            size="large"
            label="Local Guardian name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.localGuardianOccupation"
            size="large"
            label="Local Guardian occupation"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="number"
            name="student.localGuardianContactNo"
            size="large"
            label="Local Guardian contact no."
          />
        </Col>

        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.localGuardianAddress"
            size="large"
            label="Local Guardian Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentLocalGuardianInfo;
