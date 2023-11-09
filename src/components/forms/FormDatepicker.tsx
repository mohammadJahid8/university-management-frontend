"use client";

import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type UMDatePickerProps = {
  onChange?: (valueOne: Dayjs | null, valueTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const FormDatepicker = ({
  onChange,
  name,
  label,
  size,
  value,
}: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;

    console.log(name, dateString);
    setValue(name, dateString);
  };

  return (
    <>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            // defaultValue={dayjs(field.value) || value}
            // defaultValue={value}
            onChange={handleOnChange}
            size={size}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormDatepicker;
