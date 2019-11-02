<template>
  <div class="sidebar">
    <h1 class="theme-main" style="text-align: center">
      <router-link to="/">
        <img src="/logo.png" style="width: 200px; margin-left: 1em; margin-top: 1em" />
      </router-link>
    </h1>

    <h4>Team</h4>

    <ul>
      <li class="active">Finance</li>
      <li>Accounting</li>
      <li>Insurance</li>
      <li>Loan</li>
    </ul>

    <h4>Folders</h4>

    <ul>
      <li>Annual Reports</li>
      <li class="active">Financial Statements</li>
      <li>News Articles</li>
      <li>Bank Statements</li>
      <li>Land Registry</li>
      <li>Company Records</li>
      <li>Public Databases</li>
    </ul>

    <div class="settings-container">
      <v-icon name="settings" style="width: 24px; cursor: pointer"></v-icon>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  grid-area: sidebar;
  background: #f6f4f9;
  padding: 2em;
  padding-left: 0;
  display: flex;
  flex-direction: column;
}

h4 {
  text-transform: uppercase;
  font-size: 20px;
}

.sidebar h4 {
  text-align: left;
  margin-top: 2em;
  margin-bottom: 1em;
  margin-left: 1.3em;
  text-transform: uppercase;
}

.sidebar ul {
  text-align: left;
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}

.sidebar ul li {
  padding-left: 2em;
  height: 2em;
}

.sidebar ul li:hover {
  font-weight: bold;
  cursor: pointer;
  color: #7300e3;
}

.sidebar ul li.active {
  color: #7300e3;
  font-weight: bold;
  padding-left: 1.55em;
  border-left: 6px solid #7300e3;
}

.settings-container {
  text-align: left;
  padding-left: 2em;
  flex: 1 0 auto;
  align-items: end;
  flex-directions: row;
  display: flex;
}

.settings-container svg:hover {
  background: lightgray;
}
</style>
