import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ChangeState from '../src/components/Test/changeState'
import userEvent from '@testing-library/user-event'
import React from 'react'

test("Toggle text visible", async () => {
  render(<ChangeState />);
  await userEvent.click(screen.getByText(/toggle text/i));
  expect(screen.getByText(/text visible/i)).toBeInTheDocument();
})