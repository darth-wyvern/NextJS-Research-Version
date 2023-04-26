import FirstTest from '../src/components/Test/firstTest';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react';

test("Example 1 renders successfully", () => {
    render(<FirstTest />);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})