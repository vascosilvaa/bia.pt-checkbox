import React from 'react';
import renderer from 'react-test-renderer'

import Checkbox from './';

describe('Checkbox component', () => {
  it('renders the checkbox', () => {
    const tree = renderer.create(
      <Checkbox onChange={jest.fn} checked label="Test"/>
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders the checkbox unchecked', () => {
    const model = {
      checked: false
    };
    const tree = renderer.create(
      <Checkbox
        onChange={jest.fn}
        checked={model.checked}
      />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders the checkbox checked', () => {
    const model = {
      checked: true
    };
    const tree = renderer.create(
      <Checkbox
        onChange={jest.fn}
        checked={model.checked}
      />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('onChange changes the checked value', () => {
    const model = {
      checked: false
    };

    const tree = renderer.create(
      <Checkbox
        onChange={checked => model.checked = checked}
        checked={model.checked}
      />
    );

    tree.getInstance().changeValue();
    expect(model.checked).toBeTruthy();

    tree.getInstance().changeValue();
    expect(model.checked).toBeFalsy();
  });

});
