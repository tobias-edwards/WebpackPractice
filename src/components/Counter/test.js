import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './index';

describe('<Counter>', () => {
  test('renders without crashing', () => {
    render(<Counter />);
    screen.debug();
  });
});
