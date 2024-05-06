
import UserList from "../../components/Users/UserList";
import { findByText, fireEvent, render, screen, waitFor } from "../../utils/test-utils";

describe('User list', () => {
  render(<UserList />)
  const numOfUsers = screen.getByText('number of users 0') as HTMLParagraphElement;
    it('renders form elements correctly', () => {
      render(<UserList />)  
      expect(numOfUsers).toBeInTheDocument();
    });

    it('renders form elements correctly', () => {
        render(<UserList />)  

        const nameInput= screen.getByLabelText('name') as HTMLParagraphElement
        const lastNameInput= screen.getByLabelText('lastName') as HTMLParagraphElement
        const ageInput= screen.getByLabelText('age') as HTMLParagraphElement
        const submitButton=screen.getByText('Add') as HTMLButtonElement
        expect(nameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();
        expect(ageInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
          // Fill out the form
        fireEvent.change(nameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(ageInput, { target: { value: '30' } });
        // Submit the form
        fireEvent.click(submitButton);
        expect(screen.getByText('number of users 1')).toBeInTheDocument();
      });

  });



