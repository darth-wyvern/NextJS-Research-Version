import { render, screen, waitFor} from '@testing-library/react'
import FetchData from '../components/Test/fetchAPI'
import * as services from '../utils/Services'

test("Fetch Data API called", async () => {
  const mockFetchData = jest.spyOn(services, 'FetchData')
    .mockImplementation(async () => {
        return [{
            name: 'bulbasaur'
        }];
    })
  
  render(<FetchData/>)
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
      expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  })
})