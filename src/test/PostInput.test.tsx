import PostInput from "../components/PostInput";
import { fireEvent, render, screen } from "../utils/test-utils";

describe('PostInput', () => {
    it('renders form elements correctly', () => {
        render(<PostInput />)
      expect(screen.getByLabelText('title')).toBeInTheDocument();
      expect(screen.getByLabelText('body')).toBeInTheDocument();
      expect(screen.getByText('Add')).toBeInTheDocument();
    });
  
    it('updates form values on input change', () => {
        render(<PostInput />)
      const titleInput = screen.getByLabelText('title') as HTMLInputElement;
      const bodyInput = screen.getByLabelText('body') as HTMLInputElement;
      
  
      fireEvent.change(titleInput, { target: { value: 'Test Title' } });
      fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
  
      expect(titleInput.value).toBe('Test Title');
      expect(bodyInput.value).toBe('Test Body');
    });
  
    it('submits form with correct data', () => {
        render(<PostInput />)
      const titleInput = screen.getByLabelText('title');
      const bodyInput = screen.getByLabelText('body');
      const addButton = screen.getByText('Add');
  
      fireEvent.change(titleInput, { target: { value: 'Test Title' } });
      fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
      fireEvent.click(addButton);
  
    });
  });