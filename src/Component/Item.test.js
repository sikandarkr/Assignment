import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';

// Mock the useSelector and useDispatch hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Item Component', () => {
  const mockItem = {
    name: 'Test Item',
    country: 'Test Country',
    item: {
      // Define your mock item object here
    },
    key: '1',
  };

  const mockStore = {
    getState: () => ({}), // You can define initial state if needed
    dispatch: jest.fn(),
  };

  test('renders item card with correct information', () => {
    // Mock useSelector to return mock item data
    useSelector.mockReturnValue(mockItem);

    const { getByText } = render(
      <Provider store={mockStore}>
        <Item />
      </Provider>
    );

    const itemName = getByText(mockItem.name);
    const itemCountry = getByText(mockItem.country);

    expect(itemName).toBeInTheDocument();
    expect(itemCountry).toBeInTheDocument();
  });

  test('redirects to details page when "Go to details" link is clicked', () => {
    // Mock useDispatch to return a jest.fn()
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(
      <Provider store={mockStore}>
        <Item />
      </Provider>
    );

    const goToDetailsLink = getByText('Go to details');
    fireEvent.click(goToDetailsLink);

    // Assert the dispatch action here
  });

  test('dispatches removeItem action when close button is clicked', async () => {
    // Write the test case here
  });
});
