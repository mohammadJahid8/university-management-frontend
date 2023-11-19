"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";

import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

const CreateFaculty = () => {
  const { role } = getUserInfo() as any;

  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating...");

    try {
      const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Academic Faculty added Successfully");
      }
    } catch (error: any) {
      console.log(error.message);
      message.error(error.message);
    }
  };

  return (
    <div>
      <UMBreadCumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `academic`,
            link: `/${role}/academic/faculty`,
          },
        ]}
      />

      <ActionBar title="Create Faculty" />

      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateFaculty;
