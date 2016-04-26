import React from 'react';
import DailyEntries from './dailyEntries.jsx';
import $ from 'jquery';
import moment from 'moment';

var ChannelFeed = React.createClass({
  getInitialState: function () {
    return {
      days: [],
      entries: {},
      msg: "Nothing in this channel."
    }
  },
  componentDidMount: function () {
    var url = '/api/channel/' + this.props.channelId;
    function sortEntries(raw) {
      var sortedEntries = {},
          dateTime;
      $(raw).each(function (index, entry) {
        dateTime = entry.time.replace(/\:|\-/g,'').split(' ');
        if (sortedEntries.hasOwnProperty(dateTime[0]) !== true){
         sortedEntries[dateTime[0]] = {};
        }
        sortedEntries[dateTime[0]][dateTime[1]] = {
          title: entry.title,
          description: entry.description,
          instructorName: entry.instructorName,
          instructorPhotoUrl: entry.instructorPhotoUrl,
          subjectPhotoUrl: entry.subjectPhotoUrl,
          duration: moment(entry.time).format('h:mm A') + " - " + moment(entry.time).add(1,'h').format('h:mm A') + ' EDT'
        };
      });
      return {
        days: Object.keys(sortedEntries).map(Number).sort(),
        entries: sortedEntries
      }
    }

    this.serverRequest = $.get(url, function (result) {
      this.setState(sortEntries(result));
    }.bind(this));

  },
  render: function () {
    var entries = this.state.entries,
        entriesByDay = this.state.days.map(function(date) {
          return <DailyEntries key={date} date={date} entries={entries[date]}/>;
    });
    var content = entriesByDay.length ? entriesByDay : this.state.msg;
    return (
      <div className="container">
        <h1>Upcoming Classes in this Channel</h1>
        {content}
      </div>
    )
  }
});

export default ChannelFeed;
