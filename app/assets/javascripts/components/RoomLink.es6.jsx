var RoomLink = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    store.dispatch({type: 'FOCUS_ROOM', room: this.props.room})
  },

  handleDeleteClick: function(event) {
    event.preventDefault();
    store.dispatch({type: 'CLOSE_ROOM', room: this.props.room})
  },

  render: function() {
    return (
      <div>
        <a href='#' onClick={this.handleClick}>#{this.props.room}</a>
        <a href='#' className='delete' onClick={this.handleDeleteClick}>x</a>
      </div>
    )
  }
});

RoomLink.propTypes = {
  room: React.PropTypes.string.isRequired,
};

