var EventDetail = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.event !== this.props.event;
  },

  componentWillUpdate: function() {
    console.log('EventDetail componentWillUpdate');

  },

  render: function() {
    console.log('EventDetail render');
    var event = this.props.event;
    return (
      <div className="col-lg-6">
        <h3>{ event.title }</h3>
        <p><time datetime="2015-02-16">{ event.date }</time></p>
        <p>{ event.description }</p>
      </div>
    );
  },

  componentDidUpdate: function() {
    console.log('EventDetail componentDidUpdate');

  },
});
