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
import { useAdminQuery, useUpdateAdminMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";

import { getUserInfo } from "@/services/auth.service";
import { IDProps } from "@/types";

import { Button, Col, Row, message } from "antd";

const EditAdmin = ({ params }: IDProps) => {
  const { role } = getUserInfo() as any;
  const { id } = params;
  const [updateAdmin] = useUpdateAdminMutation();
  const { data: adminData, isLoading } = useAdminQuery(id);

  const { data: departmentData } = useDepartmentsQuery({ limit: 10, page: 1 });

  // @ts-ignore
  const departments: IDepartment[] = departmentData?.departments;

  const departmentOptions = departments?.map((department) => {
    return {
      label: department?.title,
      value: department?.id,
    };
  });

  const onSubmit = async (values: any) => {
    message.loading("Updating...");

    try {
      const res = await updateAdmin({ id, body: values }).unwrap();
      // console.log(res);
      if (res?.id) {
        message.success("Admin Successfully Updated!");
      }
    } catch (error: any) {
      console.log(error.message);
      message.error(error.message);
    }
  };

  const defaultValues = {
    name: {
      firstName: adminData?.name?.firstName || "",
      lastName: adminData?.name?.lastName || "",
      middleName: adminData?.name?.middleName || "",
    },
    dateOfBirth: adminData?.dateOfBirth || "",
    email: adminData?.email || "",
    designation: adminData?.designation || "",
    contactNo: adminData?.contactNo || "",
    emergencyContactNo: adminData?.emergencyContactNo || "",
    permanentAddress: adminData?.permanentAddress || "",
    presentAddress: adminData?.presentAddress || "",
    bloodGroup: adminData?.bloodGroup || "",
    gender: adminData?.gender || "",
    managementDepartment: adminData?.managementDepartment?.id || "",
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
            label: `admin`,
            link: `/${role}/admin`,
          },
        ]}
      />

      <ActionBar title="Edit Admin" />

      {/* <Form submitHandler={onSubmit} defaultValues={defaultValue}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form> */}

      <div>
        <Form
          submitHandler={onSubmit}
          // resolver={yupResolver(adminSchema)}
          defaultValues={defaultValues}
        >
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
              Admin Information
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
                  type="text"
                  name="name.firstName"
                  size="large"
                  label="First name"
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
                  name="name.middleName"
                  size="large"
                  label="Middle name"
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
                  name="name.lastName"
                  size="large"
                  label="Last name"
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
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
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
                  name="gender"
                  options={genderOptions}
                  label="Gender"
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
                <FormSelectField
                  size="large"
                  name="managementDepartment"
                  options={departmentOptions}
                  label="Department"
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
                <UploadImage name="file" />
              </Col>
            </Row>
          </div>
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
                  name="email"
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
                  name="contactNo"
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
                  name="emergencyContactNo"
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
                  name="dateOfBirth"
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
                  name="bloodGroup"
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
                  name="designation"
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
                  name="presentAddress"
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
                  name="permanentAddress"
                  label="Permanent Address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>

          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditAdmin;
