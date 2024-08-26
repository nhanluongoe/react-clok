import { ComponentProps } from "react";

interface ColorInputProps {
  label?: string;
}

export default function ColorInput(
  props: ColorInputProps & ComponentProps<"input">
) {
  const { label, ...rest } = props;

  return (
    <div className="flex items-center">
      {label && <label className="mr-2 min-w-16 text-gray-700">{label}</label>}
      <input {...rest} type="color" />
    </div>
  );
}
