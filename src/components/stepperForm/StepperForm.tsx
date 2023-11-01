"use client";

import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProps, FormProvider, useForm } from "react-hook-form";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}
interface IStepProps {
  steps: ISteps[];
  submitHandler: (el: any) => void;
}

const StepperForm = ({ steps, submitHandler }: IStepProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <>
      <Steps
        current={current}
        items={items}
        style={{
          marginBottom: "10px",
        }}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
