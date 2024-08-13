import { describe, expect, it } from "vitest";
import ClockDigit from "./ClockDigit";
import { render } from "@testing-library/react";

describe("digital clock digit", () => {
  it("should have color black by default", () => {
    const { container } = render(<ClockDigit number={1} />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("border-right-color: rgb(0, 0, 0)");
    expect(digitBottom).toHaveStyle("border-right-color: rgb(0, 0, 0)");
  });

  it("should have color red by passing", () => {
    const { container } = render(<ClockDigit number={1} color="red" />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("border-right-color: rgb(255, 0, 0)");
    expect(digitBottom).toHaveStyle("border-right-color: rgb(255, 0, 0)");
  });

  it("should have a width of 16px by default", () => {
    const { container } = render(<ClockDigit number={1} />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("border-right-width: 16px");
    expect(digitBottom).toHaveStyle("border-right-width: 16px");
  });

  it("should have a width of 20px by passing", () => {
    const { container } = render(<ClockDigit number={1} width={20} />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("border-right-width: 20px");
    expect(digitBottom).toHaveStyle("border-right-width: 20px");
  });

  it("should have a size of 100px by default", () => {
    const { container } = render(<ClockDigit number={1} />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("height: 100px");
    expect(digitBottom).toHaveStyle("height: 100px");
  });

  it("should have a size of 200px by passing", () => {
    const { container } = render(<ClockDigit number={1} size={200} />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("height: 200px");
    expect(digitBottom).toHaveStyle("height: 200px");
  });

  it("should have a gap of 16px by default", () => {
    const { container } = render(<ClockDigit number={1} />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("margin: 0 16px");
    expect(digitBottom).toHaveStyle("margin: 0 16px");
  });

  it("should have a gap of 20px by passing", () => {
    const { container } = render(<ClockDigit number={1} gap={20} />);
    const digitTop = container.querySelector(".clock__digit-top");
    const digitBottom = container.querySelector(".clock__digit-bottom");

    expect(digitTop).toHaveStyle("margin: 0 20px");
    expect(digitBottom).toHaveStyle("margin: 0 20px");
  });
});
