function keysFromMap(map) {
  let keys = []
  map.forEach((value, key) => keys.push(key) )
  return keys
}

const chatStateEngine = (state = Immutable.fromJS({nickname: 'klemen', rooms: {}, focusedRoom: null}), action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CONNECT':
      return state.set('nickname', action.nickname)
    case 'OPEN_ROOM':
      let hashToMerge = {rooms: {}, focusedRoom: action.room}
      hashToMerge.rooms[action.room] = {messages: []}
      return state.mergeDeep(hashToMerge)
    case 'FOCUS_ROOM':
      return state.set('focusedRoom', action.room)
    case 'CLOSE_ROOM':
      return state.withMutations(function (state) {
        state.deleteIn(['rooms', action.room])
        // auto focus some other room
        if(state.get('focusedRoom') == action.room) {
          let rooms = keysFromMap(state.get('rooms'))
          if (rooms.length > 0) {
            state.set('focusedRoom', rooms[0])
          } else {
            state.set('focusedRoom', null)
          }
        }
      })
    case 'SEND_MESSAGE':
      return state.setIn(['rooms', state.get('focusedRoom'), 'messages'],
        state.getIn(['rooms', state.get('focusedRoom'), 'messages']).push(Immutable.fromJS({nickname: state.get('nickname'), text: action.text}))
      )
    default:
      return state
  }
}

const { createStore } = Redux;
const store = createStore(chatStateEngine)

const render = () => {
  state = store.getState()
  console.log("STATE=" + JSON.stringify(state))
  ReactDOM.render(
    <App state={state} />,
    document.getElementById('app')
  );
}

store.subscribe(render);

window.onload = function() {
  render();
}
