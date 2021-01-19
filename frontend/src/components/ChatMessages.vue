<template>
  <ul id="messages">
    <li v-for="(messageData, index) in messages" :key='"message"+index'>
      <span v-if="messageData.trusted" v-html="messageData.value" />
      <span v-else v-text="messageData.value" />
    </li>
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
      this[`user_${data.action}`](data);
    },
    chat_message(data) {
      this.addMessage(`${data.user}: ${data.message}`)
    }
  },
  methods: {
    addMessage(message, safeToRender) {
      this.messages.push({
        trusted: safeToRender,
        value: message
      })
    },
    user_CONNECT(data){
      this.addMessage(`🔵 <i>${data.user} has joined the chat!</i>`, true)
    },
    user_DISCONNECT(data){
      this.addMessage(`🔴 <i>${data.user} left the chat..</i>`, true)
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