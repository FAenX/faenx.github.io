import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import SiteNav from './SiteNav';

function renderAt(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <SiteNav />
      </MemoryRouter>
    </HelmetProvider>
  );
}

test('marks the Home link active at /', () => {
  renderAt('/');
  const homeLink = screen.getByText('Home').closest('a');
  expect(homeLink).toHaveAttribute('aria-current', 'page');
  const projectsLink = screen.getByText('Projects').closest('a');
  expect(projectsLink).not.toHaveAttribute('aria-current');
});

test('marks the Data Platforms link active at /data-platforms/', () => {
  renderAt('/data-platforms/');
  const dataLink = screen.getByText('Data Platforms').closest('a');
  expect(dataLink).toHaveAttribute('aria-current', 'page');
  const homeLink = screen.getByText('Home').closest('a');
  expect(homeLink).not.toHaveAttribute('aria-current');
});

test('renders a hamburger toggle button with menu aria-label', () => {
  renderAt('/');
  const toggle = screen.getByLabelText(/menu/i);
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveAttribute('aria-controls', 'nav-links');
});

test('renders all 8 nav links', () => {
  renderAt('/');
  const labels = ['Home', 'Emmanuel', 'Platform Systems', 'Data Platforms', 'Agent Systems', 'Applied Analytics', 'Projects', 'Contact'];
  for (const label of labels) {
    expect(screen.getByText(label)).toBeTruthy();
  }
}, 30000);
