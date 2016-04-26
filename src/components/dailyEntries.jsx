import React from 'react';
import Entry from './entry.jsx';
import moment from 'moment';

var DailyEntries = React.createClass({
  render: function () {
    var date = moment(this.props.date, 'YYYYMMDD').format('ddd, MMMM DD, YYYY'),
        entries = this.props.entries,
        startTimes = Object.keys(entries).map(Number).sort();
    var sortedEntries = startTimes.map(function (time) {
      return <Entry key={time} entry={entries[time]} />
    });
    return (
      <div className="daily-entries">
        <h5>{date}</h5>
        {sortedEntries}
      </div>
    )
  }
});

export default DailyEntries;
