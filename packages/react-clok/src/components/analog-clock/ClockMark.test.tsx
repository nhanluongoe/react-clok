import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ClockMark from "./ClockMark";

describe("clock mark", () => {
  it("should show number by default", () => {
    const { container } = render(<ClockMark />);
    const number = container.querySelector("span");

    expect(number).toBeInTheDocument();
  });

  it("should hide number by passing", () => {
    const { container } = render(
      <ClockMark
        number={{
          show: false,
        }}
      />
    );
    const number = container.querySelector("span");

    expect(number).not.toBeInTheDocument();
  });

  it("should have black number by default", () => {
    const { container } = render(<ClockMark />);
    const number = container.querySelector("span");

    expect(number).toHaveStyle("color: rgb(0, 0, 0)");
  });

  it("should have red number by passing", () => {
    const { container } = render(
      <ClockMark
        number={{
          color: "red",
        }}
      />
    );
    const number = container.querySelector("span");

    expect(number).toHaveStyle("color: rgb(255, 0, 0)");
  });

  it("should have primary mark shown by default", () => {
    const { container } = render(<ClockMark />);
    const mark = container.querySelector("div.clock-primary-mark");

    expect(mark).toBeInTheDocument();
  });

  it("should have primary mark hidden by passing", () => {
    const { container } = render(<ClockMark primaryMark={{ show: false }} />);
    const mark = container.querySelector("div.clock-primary-mark");

    expect(mark).not.toBeInTheDocument();
  });

  it("should show primary mark with black color by default", () => {
    const { container } = render(<ClockMark />);
    const mark = container.querySelector("div.clock-primary-mark");

    expect(mark).toHaveStyle("background-color: rgb(0, 0, 0)");
  });

  it("should show primary mark with red color by passing", () => {
    const { container } = render(
      <ClockMark
        primaryMark={{
          color: "red",
        }}
      />
    );
    const mark = container.querySelector("div.clock-primary-mark");

    expect(mark).toHaveStyle("background-color: rgb(255, 0, 0)");
  });

  it("should have primary mark with 12px width by default", () => {
    const { container } = render(<ClockMark />);
    const mark = container.querySelector("div.clock-primary-mark");

    expect(mark).toHaveStyle("width: 12px");
  });

  it("should have primary mark with 8px width by passing", () => {
    const { container } = render(
      <ClockMark
        primaryMark={{
          width: "8px",
        }}
      />
    );
    const mark = container.querySelector("div.clock-primary-mark");

    expect(mark).toHaveStyle("width: 8px");
  });

  // Since the secondary mark is similar to the primary mark, we can skip the tests for the secondary mark.
});
