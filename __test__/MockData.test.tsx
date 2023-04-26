import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import TestWithMockData from '../src/components/Test/testWithMockData';
import React from 'react';

const mockData = [
  {
    "id": 1,
    "first_name": "Fletcher",
    "last_name": "McVanamy",
    "email": "mmcvanamy0@e-recht24.de",
    "age": 30
  }, {
    "id": 2,
    "first_name": "Clarice",
    "last_name": "Harrild",
    "email": "charrild1@dion.ne.jp",
    "age": 35
  },
]

test("Ordered list renders", () => {
  render(<TestWithMockData data={mockData} displayUnorderedList={false} handleClick />)
  expect(screen.getByText(/McVanamy/i)).toBeInTheDocument()
})