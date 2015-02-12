var EventListItem = React.createClass({

  render: function() {
    return (
      <a href="#" onClick={ this._onClick } className="list-group-item">
        <h4 className="list-group-item-heading">{ this.props.event.title }</h4>
        <p className="list-group-item-text">{ this.props.event.date }</p>
      </a>
    );
  },

  _onClick: function() {
    this.props.onClick(this.props.event);
  }
});
