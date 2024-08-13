import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ClockFrame from "./ClockFrame";

describe("Clock frame", () => {
  it("should have size of 500px by default", () => {
    const { container } = render(<ClockFrame />);
    const frame = container.querySelector("div");

    expect(frame).toHaveStyle("width: 500px");
    expect(frame).toHaveStyle("height: 500px");
  });

  it("should have size of 250px by passing size", () => {
    const { container } = render(<ClockFrame size="250px" />);
    const frame = container.querySelector("div");

    expect(frame).toHaveStyle("width: 250px");
    expect(frame).toHaveStyle("height: 250px");
  });

  it("should have box shadow by default", () => {
    const { container } = render(<ClockFrame />);
    const frame = container.firstChild;

    expect(frame).toHaveStyle("box-shadow: 0 0 15px rgba(0, 0, 0, 0.3)");
  });

  it("should have a specific box shadow by passing that value", () => {
    const { container } = render(
      <ClockFrame boxShadow="5 5 10px rgba(0, 0, 0, 0.5)" />,
    );
    const frame = container.firstChild;

    expect(frame).toHaveStyle("box-shadow: 5 5 10px rgba(0, 0, 0, 0.5)");
  });

  it("should have a frame width of 6px by default", () => {
    const { container } = render(<ClockFrame />);
    const frame = container.firstChild;

    expect(frame).toHaveStyle("border-width: 6px");
  });

  it("should have a 8px of frame width by passing", () => {
    const { container } = render(<ClockFrame frameWidth="8px" />);
    const frame = container.firstChild;

    expect(frame).toHaveStyle("border-width: 8px");
  });

  it("should have a black frame by default", () => {
    const { container } = render(<ClockFrame />);
    const frame = container.firstChild;

    expect(frame).toHaveStyle("border-color: black");
  });
});
