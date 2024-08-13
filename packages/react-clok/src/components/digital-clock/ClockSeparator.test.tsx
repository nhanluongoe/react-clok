import { describe, expect, it } from "vitest";
import ClockSeparator from "./ClockSeparator";
import { render } from "@testing-library/react";

describe("digital clock separator", () => {
  it("should have color black by default", () => {
    const { container } = render(<ClockSeparator />);
    const separator = container.querySelector(".clock__separator-dot");

    expect(separator).toHaveStyle("background-color: rgb(0, 0, 0)");
  });

  it("should have color red by passing", () => {
    const { container } = render(<ClockSeparator color="red" />);
    const separator = container.querySelector(".clock__separator-dot");

    expect(separator).toHaveStyle("background-color: rgb(255, 0, 0)");
  });

  it("should have a size of 12px by default", () => {
    const { container } = render(<ClockSeparator />);
    const separator = container.querySelector(".clock__separator-dot");

    expect(separator).toHaveStyle("width: 12px");
    expect(separator).toHaveStyle("height: 12px");
  });

  it("should have a size of 10px by passing", () => {
    const { container } = render(<ClockSeparator size={10} />);
    const separator = container.querySelector(".clock__separator-dot");

    expect(separator).toHaveStyle("width: 10px");
    expect(separator).toHaveStyle("height: 10px");
  });
});
