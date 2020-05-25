//  Make sure to import react
import React from 'react';
//  When initiating a snapshot make sure to import the needed components.
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

test('Check if Navbar is correct!', () => {
  //  Renderer.create creates a snapshot to compare it with component.
  const component = renderer.create(
        <Navbar />
  );
    //  Before comparing it make sure your convert it to json.
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
