var App = React.createClass({
  render: function() {
    return (
      <div className="container" id="appContainer">
        <Header />

        <div className="row">
          <div className="col-lg-4">
            <EventList />
          </div>

          <div className="col-lg-6">
            <EventDetail />
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <App/>,
  document.getElementById('appContainer')
);
