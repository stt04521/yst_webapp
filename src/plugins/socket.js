/**
 * Created by shishitengteng on 2017/10/27.
 */
const Pomelo = require('yuan-pomeloclient')
const pomelo = new Pomelo()
export default function createWebSocketPlugin (socket) {
  return store => {
    pomelo.on('data', data => {
      store.commit('receiveData', data)
    })
    // store.subscribe(mutation => {
    //   if (mutation.type === 'UPDATE_DATA') {
    //     socket.emit('update', mutation.payload)
    //   }
    // })
  }
}
