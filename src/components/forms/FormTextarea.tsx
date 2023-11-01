"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface TextAreaProps {
  name: string;
  label?: string;
  rows?: number;
  value?: string | string[] | number;
  placeholder?: string;
}

const FormtTextarea = ({
  name,
  label,
  rows,
  value,

  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormtTextarea;
