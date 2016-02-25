var Room = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    store.dispatch({type: 'SEND_MESSAGE', text: this.refs.messageInput.value})
    this.refs.messageInput.value = ""
  },

  componentDidUpdate: function() {
    var node = this.refs.messages;
    node.scrollTop = node.scrollHeight
  },

  render: function() {
    let messageItems = this.props.messages.map(function(message, i) {
      return (
        <div className="message" key={i}>
          <b>{message.get('nickname')}:</b> {message.get('text')}
        </div>
      )
    });

    let className = "room" + (this.props.isFocused == true ? '' : ' hidden');
    return (
      <div className={className}>
        <h1>#{this.props.room}</h1>
        <div className="messages" ref='messages'>
          {messageItems}
        </div>
        <form className="" onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-xs-10'>
              <input type="text" className="form-control" placeholder="" ref="messageInput" required/>
            </div>
            <div className='col-xs-2'>
              <button className="btn btn-primary btn-block" type="Submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
});

Room.propTypes = {
  room: React.PropTypes.string.isRequired,
  messages: React.PropTypes.object.isRequired,
};
