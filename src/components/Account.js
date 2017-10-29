import React, { Component } from 'react';
import Entry from './Entry';
import AddEntry from './AddEntry';
import '../css/Account.css';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
      entries: [] // must be in reverse-chronological order: most-recent first
    }
  }

  componentWillMount() {
    // TODO get entries and latest balance
  }

  render() {
    let pastBalance = this.state.balance;
    let Entries = this.state.entries.map((entry, index) => {
      let comp = <Entry entry={entry} key={index} balance={pastBalance} />;
      pastBalance -= entry.amount;
      return comp;
    });
    return (
      <div className="Account">
        {Entries}
        <AddEntry />
      </div>
    );
  }
}

export default Account;
