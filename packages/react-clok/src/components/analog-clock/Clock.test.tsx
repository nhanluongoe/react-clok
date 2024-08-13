import { act, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Clock from "./Clock";

describe("clock", () => {
  it("should render properly", () => {
    const { container } = render(<Clock />);
    const time = container.querySelector("time");
    expect(time).toBeInTheDocument();
  });

  it("should have datetime attribute properly", async () => {
    act(() => {
      render(<Clock />);
    });

    const time = document.querySelector("time");

    expect(time?.getAttribute("datetime")).toBe("");

    // Wait for the clock to update the state
    await act(async () => {
      await sleep(1000);
    });

    expect(time?.getAttribute("datetime")).not.toBe("");
  });

  /**
    Utils
  */
  function sleep(period: number) {
    return new Promise((resolve) => setTimeout(resolve, period));
  }
});
