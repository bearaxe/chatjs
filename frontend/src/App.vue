<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ChatMessages />
  <ChatBar />
</template>

<script>
import ChatBar from './components/ChatBar.vue'
import ChatMessages from './components/ChatMessages.vue'

export default {
  name: 'App',
  components: {
    ChatBar,
    ChatMessages
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
