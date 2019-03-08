/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import {shallow} from "react-native/jest/renderer";


describe('Testing App Component', () => {

  it('Generates correctly', () => {
    renderer.create(<App />);
  });

  it('Can generate an array from 10 to 1', () => {
    let loginComponent = renderer.create(<App />).getInstance();
    const array = loginComponent.generateArray();

    expect(array).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  });
});