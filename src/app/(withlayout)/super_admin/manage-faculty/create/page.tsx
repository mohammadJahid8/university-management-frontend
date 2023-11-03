"use client";
import Form from "@/components/forms/Form";
import FormDatepicker from "@/components/forms/FormDatepicker";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormtTextarea from "@/components/forms/FormTextarea";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodgroups, genderOptions } from "@/constants/global";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";

const CreateStudent = () => {
  const { role } = getUserInfo() as any;

  const adminOnSubmit = async (values: any) => {};

  return (
    <div>
      <UMBreadCumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `manage-faculty`,
            link: `/${role}/manage-faculty`,
          },
        ]}
      />

      <ActionBar title="Create Faculty" />

      <Form submitHandler={adminOnSubmit}>
        {/* faculty information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Faculty information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={6} style={{ marginBottom: "10px" }}>
              <FormInput
                name="faculty.name.firstName"
                label="First name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ marginBottom: "10px" }}>
              <FormInput
                name="faculty.name.middleName"
                label="Middle name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ marginBottom: "10px" }}>
              <FormInput
                name="faculty.name.lastName"
                label="Last name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ marginBottom: "10px" }}>
              <FormInput
                type="password"
                name="password"
                label="Password"
                size="large"
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
                name="faculty.gender"
                options={genderOptions}
                label="Gender"
                placeholder="Select"
              />
            </Col>

            {/* <Col span={8} style={{ marginBottom: "10px" }}>
              <ACFacultyField
                name="faculty.academicFaculty"
                label="Academic Faculty"
              />
            </Col> */}
            {/* <Col span={8} style={{ marginBottom: "10px" }}>
              <ACDepartmentField
                name="faculty.academicDepartment"
                label="Academic Department"
              />
            </Col> */}

            <Col span={8} style={{ marginBottom: "10px" }}>
              <UploadImage />
            </Col>
          </Row>
        </div>
        {/* basic information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Basic information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ marginBottom: "10px" }}>
              <FormInput
                type="email"
                name="faculty.email"
                label="Email address"
                size="large"
              />
            </Col>

            <Col span={8} style={{ marginBottom: "10px" }}>
              <FormInput
                name="faculty.contactNo"
                label="Contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ marginBottom: "10px" }}>
              <FormInput
                name="faculty.emergencyContactNo"
                label="Emergency contact no."
                size="large"
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
                name="faculty.dateOfBirth"
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
                name="faculty.bloodGroup"
                options={bloodgroups}
                label="Blood Group"
                placeholder="Select"
              />
            </Col>

            <Col span={8} style={{ marginBottom: "10px" }}>
              <FormInput
                name="faculty.designation"
                label="Designation"
                size="large"
              />
            </Col>

            <Col span={12} style={{ marginBottom: "10px" }}>
              <FormtTextarea
                name="faculty.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col>

            <Col span={12} style={{ marginBottom: "10px" }}>
              <FormtTextarea
                name="faculty.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
