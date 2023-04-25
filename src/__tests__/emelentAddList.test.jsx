import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ElementAddList from '../components/Test/ElementAddList'
import userEvent from '@testing-library/user-event'

test("Element added to the list", async () => {
  render(<ElementAddList/>)
  expect(screen.getAllByTestId('record').length).toBe(3);

  await userEvent.click(screen.getByText(/add to list/i));
  expect(screen.getAllByTestId('record').length).toBe(4);
})