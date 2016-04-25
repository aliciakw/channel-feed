import React from 'react';

var Entry = React.createClass({
  render: function () {
    var entry = this.props.entry;
    return(
      <div className="channel-entry">
        <h4>{entry.title}</h4>
        <p>{entry.description}</p>
        <p>{entry.instructorName}</p>
        <p>{entry.instructorPhotoUrl}</p>
        <p>{entry.subjectPhotoUrl}</p>
      </div>
    )
  }
});

export default Entry;
