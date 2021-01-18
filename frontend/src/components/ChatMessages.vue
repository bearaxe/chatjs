<template>
  <ul id="messages">
    <li v-for="(message, index) in messages" :key='"message"+index' v-text="message" />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    }
  },
  sockets: {
    is_online(data) {
      console.log('someone is online?', data)
      this.addMessage('🔵 <i>' + data.user + ' join the chat..</i>')
    },
    chat_message(data) {
      this.addMessage(`${data.user}: ${data.message}`)
    }
  },
  methods: {
    addMessage(message) {
      //TODO: allow html i want to add, ignore html user sends
      this.messages.push(message)
    }
  }
}
</script>

<style scoped>
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages li {
  padding: 5px 10px;
}
#messages li:nth-child(odd) {
  background: #eee;
}
</style>