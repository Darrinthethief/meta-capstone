import { render, screen } from '@testing-library/react';
import BookingForm from "../src/subcomponents/BookingForm";

test('renders BookingForm component', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/Little Lemon Booking/i);
  expect(headingElement).toBeInTheDocument();
});