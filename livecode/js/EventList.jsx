var EventList = React.createClass({
  render: function() {
    var events = this.props.events;
    var eventListItemMarkup = _.map(events, this._getEventListItemMarkup);

    return (
      <div className="list-group">
        { eventListItemMarkup }

        <a href="#" className="list-group-item btn btn-primary">Add Event</a>
      </div>
    );
  },

  _getEventListItemMarkup: function(event) {
    return (
      <EventListItem event={ event } onClick={ this._onItemClick }/>
    );
  },

  _onItemClick: function(event) {
    this.props.onItemSelect(event);
  }
});
