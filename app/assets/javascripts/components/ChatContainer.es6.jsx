var ChatContainer = React.createClass({
  render: function() {
    let focusedRoom = this.props.state.focusedRoom
    let roomContainerItems = []
    for(var roomKey in this.props.state.rooms) {
      let room = this.props.state.rooms[roomKey]
      roomContainerItems.push(<Room key={roomKey} room={roomKey} messages={room.messages} isFocused={focusedRoom == roomKey}/>)
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

