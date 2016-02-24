class Message extends React.Component {
  render () {
    return (
      <div>
        <div><b>{this.props.nickname}:</b> {this.props.text}</div>
      </div>
    );
  }
}

Message.propTypes = {
  text: React.PropTypes.string.isRequired,
  nickname: React.PropTypes.string.isRequired
};
