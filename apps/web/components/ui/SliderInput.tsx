import React, { ComponentProps } from "react";

interface SliderInputProps {
  label?: string;
}

export default function SliderInput(
  props: SliderInputProps & ComponentProps<"input">
) {
  const { label, ...rest } = props;

  return (
    <div className="flex items-center">
      {label && <label className="mr-2 min-w-16 text-gray-700">{label}</label>}
      <input {...rest} type="range" />
    </div>
  );
}
