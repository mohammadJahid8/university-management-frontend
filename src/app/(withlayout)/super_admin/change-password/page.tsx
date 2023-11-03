"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";

const ResetPasswordPage = () => {
  const { role } = getUserInfo() as any;
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
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
            label: `change-password`,
            link: `/${role}/change-password`,
          },
        ]}
      />

      {/* <ActionBar title="Reset password " /> */}
      <div
        style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
      >
        <Form submitHandler={onSubmit}>
          <ActionBar title="Reset password " />
          <div style={{ margin: "5px 0" }}>
            <FormInput
              name="oldPassword"
              label="Old password"
              type="password"
            />
          </div>
          <div style={{ margin: "5px 0" }}>
            <FormInput
              name="newPassword"
              label="New password"
              type="password"
            />
          </div>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
