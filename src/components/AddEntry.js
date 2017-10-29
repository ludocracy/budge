import React, { Component } from 'react';
import '../css/AddEntry.css';
import Recurrence from './Recurrence';

class AddEntry extends Component {
  constructor(props) {
    super(props);

    this._onSubmitEntry = this._onSubmitEntry.bind(this);
  }

  _onSubmitEntry(e) {
    e.preventDefault();

    // TODO
  }

  render() { // TODO add date picker and dollar amount formatter
    return (
      <div className="AddEntry">
        <form onSubmit={this._onSubmitEntry}>
          <input type="text" ref={input => this.dateInput = input} placeholder="date" />
          <input type="text" ref={input => this.descrInput = input} placeholder="descr" />
          <input type="text" ref={input => this.amountInput = input} placeholder="amount" />
        </form>
      </div>
    );
  }
}

export default AddEntry;
