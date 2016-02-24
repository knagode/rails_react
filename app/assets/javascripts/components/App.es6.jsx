class App extends React.Component {
  render () {
    nickname = this.props.state.get('nickname')
    return (
      nickname ? <ChatContainer state={this.props.state} /> :
        <div className='container'>
          <ConnectForm />
        </div>
    )
  }
}
