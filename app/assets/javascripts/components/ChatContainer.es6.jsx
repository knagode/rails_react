var ChatContainer = React.createClass({
  render: function() {
    let focusedRoom = this.props.state.get('focusedRoom')

    let rooms = keysFromMap(this.props.state.get('rooms'))

    let roomContainerItems = []

    for(var i in rooms) {
      let roomKey = rooms[i]
      let room = this.props.state.getIn(['rooms', roomKey])
      let roomObject = <Room  key={roomKey}
                              room={roomKey}
                              messages={room.get('messages')}
                              isFocused={focusedRoom == roomKey} />

      roomContainerItems.push(roomObject)
    }

    return (
      <div id="wrapper">
        <Sidebar state={this.props.state} />
        <div id='page-content-wrapper'>
          {roomContainerItems}
        </div>
      </div>
    )
  }
});

ChatContainer.propTypes = {
  state: React.PropTypes.object.isRequired
};

