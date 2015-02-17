var EventListItem = React.createClass({
  render: function() {
    var event = this.props.event;

    return (
      <a href="#" onClick={ this._onClick } className="list-group-item">
        <h4 className="list-group-item-heading">{ event.title }</h4>
        <p className="list-group-item-text">{ event.date }</p>
      </a>
    );
  },

  _onClick: function() {
    this.props.onClick(this.props.event);
  }
});
