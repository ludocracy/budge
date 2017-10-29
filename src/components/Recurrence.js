import React, { Component } from 'react';
import '../css/Recurrence.css';

class Recurrence extends Component {
  constructor(props) {
    super(props);

    this.onSubmitRecurrence = this.onSubmitRecurrence.bind(this);
  }

  onSubmitRecurrence(e) {
    e.preventDefault();

    // TODO
  }

  render() {
    return (
      <div className="Recurrence">
        <form onSubmit={this.onSubmitRecurrence}>
          <select className="unitInput"
            ref={input => this.unitInput = input}>
            <option value="month" selected>month</option>
            <option value="week">week</option>
            <option value="year">year</option>
            <option value="day">specific weekdays</option>
          </select>
          <select className="weekdaysInput"
            ref={input => this.weekdaysInput = input}>
            <option value="sunday">sunday</option>
            <option value="monday">monday</option>
            <option value="tuesday">tuesday</option>
            <option value="wednesday">wednesday</option>
            <option value="thursday">thursday</option>
            <option value="friday">friday</option>
            <option value="saturday">saturday</option>
          </select>
          <label htmlFor="endDateInput">End date</label>
          <input id="endDateInput" type="text"
            ref={input => this.endDateInput = input}
            placeholder="(optional)" />
          <label htmlFor="periodInput">Every: </label>
          <input id="periodInput" type="text"
            ref={input => this.periodInput = input}
            placeholder="number"/>
        </form>
      </div>
    );
  }
}

export default Recurrence;
