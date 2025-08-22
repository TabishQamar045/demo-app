import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabSection from '../TabSection';

describe('TabSection Component', () => {
  const mockChildren = <div data-testid="mock-children">Test Content</div>;

  it('renders all tabs', () => {
    render(<TabSection>{mockChildren}</TabSection>);
    expect(screen.getByText('Basic Info')).toBeInTheDocument();
    expect(screen.getByText('Agent and company name mention')).toBeInTheDocument();
    // Check a few more tabs
    expect(screen.getByText('Call holding')).toBeInTheDocument();
    expect(screen.getByText('Closing conversation')).toBeInTheDocument();
  });

  it('shows children content in first tab by default', () => {
    render(<TabSection>{mockChildren}</TabSection>);
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
  });

  it('changes content when different tab is selected', () => {
    render(<TabSection>{mockChildren}</TabSection>);
    
    // Click second tab
    fireEvent.click(screen.getByText('Agent and company name mention'));
    
    // Check if second tab content is visible
    expect(screen.getByText(/Content for Agent and company name mention/)).toBeInTheDocument();
  });

  it('renders vertical tabs correctly', () => {
    render(<TabSection>{mockChildren}</TabSection>);
    const tabsContainer = screen.getByRole('tablist');
    expect(tabsContainer).toHaveAttribute('aria-orientation', 'vertical');
  });
});