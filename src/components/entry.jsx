import React from 'react';
import moment from 'moment';

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
          <img src={entry.instructorPhotoUrl} />
          <span className="pull-right"><strong>{entry.instructorName}</strong></span>
        </div>
        <div className="entry-data pull-right">
          <strong>{entry.duration}</strong>
        </div>
      </div>
    )
  }
});

export default Entry;
