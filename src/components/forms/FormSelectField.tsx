"use client";

import { Input, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  options: SelectOptions[];
  name: string;

  size?: "large" | "small";
  value?: string | string[] | number;

  label?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  name,
  options,
  size,
  value,

  label,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            size={size}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
