import React from 'react';
import DailyEntries from './dailyEntries.jsx';
import moment from 'moment';

var ChannelFeed = React.createClass({
  getInitialState: function () {
    var raw = this.props.data,
        days = [],
        entries = {},
        entry,
        day,
        time;
    for (var i=0; i < raw.length; i++) {
      entry = raw[i];
      time = Date.parse(entry.time);
      day = moment(time).format('ddd, MMMM DD, YYYY');
      if(days.indexOf(day) === -1) {
        days.push(day);
        entries[day] = [];
      }
      entries[day].push({
        title: entry.title,
        description: entry.description,
        instructorName: entry.instructorName,
        instructorPhotoUrl: entry.instructorPhotoUrl,
        subjectPhotoUrl: entry.subjectPhotoUrl
      });
    };
    return {
      days: days,
      entries: entries,
    }
  },
  render: function () {
    var k = 0,
        entries = this.state.entries;
    var entriesByDay = this.state.days.map(function (date) {
      k++;
      return <DailyEntries key={k} date={date} entries={entries[date]}/>;
    });
    return (
      <div className="container">
        <h1>Upcoming Classes in this Channel</h1>
        {entriesByDay}
      </div>
    )
  }
});

export default ChannelFeed;
