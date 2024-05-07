import {fireEvent, render, screen } from "../utils/test-utils";
import App from '../App';

describe('title of App.tsx component', () => {
    test('',()=>{
        render(<App/>)
        const hTitle=screen.getByText('Vite + Vitest');
        expect(hTitle).toBeInTheDocument();
    })
test('adding a user through UserForm adds one user to UserList', () => {
  render(<App />);
  // Find the input fields and submit button
  const nameInput = screen.getByLabelText('name');
  const lastNameInput = screen.getByLabelText('lastName');
  const ageInput = screen.getByLabelText('age');
  const addButton = screen.getByText(/add/gi);

  // Fill in the form fields
  fireEvent.change(nameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(ageInput, { target: { value: '30' } });

  // Submit the form
  fireEvent.click(addButton);

  // Wait for the user list to update
    expect(screen.getByText(/number of users 1/i)).toBeInTheDocument();
});
})