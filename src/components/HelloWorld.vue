<template>
  <div>
    <b-field :type="{'is-danger':!!error}" :message="error">
      <b-input
        :type="{'is-danger': !!error}"
        v-stream:input="pageNumber$"
        placeholder="Put numbers"
      />
    </b-field>
    <br />
    <div>
      <div class="columns is-multiline has-text-centered">
        <div
          class="column is-2-desktop is-4-tablet is-12-mobile"
          v-for="beer in beers"
          :key="beer.id"
        >
          <a class="card">
            <div class="card-image">
              <figure class="image has-text-centered">
                <img :src="beer.image_url" />
              </figure>
            </div>
            <div class="card-content">
              <strong>{{ beer.name }}</strong>
              <p>{{beer.tagline}}</p>
            </div>
          </a>
        </div>
      </div>
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
      error: '',
    }
  },
  subscriptions() {
    this.pageNumber$ = new Subject()
    return {
      pageNumber: this.pageNumber$,
    }
  },
  created() {
    beersService.fetchBeers(this.pageNumber$).subscribe(
      results => (this.beers = results),
      error => {
        this.error = error.message
      }
    )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
  border-radius: 7px;
  display: block;
  transition: 0.3s box-shadow cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 2px 4px rgba(10, 10, 10, 0.1);
  height: 100%;

  &:hover {
    box-shadow: 0 6px 10px rgba(10, 10, 10, 0.1);
  }
}

.card-image {
  img {
    margin: 0 auto;
    max-height: 200px;
    width: auto;
  }
}
</style>
