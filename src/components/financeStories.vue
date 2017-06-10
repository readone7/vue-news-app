<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center"> Daily Finance Stories from across the Globe </h3>
    <hr/>

    <div class="col-sm-4" v-for="story in financeStories">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"><a v-bind:href="story.url" target="_blank"> {{story.title}} </a></h3>
          <h5> published at : {{story.publishedAt}} </h5>
        </div>
        <div class="panel-body">
          <p><span class="badge alert-info"> Author: </span> {{ story.author }} </p>
          <p> {{story.description}} </p>
          <p><a v-bind:href="story.url" class="story-link" target="_blank"> <img class="media-object" v-bind:src="story.urlToImage"> </a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNav from './AppNav'
  import { getFinanceStories } from './utils/news-api'

  export default {
    name: 'financeStories',
    components: {
      AppNav
    },
    data () {
      return {
        financeStories: ''
      }
    },
    methods: {
      getFinanceStories () {
        getFinanceStories().then((stories) => {
          this.financeStories = stories.articles
        })
      }
    },
    mounted () {
      this.getFinanceStories()
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .story-link {
    color: #3399CC;
  }
  .media-object {
    width: 400px;
    position: relative;
  }

</style>
