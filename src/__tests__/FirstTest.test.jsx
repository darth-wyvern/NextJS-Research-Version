import FirstTest from '../components/Test/firstTest';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})