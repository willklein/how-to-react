var EventDetail = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.event !== nextProps.event;
  },

  render: function() {
    console.log('EventDetail render');
    var event = this.props.event;

    return (
      <div>
        <h3>{ event.title }</h3>
        <p>{ event.date }</p>
        <p>{ event.description }</p>
      </div>
    );
  },

  componentDidUpdate: function() {
    console.log('EventDetail componentDidUpdate');
  }
});
