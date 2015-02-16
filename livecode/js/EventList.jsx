var EventList = React.createClass({
  render: function() {
    return (
      <div className="list-group">
        <EventListItem />

        <EventListItem />

        <a href="#" className="list-group-item btn btn-primary">Add Event</a>
      </div>
    );
  }
});
