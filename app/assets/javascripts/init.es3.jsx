const chatStateEngine = (state = Immutable.Map({nickname: null, rooms: {}, focusedRoom: null}), action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CONNECT':
      return state.set('nickname', action.nickname)
    case 'OPEN_ROOM':
      new_state = state;
      new_state.focusedRoom = action.room
      new_state.rooms[action.room] = {messages: []};
      return new_state
    case 'FOCUS_ROOM':
      new_state = state;
      new_state.focusedRoom = action.room
      return new_state
    case 'CLOSE_ROOM':
      new_state = state
      delete new_state.rooms[action.room];
      return new_state
    case 'SEND_MESSAGE':
      new_state = state
      new_state.rooms[state.focusedRoom].messages.push({nickname: state.nickname, text: action.text})
      console.log(new_state)
      return new_state
    default:
      return state
  }
}

const { createStore } = Redux;
const store = createStore(chatStateEngine)

const render = () => {
  ReactDOM.render(
    <App state={store.getState()} />,
    document.getElementById('app')
  );
}

store.subscribe(render);

window.onload = function() {
  render();
}
