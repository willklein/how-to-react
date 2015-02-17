var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="page-header">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h1>Events App</h1>
            <p className="lead">Built in React</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
