<template>
  <form @submit="sendMessage" id="chatForm">
    <input type="text" v-model="message" autocomplete="off" placeholder="type your message here..."/>
    <button>Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      //TODO: message santization
      this.$socket.emit('chat_message',{message: this.message})
      this.message = ''
    }
  }
}
</script>

<style scoped>
form {
  background: #fff;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-color: #000;
  border-top-style: solid;
  border-top-width: 1px;
}
form input {
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  width: 85%;
  margin-right: .5%;
}
form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
  margin-left: 2%;
}
</style>