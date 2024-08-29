import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ClockHourHand from "./ClockHourHand";

describe("clock hour hand", () => {
  it("should have color black by default", () => {
    const { container } = render(<ClockHourHand deg={1} />);
    const hourHand = container.querySelector("div");

    // Issue why needs to be rgb(0, 0, 0) instead of black
    // https://github.com/testing-library/jest-dom/issues/49
    expect(hourHand).toHaveStyle("background-color: rgb(49, 54, 56)");
  });

  it("should have color red by passing", () => {
    const { container } = render(<ClockHourHand deg={1} color="red" />);
    const hourHand = container.querySelector("div");

    expect(hourHand).toHaveStyle("background-color: rgb(255, 0, 0)");
  });

  it("should have a width of 10px by default", () => {
    const { container } = render(<ClockHourHand deg={1} />);
    const hourHand = container.querySelector("div");

    expect(hourHand).toHaveStyle("height: 10px");
  });

  it("should have a width of 20px by passing", () => {
    const { container } = render(<ClockHourHand deg={1} width="20px" />);
    const hourHand = container.querySelector("div");

    expect(hourHand).toHaveStyle("height: 20px");
  });

  it("should have a length of 30% of the frame size by default", () => {
    const { container } = render(<ClockHourHand deg={1} />);
    const hourHand = container.querySelector("div");

    expect(hourHand).toHaveStyle("width: 30%");
  });

  it("should have a length of 50% of the frame size by passing", () => {
    const { container } = render(<ClockHourHand deg={1} length="50%" />);
    const hourHand = container.querySelector("div");

    expect(hourHand).toHaveStyle("width: 50%");
  });

  // Since the minute hand and second hand are similar to the hour hand, we can skip the tests for them
});
