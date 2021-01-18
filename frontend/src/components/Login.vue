<template>
  <div>
    <input ref="usernameEntry" placeholder="username go here, scrub" />
    <button @click="setUsername">submit</button>
  </div>
</template>

<script>
export default {
  methods: {
    setUsername() {
      this.username = this.$refs.usernameEntry.value
      this.$socket.emit('username', this.username)
      this.$emit('loggedIn')
    }
  }
}
</script>