var _ = require('lodash');
var React = require('react');
var EventListItem = require('./EventListItem');

var EventList = React.createClass({
  render: function() {
    var listItems = _.map(this.props.events, this._getListItem, this);

    return (
      <div className="list-group">
        { listItems }

        <a href="#" className="list-group-item btn btn-primary">Add Event</a>
      </div>
    );
  },

  _getListItem: function(event, index) {
    var component = this;

    var onClick = function() {
      component.props.onSelect(event);
    };

    return (
      <EventListItem event={ event } key={ index } onClick={ onClick }/>
    );
  }
});

module.exports = EventList;
