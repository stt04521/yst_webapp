/**
 * Created by shishitengteng on 2017/10/27.
 */
import { pomelo } from '../store/modules/chat'
export default function createWebSocketPlugin (socket) {
  return store => {
    pomelo.on('onChat', data => {
      console.log(data)
      store.dispatch('saveMsg', data)
    })
    // store.subscribe(mutation => {
    //   if (mutation.type === 'UPDATE_DATA') {
    //     socket.emit('update', mutation.payload)
    //   }
    // })
  }
}
