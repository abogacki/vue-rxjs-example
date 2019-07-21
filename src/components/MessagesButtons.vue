<template>
  <div>
    <b-button @click="sendMessage()">send message</b-button>
    <b-button @click="clearMessages()">clear messages</b-button>
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