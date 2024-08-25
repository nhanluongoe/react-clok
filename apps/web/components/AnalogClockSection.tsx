"use client";

import SliderInput from "@/components/ui/SliderInput";
import { AnalogClock } from "react-clok";
import { useForm, useWatch } from "react-hook-form";
import CheckBoxInput from "./ui/CheckBoxInput";
import ColorInput from "./ui/ColorInput";

export default function AnalogClockSection() {
  const { register, getValues, control } = useForm({
    defaultValues: {
      frameSize: 300,
      frameColor: "#000000",
      frameWidth: 6,
      frameShadow: true,
      hourHandLength: 30,
      hourHandWidth: 12,
      hourHandColor: "#000000",
      minuteHandLength: 40,
      minuteHandWidth: 10,
      minuteHandColor: "#000000",
      secondHandLength: 43,
      secondHandWidth: 4,
      secondHandColor: "darkred",
      centerPartColor: "#000000",
      centerPartSize: 5,
      primaryMarkWidth: 6,
      primaryMarkColor: "#000000",
      primaryMarkShow: true,
      secondaryMarkWidth: 3,
      secondaryMarkColor: "#000000",
      secondaryMarkShow: true,
      markNumberSize: "1.75rem",
      markNumberColor: "#000000",
      markNumberShow: true,
    },
  });

  const {
    frameSize,
    frameColor,
    frameWidth,
    frameShadow,
    hourHandLength,
    hourHandWidth,
    hourHandColor,
    minuteHandLength,
    minuteHandWidth,
    minuteHandColor,
    secondHandLength,
    secondHandWidth,
    secondHandColor,
    centerPartColor,
    centerPartSize,
    primaryMarkWidth,
    primaryMarkColor,
    primaryMarkShow,
    secondaryMarkWidth,
    secondaryMarkColor,
    secondaryMarkShow,
    markNumberSize,
    markNumberColor,
    markNumberShow,
  } = getValues();

  useWatch({
    control,
  });

  return (
    <div className="my-6">
      <h2 className="text-center">Analog Clock</h2>
      {/* Frame settings */}
      <div className="flex flex-col">
        <div className="mx-auto my-6">
          <AnalogClock
            frame={{
              size: `${frameSize}px`,
              color: frameColor,
              width: `${frameWidth}px`,
              boxShadow: frameShadow ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
            }}
            hourHand={{
              length: `${hourHandLength}%`,
              width: `${hourHandWidth}px`,
              color: hourHandColor,
            }}
            minuteHand={{
              length: `${minuteHandLength}%`,
              width: `${minuteHandWidth}px`,
              color: minuteHandColor,
            }}
            secondHand={{
              length: `${secondHandLength}%`,
              width: `${secondHandWidth}px`,
              color: secondHandColor,
            }}
            center={{
              color: centerPartColor,
              size: `${centerPartSize}%`,
            }}
            mark={{
              primaryMark: {
                width: `${primaryMarkWidth}px`,
                color: primaryMarkColor,
                show: primaryMarkShow,
              },
              secondaryMark: {
                width: `${secondaryMarkWidth}px`,
                color: secondaryMarkColor,
                show: secondaryMarkShow,
              },
              number: {
                fontSize: markNumberSize,
                color: markNumberColor,
                show: markNumberShow,
              },
            }}
          />
        </div>
        <div className="flex flex-wrap flex-grow gap-6 justify-center">
          <div>
            <h5>Frame: </h5>
            <SliderInput
              min={200}
              max={500}
              label="Size: "
              {...register("frameSize")}
            />
            <ColorInput label="Color: " {...register("frameColor")} />
            <SliderInput
              min={0}
              max={10}
              label="Width: "
              {...register("frameWidth")}
            />
            <CheckBoxInput label="Shadow: " {...register("frameShadow")} />
          </div>

          {/* Hour hand settings */}
          <div>
            <h5>Hour Hand: </h5>
            <SliderInput
              min={10}
              max={50}
              label="Length: "
              {...register("hourHandLength")}
            />
            <SliderInput
              min={5}
              max={30}
              label="Width: "
              {...register("hourHandWidth")}
            />
            <ColorInput label="Color: " {...register("hourHandColor")} />
          </div>

          {/* Minute hand settings */}
          <div>
            <h5>Minute Hand: </h5>
            <SliderInput
              min={10}
              max={50}
              label="Length: "
              {...register("minuteHandLength")}
            />
            <SliderInput
              min={5}
              max={30}
              label="Width: "
              {...register("minuteHandWidth")}
            />
            <ColorInput label="Color: " {...register("minuteHandColor")} />
          </div>

          {/* Second hand settings */}
          <div>
            <h5>Second Hand: </h5>
            <SliderInput
              min={10}
              max={50}
              label="Length: "
              {...register("secondHandLength")}
            />
            <SliderInput
              min={1}
              max={10}
              label="Width: "
              {...register("secondHandWidth")}
            />
            <ColorInput label="Color: " {...register("secondHandColor")} />
          </div>

          {/* Center part settings */}
          <div>
            <h5>Center part: </h5>
            <SliderInput
              min={1}
              max={10}
              label="size: "
              {...register("centerPartSize")}
            />
            <ColorInput label="color: " {...register("centerPartColor")} />
          </div>

          {/* Primary mark settings */}
          <div>
            <h5>Primary Mark: </h5>
            <SliderInput
              min={1}
              max={10}
              label="width: "
              {...register("primaryMarkWidth")}
            />
            <ColorInput label="color: " {...register("primaryMarkColor")} />
            <CheckBoxInput label="Show: " {...register("primaryMarkShow")} />
          </div>

          {/* Secondary mark settings */}
          <div>
            <h5>Secondary Mark: </h5>
            <SliderInput
              min={1}
              max={10}
              label="width: "
              {...register("secondaryMarkWidth")}
            />
            <ColorInput label="color: " {...register("secondaryMarkColor")} />
            <CheckBoxInput label="Show: " {...register("secondaryMarkShow")} />
          </div>

          {/* Mark number settings */}
          <div>
            <h5>Mark Number: </h5>
            <div>
              <label>Size: </label>
              <input
                type="text"
                {...register("markNumberSize")}
                className="border rounded-xl px-2"
              />
            </div>
            <ColorInput label="Color: " {...register("markNumberColor")} />
            <CheckBoxInput label="Show: " {...register("markNumberShow")} />
          </div>
        </div>
      </div>
    </div>
  );
}
