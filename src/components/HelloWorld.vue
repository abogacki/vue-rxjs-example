<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <input type="text" />
    </p>
    <p>Results:</p>
  </div>
</template>

<script>
import {messsageService} from '@/_services/message.service.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  color: green;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid gray;
}
</style>
