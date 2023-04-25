import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ChangeState from '../components/Test/changeState'

test("Testing page load", () => {
  render(<ChangeState />)
  expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
})