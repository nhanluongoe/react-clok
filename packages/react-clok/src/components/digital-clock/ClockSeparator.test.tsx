import { describe, expect, it } from "vitest";
import ClockSeparator from "./ClockSeparator";
import { render, screen } from "@testing-library/react";

describe("digital clock separators", () => {
  it("should render properly", () => {
    render(<ClockSeparator />);
    const separators = screen.queryAllByTestId("clock-separator-dot");

    expect(separators).toHaveLength(2);
  });

  it("should have color black by default", () => {
    render(<ClockSeparator />);
    const separators = screen.queryAllByTestId("clock-separator-dot");

    expect(separators[0]).toHaveStyle("background-color: rgb(0, 0, 0)");
  });

  it("should have color red by passing", () => {
    render(<ClockSeparator color="red" />);
    const separators = screen.queryAllByTestId("clock-separator-dot");

    expect(separators[0]).toHaveStyle("background-color: rgb(255, 0, 0)");
  });

  it("should have a size of 12px by default", () => {
    render(<ClockSeparator />);
    const separators = screen.queryAllByTestId("clock-separator-dot");

    expect(separators[0]).toHaveStyle("width: 12px");
    expect(separators[0]).toHaveStyle("height: 12px");
  });

  it("should have a size of 10px by passing", () => {
    render(<ClockSeparator size={10} />);
    const separators = screen.queryAllByTestId("clock-separator-dot");

    expect(separators[0]).toHaveStyle("width: 10px");
    expect(separators[0]).toHaveStyle("height: 10px");
  });
});
