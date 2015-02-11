var EventDetail = React.createClass({
  render: function() {
    var event = this.props.event;

    return (
      <div>
        <h3>{ event.title }</h3>
        <p><time datetime={ event.date }>{ event.date }</time></p>
        <p>{ event.description }</p>
      </div>
    );
  },
});
