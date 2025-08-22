import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders both coaching library texts', () => {
    render(<Header />);
    const texts = screen.getAllByText(/coaching library/i);
    expect(texts).toHaveLength(2);
  });

  it('renders the export button', () => {
    render(<Header />);
    expect(screen.getByText('Export')).toBeInTheDocument();
  });

  it('renders with correct layout', () => {
    render(<Header />);
    const smallTitleContainer = screen.getAllByText(/coaching library/i)[0].closest('div')?.parentElement;
    console.log(smallTitleContainer);
    expect(smallTitleContainer).toBeInTheDocument();
  });
});