import React from 'react';
import DailyEntries from './dailyEntries.jsx';
import moment from 'moment';

var ChannelFeed = React.createClass({
  getInitialState: function () {
    var raw = this.props.data,
        days = [],
        startTimes= {},
        sortedEntries = {},
        entry,
        dateTime,
        day,
        time;
    for (var i=0; i < raw.length; i++) {
      entry = raw[i];
      dateTime = entry.time.split(" ");
      day = dateTime[0].replace(/\-/g, '');
      time = dateTime[1].replace(/\:/g, '');
      if (sortedEntries.hasOwnProperty(day) !== true){
       sortedEntries[day] = {};
      }
      sortedEntries[day][time] = {
        title: entry.title,
        description: entry.description,
        instructorName: entry.instructorName,
        instructorPhotoUrl: entry.instructorPhotoUrl,
        subjectPhotoUrl: entry.subjectPhotoUrl,
        duration: moment(entry.time).format('h:mm A') + " - " + moment(entry.time).add(1,'h').format('h:mm A') + ' EDT'
      };
    };
    return {
      days: Object.keys(sortedEntries).map(Number).sort(),
      entries: sortedEntries
    }
  },
  render: function () {
    var entries = this.state.entries,
        entriesByDay = this.state.days.map(function(date) {
          return <DailyEntries key={date} date={date} entries={entries[date]}/>;
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
