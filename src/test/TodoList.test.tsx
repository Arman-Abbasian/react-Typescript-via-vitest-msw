import { render, screen } from "../utils/test-utils";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  
  it("api success secnario on load", async () => {
    render(<TodoList />);
    expect(await screen.findByText("count: 0")).toBeInTheDocument();
  });
  it("increament button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  it("increment button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  it("decrement button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("-")).toBeInTheDocument();
  });
  it("increment button click be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  it("decrement button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("-")).toBeInTheDocument();
  });
  // it("Todo name", async () => {
  //   render(<TodoList />);
  //   expect(await screen.findByRole("quis ut nam facilis et officia qui")).toBeInTheDocument();
  // });
});

