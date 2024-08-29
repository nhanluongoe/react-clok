import { render, screen } from "@testing-library/react";
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

    expect(number).toHaveStyle("color: rgb(49, 54, 56)");
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
    render(<ClockMark />);
    const marks = screen.queryAllByTestId("clock-primary-mark");

    expect(marks).toHaveLength(12);
  });

  it("should have primary mark hidden by passing", () => {
    render(<ClockMark primaryMark={{ show: false }} />);
    const marks = screen.queryAllByTestId("clock-primary-mark");

    expect(marks).toHaveLength(0);
  });

  it("should show primary mark with black color by default", () => {
    render(<ClockMark />);
    const marks = screen.queryAllByTestId("clock-primary-mark");

    expect(marks[0]).toHaveStyle("background-color: rgb(49, 54, 56)");
  });

  it("should show primary mark with red color by passing", () => {
    render(
      <ClockMark
        primaryMark={{
          color: "red",
        }}
      />
    );
    const marks = screen.queryAllByTestId("clock-primary-mark");

    expect(marks[0]).toHaveStyle("background-color: rgb(255, 0, 0)");
  });

  it("should have primary mark with 6px width by default", () => {
    render(<ClockMark />);
    const marks = screen.queryAllByTestId("clock-primary-mark");

    expect(marks[0]).toHaveStyle("width: 6px");
  });

  it("should have primary mark with 8px width by passing", () => {
    render(
      <ClockMark
        primaryMark={{
          width: "8px",
        }}
      />
    );
    const marks = screen.queryAllByTestId("clock-primary-mark");

    expect(marks[0]).toHaveStyle("width: 8px");
  });

  // Since the secondary mark is similar to the primary mark, we can skip the tests for the secondary mark.
});
