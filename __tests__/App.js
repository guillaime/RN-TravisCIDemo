/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import App from '../App';


describe('Testing App Component', () => {
  it('It Generates', () => {
    renderer.create(<App />);
  });
});
