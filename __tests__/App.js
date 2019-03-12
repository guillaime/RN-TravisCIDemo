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

  it('It can generate an array from 10 to 1', () => {
    const loginComponent = renderer.create(<App />).getInstance();
    const array = loginComponent.generateArray();

    expect(array).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
