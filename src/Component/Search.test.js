import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SearchField from './Search';

// Mock react-redux hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

// Mock the filterData action
jest.mock('../Redux/action/getList', () => ({
  filterData: jest.fn(),
  clearDataData: jest.fn(),
}));

describe('SearchField Component', () => {
  test('dispatches clearDataData action when input is empty', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByPlaceholderText } = render(
      <SearchField inputType="text" placeholder="Search..." />
    );

    const inputField = getByPlaceholderText('Search...');
    fireEvent.change(inputField, { target: { value: '' } });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'CLEAR_DATA' });
  });

  test('dispatches filterData action with correct keyword', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByPlaceholderText } = render(
      <SearchField inputType="text" placeholder="Search..." />
    );

    const inputField = getByPlaceholderText('Search...');
    fireEvent.change(inputField, { target: { value: 'test' } });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'FILTER_DATA', payload: 'test' });
  });

});
