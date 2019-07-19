<template>
  <div class="hello">
    <p>
      <button type="text" v-stream:click="count$">+</button>
    </p>
    <p>{{count}}</p>
  </div>
</template>

<script>
import { beersService } from '@/_services/beers.service.js'
import { map, startWith, scan, debounceTime } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'

export default {
  name: 'HelloWorld',
  subscriptions() {
    this.count$ = new Subject()
    return {
      count: this.count$.pipe(
        debounceTime(500),
        map(() => 1),
        startWith(0),
        scan((total, change) => total + change)
      ),
    }
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
