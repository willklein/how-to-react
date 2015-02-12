var EventList = React.createClass({
  render: function() {
    var events = this.props.events;

    var eventsHtml = _.map(events, this._getEvent, this);

    return (
      <div className="col-lg-4">
        <div className="list-group">

          { eventsHtml }

          <a href="#" className="list-group-item btn btn-primary">Add Event</a>
        </div>
      </div>
    );
  },

  _getEvent: function(event) {
    return (
      <EventListItem event={ event } onClick={ this.props.onSelect }/>
    );
  }
});
