import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DigitalClock from "./Clock";

describe("digital clock", () => {
  it("should render properly", () => {
    render(<DigitalClock />);
    const time = screen.getByRole("time");

    expect(time).toBeInTheDocument();
  });

  it("should have date time attribute properly", async () => {
    act(() => {
      render(<DigitalClock />);
    });
    const time = screen.getByRole("time");

    expect(time.getAttribute("datetime")).toBe("");

    // Wait for the clock to update the state
    await act(async () => {
      await sleep(1000);
    });

    expect(time.getAttribute("datetime")).not.toBe("");
  });

  it("should show seconds by default", () => {
    render(<DigitalClock />);
    const seconds = screen.queryAllByTestId("clock-second-digit");

    expect(seconds[0]).toBeInTheDocument();
  });

  it("should hide seconds by passing", () => {
    render(<DigitalClock secondSegment={{ show: false }} />);
    const seconds = screen.queryAllByTestId("clock-second-digit");

    expect(seconds).toHaveLength(0);
  });

  /**
    Utils
  */
  function sleep(period: number) {
    return new Promise((resolve) => setTimeout(resolve, period));
  }
});
