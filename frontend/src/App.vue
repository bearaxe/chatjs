<template>
  <div v-if="username != ''">
    <img alt="Vue logo" src="./assets/logo.png">
    <ChatMessages />
    <ChatBar />
  </div>
  <div v-else>
    <Login />
  </div>
</template>

<script>
import ChatBar from './components/ChatBar.vue'
import ChatMessages from './components/ChatMessages.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    ChatBar,
    ChatMessages,
    Login
  },
  data() {
    return {
      username: ''
    }
  },
   mounted() {
    this.$socket.connect();
  },
  sockets: {
    is_online(data) {
      console.log('someone is online?', data);
    }
  },
  methods: {

  }
}
</script>

<style>
* {
  margin: 0; padding: 0; box-sizing: border-box;
}
body {
  font: 13px Helvetica, Arial;
}
</style>
