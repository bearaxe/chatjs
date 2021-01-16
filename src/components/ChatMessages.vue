<template>
  <ul id="messages"></ul>
</template>

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