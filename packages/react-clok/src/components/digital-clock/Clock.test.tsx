import { act, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DigitalClock from "./Clock";

describe("digital clock", () => {
  it("should render properly", () => {
    const { container } = render(<DigitalClock />);
    const time = container.querySelector("time");

    expect(time).toBeInTheDocument();
  });

  it("should have date time attribute properly", async () => {
    act(() => {
      render(<DigitalClock />);
    });
    const time = document.querySelector("time");

    expect(time?.getAttribute("datetime")).toBe("");

    // Wait for the clock to update the state
    await act(async () => {
      await sleep(1000);
    });

    expect(time?.getAttribute("datetime")).not.toBe("");
  });

  it("should show seconds by default", () => {
    const { container } = render(<DigitalClock />);
    const seconds = container.querySelector(".clock__second-digit");

    expect(seconds).toBeInTheDocument();
  });

  it("should hide seconds by passing", () => {
    const { container } = render(
      <DigitalClock secondSegment={{ show: false }} />
    );
    const seconds = container.querySelector(".clock__second-digit");

    expect(seconds).not.toBeInTheDocument();
  });

  /**
    Utils
  */
  function sleep(period: number) {
    return new Promise((resolve) => setTimeout(resolve, period));
  }
});
