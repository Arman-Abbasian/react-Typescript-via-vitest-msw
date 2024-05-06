
import UserList from "../../components/Users/UserList";
import { fireEvent, render, screen } from "../../utils/test-utils";

describe('User list', () => {
  render(<UserList />)
  const numOfUsers = screen.getByText('number of users 0') as HTMLParagraphElement;
    it('renders form elements correctly', () => {
      render(<UserList />)  
      expect(numOfUsers).toBeInTheDocument();
    });

  });