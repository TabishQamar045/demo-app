import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/',
}));

describe('Sidebar Component', () => {
  it('renders main menu items', () => {
    render(<Sidebar />);
    // Check for presence of main icons (using first instance)
    expect(screen.getAllByTestId('HomeOutlinedIcon')[0]).toBeInTheDocument();
  });

  it('renders bottom menu items', () => {
    render(<Sidebar />);
    expect(screen.getAllByTestId('NotificationsOutlinedIcon')[0]).toBeInTheDocument();
    expect(screen.getAllByTestId('PersonOutlineOutlinedIcon')[0]).toBeInTheDocument();
  });

  it('shows mobile menu button on small screens', () => {
    render(<Sidebar />);
    expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
  });

  it('renders drawer correctly', () => {
    render(<Sidebar />);
    const drawer = screen.getByRole('navigation');
    expect(drawer).toBeInTheDocument();
  });
});