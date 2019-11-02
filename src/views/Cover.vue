<template>
  <div id="cover-app">
    <app-sidebar />

    <div class="main-content">
      <app-user-block />

      <div class="digest-title-container">
        <h3>Today's Digest</h3>
        <div class="search-box">
          THE SEARCH BOX
        </div>
      </div>

      <section class="content-card">
        <div class="digest-item">
          <img src="/images/digest-1.png" />
          <div>
            <h6>Analysis Luxury Goods</h6>
            <p>How one franc turned LVMH into a luxury superpower.</p>
          </div>
        </div>

        <div class="digest-item">
          <img src="/images/digest-2.png" />
          <h6>Shale Oil &amp; Gas</h6>
          <p>UK halts fracking after report fuels earthquake fears.</p>
        </div>

        <!-- <div class="digest-item"> -->
        <!--   <img src="/images/digest-3.png" /> -->
        <!-- </div> -->
      </section>

      <div style="clear: left"></div>

      <br /><br />

      <div class="report-title-container">
        <h3>Report</h3>
        <div class="report-title-container-buttons">
          <b-button>Share</b-button>
          <div class="square-icon-button">
            <v-icon name="sliders" style="width: 36px"></v-icon>
          </div>
          <div class="square-icon-button">
            <v-icon name="edit" style="width: 36px"></v-icon>
          </div>
        </div>
      </div>

      <section class="report-grids">
        <div class="row">
          <div class="new-document-button" @click="goToNew()">
            <img src="/icons/new-document.png" /><br />
            <br />
            <router-link to="/new">New Document</router-link>
          </div>

          <div class="report-grid"><img src="/images/report-grid-1.png" /></div>
          <div class="report-grid"><img src="/images/report-grid-2.png" /></div>
          <div class="report-grid"><img src="/images/report-grid-3.png" /></div>
        </div>

        <div class="row">
          <div class="report-grid"><img src="/images/report-grid-4.png" /></div>
          <div class="report-grid"><img src="/images/report-grid-5.png" /></div>
          <div class="report-grid"><img src="/images/report-grid-6.png" /></div>
          <div class="report-grid"><img src="/images/report-grid-7.png" /></div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.theme-main {
  color: #7300e3;
}

h3 {
  color: gray;
  font-weight: bold;
}

.text-primary {
  color: #7300e3 !important;
}

#cover-app {
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1500px;
  grid-template-areas:
    "sidebar main-content"
}

h4 {
  text-transform: uppercase;
  font-size: 20px;
}

.main-content {
  grid-area: main-content;
  padding: 2em;
}

.content-card {
  box-shadow: 4px 4px 10px 1px rgba(0,0,0,0.1);
  float: left;
  overflow-x: hidden;
  height: 250px;
}

.digest-item {
  float: left;
  border: 1px solid #f6f4f9;
  text-align: left;
  padding: 1em;
  margin: 1em;
  min-width: 500px;
}

.digest-item img {
  float: left;
  margin-right: 1em;
}

.digest-item div {
  float: left;
}

.digest-title-container {
  text-align: left;
  display: flex;
}

.digest-title-container  h3 {
  flex: 1 0 auto;
  font-size: 36px;
}

.digest-title-container .search-box {
  flex: 0 0 auto;
}

h6 {
  color: #7300e3;
}

.report-title-container {
  text-align: left;
  display: flex;
  margin-bottom: 5em;
  margin-top: 4em;
}

.report-title-container h3 {
  font-size: 36px;
  flex: 1 0 auto;
}

.report-title-container .report-title-container-buttons {
  flex: 0 0 auto;
  float: left;
}

.report-title-container button {
  float: left;
  background: #7300e3;
  font-size: 24px;
  margin-right: 0.5em;
  border-radius: 8px;
  width: 150px;
  cursor: pointer;
}

.square-icon-button {
  cursor: pointer;
  float: left;
  width: 48px;
  height: 48px;
  box-shadow: 4px 4px 10px 1px rgba(0,0,0,0.1);
  text-align: center;
  padding-top: 4px;
  padding-left: 2px;
  margin-right: 0.3em;
  margin-left: 0.3em;
}

.report-grids .row {
  display: flex;
}

.new-document-button {
  width: 300px;
  box-shadow: 4px 4px 10px 1px rgba(0,0,0,0.1);
  padding: 2em;
  font-size: 22px;
  margin: 1em;
}

.new-document-button:hover {
  background: #f6f4f9;
  cursor: pointer;
}

.new-document-button a:link {
  color: gray !important;
  text-decoration: none;
}

.report-grids .report-grid {
  box-shadow: 4px 4px 10px 1px rgba(0,0,0,0.1);
  width: 300px;
  padding: 2em;
  margin: 1em;
}

.report-grids .report-grid:hover {
  background: #f6f4f9;
  cursor: pointer;
}

.report-grids .report-grid img {
  width: 200px;
}
</style>

<script>
import _ from 'lodash';
import AppSidebar from '@/components/AppSidebar';
import AppUserBlock from '@/components/AppUserBlock';

export default {
  name: 'cover',

  components: {
    AppSidebar, AppUserBlock
  },

  data() {
    return {
    };
  },

  methods: {
    goToNew() {
      this.$router.push({ path: '/new' });
    }
  },
};
</script>
