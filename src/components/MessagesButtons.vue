<template>
  <div>
    <button @click="sendMessage()">send message</button>
    <button @click="clearMessages()">clear messages</button>
  </div>
</template>

<script>
import { messageService } from '@/_services'
export default {
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    sendMessage() {
      messageService.sendMessage(
        'Message from Home Page Component to App Component!'
      )
    },
    clearMessages() {
      messageService.clearMessages()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>