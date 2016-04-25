import React from 'react';

var Entry = React.createClass({
  render: function () {
    var entry = this.props.entry;
    return(
      <div className="channel-entry">
        <div className="entry-data entry-icon">
          <img src={entry.subjectPhotoUrl} />
        </div>
        <div className="entry-data entry-blurb">
          <span className="entry-title">{entry.title}</span><br/>
          {entry.description}
        </div>
        <div className="entry-data entry-inst">
          <img className="pull-right" src={entry.instructorPhotoUrl} />
          <span><strong>{entry.instructorName}</strong></span>
        </div>
        <div className="entry-data">
          <strong>{entry.time}</strong>
        </div>
      </div>
    )
  }
});

export default Entry;
