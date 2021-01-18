<template>
  <div v-if="username != ''">
    <img alt="Vue logo" src="./assets/logo.png">
    <ChatMessages />
    <ChatBar />
  </div>
  <div v-else>
    <input ref="usernameEntry" placeholder="username go here, scrub" />
    <button @click="setUsername">submit</button>
  </div>
</template>

<script>
import ChatBar from './components/ChatBar.vue'
import ChatMessages from './components/ChatMessages.vue'

export default {
  name: 'App',
  components: {
    ChatBar,
    ChatMessages
  },
  data() {
    return {
      username: ''
    }
  },
   mounted() {
    //this.username = await prompt('Give user name, please.');
    // this.$socket.emit('username', this.username);
    this.$socket.connect();
  },
  sockets: {


  },
  methods: {
    setUsername() {
      this.username = this.$refs.usernameEntry.value;
      this.$socket.emit('username', this.username);
      console.clear();
      console.log('socket', this.$socket);

    }
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
