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
          <EventList events={ this.state.events } onSelect={ this._onSelect }/>

          <EventDetail event={ this.state.activeEvent }/>
        </div>
      </div>
    );
  },

  _getEvents: function() {
    return eventsData.events;
  },

  _onSelect: function(event) {
    this.setState({
      activeEvent: event
    });
  }
});

React.render(
  <App/>,
  document.getElementById('appContainer')
);
