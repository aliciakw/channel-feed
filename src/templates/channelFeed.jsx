import React from 'react';
import ChannelEntry from './channelEntry.jsx';

var ChannelFeed = React.createClass({
  render: function () {
    var index = 0,
        entries = this.props.data.map(function (entry) {
          index++;
          return <Channel key={index} title={entry} />;
        });
    return (
      <div>
        <p>List of channel entries:</p>

      </div>
    );
  }
});

export default ChannelFeed;
