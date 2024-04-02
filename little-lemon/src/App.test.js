import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './subcomponents/BookingForm';

describe('BookingForm', () => {
  test('renders all form elements', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guest')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByLabelText('Comments')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
  });

  test('submits the form when the button is clicked', () => {
    const submitForm = jest.fn();
    render(<BookingForm submitForm={submitForm} />);

    fireEvent.click(screen.getByRole('button', { name: 'Book Now' }));
    expect(submitForm).toHaveBeenCalledTimes(1);
  });
});
