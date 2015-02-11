var App = React.createClass({

  getInitialState: function() {
    var events = this._getEvents();

    return {
      events: events,
      activeEvent: events[0]
    };
  },

  render: function() {
    return (
      <div>
        <Header/>

        <div className="row">
          <div className="col-lg-4">
            <EventList events={ this.state.events } onSelect={ this._onChange }/>
          </div>

          <div className="col-lg-8">
            <EventDetail event={ this.state.activeEvent }/>
          </div>
        </div>
      </div>
    );
  },

  _getEvents: function() {
    return eventsData.events;
  },

  _onChange: function(event) {
    this.setState({
      activeEvent: event
    });
  }
});

React.render(
  <App/>,
  document.getElementById('appContainer')
);
