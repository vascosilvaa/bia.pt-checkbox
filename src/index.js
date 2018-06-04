import React from 'react';
import { bool, func, string } from 'prop-types';

import './Checkbox.css';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }

  changeValue() {
    const checked = !this.state.checked;
    this.setState({ checked });
    this.props.onChange(checked);
  }

  render() {
    return (
      <div className="CheckboxComponent">
        <label className="switch" htmlFor={this.id}>
          <input disabled={this.props.disabled} type="checkbox" id={this.id} checked={this.state.checked} onChange={() => this.changeValue()} />
          <div className={`slider round ${this.props.disabled ? 'disabled' : ''}`} />
        </label>
        {this.props.label}
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: bool,
  onChange: func.isRequired,
  label: string
}

Checkbox.defaultProps = {
  checked: false,
  label: ''
}

export default Checkbox;
