<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand"> NewsSpree </router-link>
    </div>
    <div class="links">
    <ul class="nav navbar-nav navbar-right">
      <li><router-link to="/tech-stories" class="navbar-links"> Tech </router-link></li>
      <li><router-link to="/sport-stories" class="navbar-links"> Sports </router-link></li>
      <li><router-link to="/finance-stories" class="navbar-links"> Finance </router-link></li>
    </ul>
  </div>
  </nav>
</template>

<script>

export default {
  name: 'app-nav',
  methods: {}
}
</script>
<style scoped>
.navbar-right { margin-right: 0px !important}

.log {
  margin: 5px 10px 0 0;
}
</style>
