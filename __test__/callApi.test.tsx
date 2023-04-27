import { render, screen, waitFor } from '@testing-library/react'
import FetchData from '../src/components/Test/fetchAPI'
import * as services from '../src/utils/Services'
import React from 'react'

const mockFetchData = jest.spyOn(services, 'FetchData')
  .mockImplementation(async () => {
    return [{
      name: 'bulbasaur'
    }];
  })

describe('Call API', () => {
  test("Fetch Data API called", async () => {
    render(<FetchData />)
    expect(mockFetchData).toHaveBeenCalled();
    waitFor(() => {
      expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    })
  })
})