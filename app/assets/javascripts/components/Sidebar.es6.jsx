var Sidebar = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    store.dispatch({type: 'OPEN_ROOM', room: this.refs.roomInput.value})
    this.refs.roomInput.value = ""
    this.refs.roomInput.blur()
  },

  render: function() {
    let focusedRoom = this.props.state.get('focusedRoom')

    let rooms = []
    this.props.state.get('rooms').forEach((v, room) => rooms.push(room) )

    let roomListItems = rooms.map(function(room) {
      return  <li key={room} className={(focusedRoom == room ? 'active' : '')}>
                <RoomLink room={room} />
              </li>
    })

    return (
      <div id="sidebar-wrapper">
        <div className='inside-sidebar'>
          <h1>Chat</h1>
          <form id='joinRoomContainer' onSubmit={this.handleSubmit}>
            Do you want to open new room?
            <input type="text" placeholder="Enter room name here" className='form-control' ref='roomInput' />
          </form>
          <ul className="sidebar-nav">
            {roomListItems}
          </ul>
        </div>
      </div>
    )
  }
});
Sidebar.propTypes = {
  state: React.PropTypes.object.isRequired
};



