import { Col, Row } from "antd";
import ActionBar from "../ui/ActionBar";
import FormInput from "../forms/FormInput";
import FormDatepicker from "../forms/FormDatepicker";
import FormSelectField from "../forms/FormSelectField";
import { bloodgroups } from "@/constants/global";
import FormtTextarea from "../forms/FormTextarea";

const StudenBasictInfo = () => {
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
        Basic Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="email"
            name="student.email"
            size="large"
            label="Email Address"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="number"
            name="student.contactNo"
            size="large"
            label="Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="number"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormDatepicker
            name="student.dateOfBirth"
            size="large"
            label="Date of Birth"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            size="large"
            name="student.bloodGroup"
            options={bloodgroups}
            label="Blood Group"
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.designation"
            size="large"
            label="Designation"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormtTextarea
            name="student.presentAddress"
            label="Present Address"
            rows={4}
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormtTextarea
            name="student.permanentAddress"
            label="Permanent Address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudenBasictInfo;
