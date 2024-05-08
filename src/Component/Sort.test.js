import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Sort from './Sort';
import { sortData } from '../Redux/action/getList'; // Import sortData action

// Mock react-redux useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

// Mock the sortData action
jest.mock('../Redux/action/getList', () => ({
  ...jest.requireActual('../Redux/action/getList'),
  sortData: jest.fn(), // Mock sortData action
}));

describe('Sort Component', () => {
  test('dispatches sortData action when sort icon is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch); // Mocking useDispatch to return mockDispatch

    const { getByTestId } = render(<Sort />);

    const sortIcon = getByTestId('sort-icon');
    fireEvent.click(sortIcon);

    expect(mockDispatch).toHaveBeenCalledWith(sortData());
  });
});
