<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center"> Daily Stories from across the Globe </h3>
    <hr/>

    <div class="col-sm-4" v-for="story in allStories">
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
  import { getAllStories } from './utils/news-api'

  export default {
    name: 'allStories',
    components: {
      AppNav
    },
    data () {
      return {
        allStories: ''
      }
    },
    methods: {
      getAllStories () {
        getAllStories().then((stories) => {
          this.allStories = stories.articles
        })
      }
    },
    mounted () {
      this.getAllStories()
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
