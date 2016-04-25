import React from 'react';
import Entry from './entry.jsx';
import createFragment from 'react-addons-create-fragment';

var DailyEntries = React.createClass({
  render: function () {
    var k = 0,
        entries = this.props.entries.map(function (entry) {
          k++;
          return <Entry key={k} entry={entry} />
        });
    return (
      <div className="daily-entries">
        <h4>{this.props.date}</h4>
        {entries}
      </div>
    )
  }
});

export default DailyEntries;
