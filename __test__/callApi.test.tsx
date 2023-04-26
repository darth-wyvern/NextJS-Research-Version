import { render, screen, waitFor } from '@testing-library/react'
import FetchData from '../src/components/Test/fetchAPI'
import * as services from '../src/utils/Services'
import React from 'react'

test("Fetch Data API called", async () => {
  const mockFetchData = jest.spyOn(services, 'FetchData')
    .mockImplementation(async () => {
      return [{
        name: 'bulbasaur'
      }];
    })

  render(<FetchData />)
  expect(mockFetchData).toHaveBeenCalled();
  waitFor(() => {
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  })
})