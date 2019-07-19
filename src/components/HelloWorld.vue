<template>
  <div class="hello">
    <p>
      <input type="text" v-stream:input="pageNumber$" />
    </p>
    <div class="beer" v-for="beer in beers" :key="beer.id">
      <img :src="beer.image_url" />
      <p>{{ beer.name }}</p>
    </div>
  </div>
</template>

<script>
import { beersService } from '@/_services/beers.service.js'
import { Subject } from 'rxjs'

export default {
  name: 'HelloWorld',
  data() {
    return {
      beers: [],
    }
  },
  subscriptions() {
    this.pageNumber$ = new Subject()
    return {
      pageNumber: this.pageNumber$,
    }
  },
  created() {
    beersService
      .fetchBeers(this.pageNumber$)
      .subscribe(results => (this.beers = results))
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

.beer {
  padding: 20px;
  display: inline-block;
  border: 1px solid gray;
  border-radius: 12px;
  margin: 20px;
}

img {
  max-width: 200px;
  max-height: 200px;
}
</style>
