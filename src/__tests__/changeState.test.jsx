import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ChangeState from '../components/Test/changeState'
import userEvent from '@testing-library/user-event'

test("Toggle text visible", async () => {
  render(<ChangeState/>);
  await userEvent.click(screen.getByText(/toggle text/i));
  expect(screen.getByText(/text visible/i)).toBeInTheDocument();
})