<template>
  <div id="app">
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.entity-name {
  background: red;
  color: white;
  padding-right: 100px;
}

.entity-date {
  background: green;
}

.entity-company {
  background: blue;
}

.progress-bar {
  background-color: #7300e3 !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.editor__content td, .editor__content th {
  border: 1px solid black;
}
</style>
