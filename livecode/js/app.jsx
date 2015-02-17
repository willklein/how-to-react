var App = React.createClass({
  getInitialState: function() {
    var events = this._getEvents();

    return({
      events: events,
      activeEvent: events[0]
    });
  },

  render: function() {
    /* js here */
    var events = this.state.events;

    return (
      <div className="container" id="appContainer">
        <Header />

        <div className="row">
          <div className="col-lg-4">
            <EventList events={ events } onItemSelect={ this._onItemSelect } />
          </div>

          <div className="col-lg-6">
            <EventDetail event={ this.state.activeEvent } />
          </div>
        </div>
      </div>
    );
  },

  _getEvents: function() {
    return eventsData.events;
  },

  _onItemSelect: function(event) {
    this.setState({
      activeEvent: event
    });
  }
});

React.render(
  <App/>,
  document.getElementById('appContainer')
);
