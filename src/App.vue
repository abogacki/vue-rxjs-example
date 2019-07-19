<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{messages}}
    <MessagesButtons />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import MessagesButtons from '@/components/MessagesButtons'
import { messageService } from '@/_services/message.service'

export default {
  name: 'app',
  data() {
    return { messages: [] }
  },
  created() {
    this.subscription = messageService.getMessages().subscribe(message => {
      if (message) {
        this.messages.push(message)
      } else {
        this.messages = []
      }
    })
  },
  beforeDestroy() {
    this.subscription.unsubscribe()
  },
  components: {
    HelloWorld,
    MessagesButtons,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
