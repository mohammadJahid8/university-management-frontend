"use client";

import { Button, Col, Row } from "antd";

import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUseLoginMutation } from "@/redux/api/authApi";
import {
  getUserInfo,
  isLoggedIn,
  storeUserInfo,
} from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUseLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({
        ...data,
      }).unwrap();

      if (res?.data?.accessToken) {
        router.push("/profile");
      }

      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} alt="login" width={500} />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First Login you account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>

            <Button type="primary" htmlType="submit" size="large">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
