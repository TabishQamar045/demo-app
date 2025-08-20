/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LibraryPage from '../page';

// Mock the components used in LibraryPage
jest.mock('@/components/Header', () => ({
  __esModule: true,
  default: function MockHeader() {
    return <div data-testid="mock-header">Header</div>;
  },
}));

jest.mock('@/components/VideoCard', () => ({
  __esModule: true,
  default: function MockVideoCard({ title }: { title: string }) {
    return <div data-testid="mock-video-card">{title}</div>;
  },
}));

jest.mock('@/components/TabSection', () => ({
  __esModule: true,
  default: function MockTabSection({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock-tab-section">{children}</div>;
  },
}));

describe('LibraryPage', () => {
  it('renders the header', () => {
    render(<LibraryPage />);
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
  });

  it('renders the filter section with correct options', () => {
    render(<LibraryPage />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Assigned only')).toBeInTheDocument();
  });

  it('changes filter selection when clicked', () => {
    render(<LibraryPage />);
    const assignedFilter = screen.getByText('Assigned only');

    fireEvent.click(assignedFilter);
    const filterButton = screen.getByText('Assigned only').closest('div');
    expect(filterButton).toHaveStyle({ color: 'rgb(0, 0, 0)' });
  });

  it('renders video cards', () => {
    render(<LibraryPage />);
    const videoCards = screen.getAllByTestId('mock-video-card');
    expect(videoCards).toHaveLength(3);
  });

  it('renders tab section', () => {
    render(<LibraryPage />);
    expect(screen.getByTestId('mock-tab-section')).toBeInTheDocument();
  });
});
