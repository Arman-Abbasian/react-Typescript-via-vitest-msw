import PostList from "../components/PostList";
import { render, screen, waitFor } from "../utils/test-utils";


describe("Post list test", () => {
  
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
      expect(await screen.findByText("qui est esse")).toBeInTheDocument();
    });
  });