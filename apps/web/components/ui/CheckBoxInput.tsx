import React, { ComponentProps } from "react";

interface CheckBoxInputProps {
  label?: string;
}

export default function CheckBoxInput(
  props: CheckBoxInputProps & ComponentProps<"input">
) {
  const { label, ...rest } = props;

  return (
    <div className="flex items-center">
      {label && <label className="mr-2">{label}</label>}
      <input {...rest} type="checkbox" />
    </div>
  );
}