"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.service";
import { IDProps } from "@/types";
import { Button, Col, Row, message } from "antd";

const EditDepartment = ({ params }: IDProps) => {
  const { role } = getUserInfo() as any;
  const { id } = params;
  const [updateDepartment] = useUpdateDepartmentMutation();
  const { data, isLoading } = useDepartmentQuery(id);

  //   console.log(data);

  const onSubmit = async (data: any) => {
    message.loading("Updating...");

    try {
      await updateDepartment({ data, id });
      message.success("Department Updated Successfully");
    } catch (error: any) {
      console.log(error.message);
      message.error(error.message);
    }
  };

  const defaultValue = {
    title: data?.title || "",
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
            label: `department`,
            link: `/${role}/department`,
          },
        ]}
      />

      <ActionBar title="Edit Department" />

      <Form submitHandler={onSubmit} defaultValues={defaultValue}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartment;
