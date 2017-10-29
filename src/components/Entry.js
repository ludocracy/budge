import React, { Component } from 'react';
import '../css/Entry.css';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.entry.date,
      descr: this.props.entry.descr,
      amount: this.props.entry.amount,
      balance: this.props.balance
    }

    this._onClickDeleteEntry = this._onClickDeleteEntry.bind(this);
  }

  _onClickDeleteEntry(e) {
    // TODO delete entry but ask if for series or single entry
  }

  render() {
    return (
      <div className="Entry">
        <p>
          <span className="entry-date">{this.state.date}</span>
          <span className="entry-descr">{this.state.descr}</span>
          <span className="entry-amount">{this.state.amount}</span>
          <span className="entry-balance">{this.state.balance}</span>
          <button onClick={this._onClickDeleteEntry} className="delete-entry-btn">X</button>
        </p>
      </div>
    );
  }
}

export default Entry;
