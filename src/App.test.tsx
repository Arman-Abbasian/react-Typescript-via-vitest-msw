import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("App", () => {
  it("checking whether vite and react text is available", () => {
    render(<App />);
    const text = screen.getByText("Vite + Vitest");
    expect(text).toBeInTheDocument();
  });
});
