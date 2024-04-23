import PostList from "../components/PostList";
import { render, screen, waitFor } from "../utils/test-utils";
import { server } from "./mocks/server";


describe("Post list test", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  
    it("title showe in the PostList component",  () => {
        render(<PostList />);
        expect( screen.getByText("PostList")).toBeInTheDocument();
      });
    // it("get the length of the posts", async () => {
    //   render(<PostList />);
    //   expect(await screen.findByText("2")).toBeInTheDocument();
    // });
    it("Todo name", async () => {
      render(<PostList />);
      await waitFor(() => {
      expect(screen.findByText("qui est esse")).toBeInTheDocument();
      })
    });
  });