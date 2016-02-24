var ConnectForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    store.dispatch({type: 'CONNECT', nickname: this.refs.nicknameInput.value})
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form className="form-connect" onSubmit={this.handleSubmit}>
            <h3><label htmlFor="inputNickName" className="">Choose your nickname:</label></h3>
            <input id="inputNickName" type="text" className="form-control" placeholder="Enter nickname here .." refX={(ref) => this.nicknameInput = ref} ref="nicknameInput" required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    )
  }
});
