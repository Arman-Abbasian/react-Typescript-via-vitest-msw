import PostInput from "../components/PostInput";
import PostList from "../components/PostList";
import { fireEvent, render, screen } from "../utils/test-utils";

describe('PostInput', () => {
  render(<PostInput />)
  const titleInput = screen.getByLabelText('title') as HTMLInputElement;
  const bodyInput = screen.getByLabelText('body') as HTMLInputElement;
  const submitButton = screen.getByText('Add') as HTMLInputElement
    it('renders form elements correctly', () => {
      render(<PostInput />)  
      expect(titleInput).toBeInTheDocument();
      expect(bodyInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  
    it('updates form values on input change', () => {
        render(<PostInput />)
      fireEvent.change(titleInput, { target: { value: 'Test Title' } });
      fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
      expect(titleInput.value).toBe('Test Title');
      expect(bodyInput.value).toBe('Test Body');
    });
  
    it('submits form with correct data', async() => {
        render(<PostInput />)
      fireEvent.change(titleInput, { target: { value: 'title' } });
      fireEvent.change(bodyInput, { target: { value: 'body' } });
      fireEvent.click(submitButton);
      render(<PostList />)
      expect(await screen.findByText("title")).toBeInTheDocument();
    });
  });