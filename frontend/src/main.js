import Vue from 'vue'
import * as io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import App from './App.vue'
import {SERVER_PORT} from '../../config.json';

const SocketInstance = io.connect(`http://localhost:${SERVER_PORT}`, {
  withCredentials: true,
});

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance
}));

new Vue({
  render: h => h(App),
  components: { App }
}).$mount('#app')