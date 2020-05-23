/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});



// default code 
/*
import app from '../src/index';

describe('app module', () => {
  test('it exists', async () => {
    expect(app).toBeDefined();
  });

  test('it returns program name with SDGs', async () => {
    const result = await app();
    const sdgPos = (result || '').indexOf('SDG');
    expect(sdgPos).toBeGreaterThanOrEqual(0);
  });
});
*/
