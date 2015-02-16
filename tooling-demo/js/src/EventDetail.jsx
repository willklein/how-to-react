var React = require('react');

var EventDetail = React.createClass({
  render: function() {
    console.log('EventDetail render');
    var event = this.props.event;

    return (
      <div>
        <h3>{ event.title }</h3>
        <p><time datetime={ event.date }>{ event.date }</time></p>
        <p>{ event.description }</p>
      </div>
    );
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.event !== this.props.event;
  },

  componentDidUpdate: function() {
    console.log('EventDetail component did update!');
  }
});

module.exports = EventDetail;
