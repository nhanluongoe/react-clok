"use client";

import { DigitalClock } from "react-clok";
import { useForm, useWatch } from "react-hook-form";
import CheckBoxInput from "./ui/CheckBoxInput";
import ColorInput from "./ui/ColorInput";
import SliderInput from "./ui/SliderInput";

export default function DigitalClockSection() {
  const { register, getValues, control } = useForm({
    defaultValues: {
      hourSegmentSize: 70,
      hourSegmentColor: "black",
      hourSegmentWidth: 5,
      hourSegmentGap: 10,
      minuteSegmentSize: 70,
      minuteSegmentColor: "black",
      minuteSegmentWidth: 5,
      minuteSegmentGap: 10,
      secondSegmentSize: 70,
      secondSegmentColor: "black",
      secondSegmentWidth: 5,
      secondSegmentGap: 10,
      secondSegmentShow: true,
      separatorSize: 10,
      separatorColor: "black",
      separatorGap: 10,
    },
  });

  const {
    hourSegmentSize,
    hourSegmentColor,
    hourSegmentWidth,
    hourSegmentGap,
    minuteSegmentSize,
    minuteSegmentColor,
    minuteSegmentWidth,
    minuteSegmentGap,
    secondSegmentSize,
    secondSegmentColor,
    secondSegmentWidth,
    secondSegmentGap,
    secondSegmentShow,
    separatorSize,
    separatorColor,
    separatorGap,
  } = getValues();

  useWatch({ control });

  return (
    <div>
      <DigitalClock
        hourSegment={{
          size: hourSegmentSize,
          color: hourSegmentColor,
          width: hourSegmentWidth,
          gap: hourSegmentGap,
        }}
        minuteSegment={{
          size: minuteSegmentSize,
          color: minuteSegmentColor,
          width: minuteSegmentWidth,
          gap: minuteSegmentGap,
        }}
        secondSegment={{
          show: secondSegmentShow,
          size: secondSegmentSize,
          color: secondSegmentColor,
          width: secondSegmentWidth,
          gap: secondSegmentGap,
        }}
        separator={{
          size: separatorSize,
          color: separatorColor,
          gap: separatorGap,
        }}
      />

      {/* Hour segment settings */}
      <div className="flex">
        <div className="min-w-[350px]"></div>
        <div className="flex flex-wrap flex-grow gap-6">
          <div>
            <h5>Hour segment: </h5>
            <SliderInput
              min={30}
              max={70}
              label="Size: "
              {...register("hourSegmentSize")}
            />
            <ColorInput label="Color: " {...register("hourSegmentColor")} />
            <SliderInput
              min={0}
              max={10}
              label="Width: "
              {...register("hourSegmentWidth")}
            />
            <SliderInput
              min={0}
              max={10}
              label="Gap: "
              {...register("hourSegmentGap")}
            />
          </div>
          <div>
            <h5>Minute segment: </h5>
            <SliderInput
              min={30}
              max={70}
              label="Size: "
              {...register("minuteSegmentSize")}
            />
            <ColorInput label="Color: " {...register("minuteSegmentColor")} />
            <SliderInput
              min={0}
              max={10}
              label="Width: "
              {...register("minuteSegmentWidth")}
            />
            <SliderInput
              min={0}
              max={10}
              label="Gap: "
              {...register("minuteSegmentGap")}
            />
          </div>
          <div>
            <h5>Second segment: </h5>
            <SliderInput
              min={30}
              max={70}
              label="Size: "
              {...register("secondSegmentSize")}
            />
            <ColorInput label="Color: " {...register("secondSegmentColor")} />
            <SliderInput
              min={0}
              max={10}
              label="Width: "
              {...register("secondSegmentWidth")}
            />
            <SliderInput
              min={0}
              max={10}
              label="Gap: "
              {...register("secondSegmentGap")}
            />
            <CheckBoxInput label="Show: " {...register("secondSegmentShow")} />
          </div>
          <div>
            <h5>Separator: </h5>
            <SliderInput
              min={200}
              max={500}
              label="Size: "
              {...register("separatorSize")}
            />
            <ColorInput label="Color: " {...register("separatorColor")} />
            <SliderInput
              min={0}
              max={10}
              label="Gap: "
              {...register("separatorGap")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
