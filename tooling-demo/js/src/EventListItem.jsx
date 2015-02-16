var React = require('react');

var EventListItem = React.createClass({
  render: function() {
    var event = this.props.event;

    return (
      <a href="#" onClick={ this.props.onClick } className="list-group-item">
        <h4 className="list-group-item-heading">{ event.title }</h4>
        <p className="list-group-item-text">{ event.date }</p>
      </a>
    );
  }
});

module.exports = EventListItem;
