<template>
  <div>
    <header class="header mt-4">
      <!--  <div>
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
      </div> -->
      <div>
        <b-nav class="ml-4">
          <b-nav-item to="/">{{ $static.metadata.siteName }}</b-nav-item>
          <b-nav-item to="/about/">About</b-nav-item>
          <b-nav-item to="/vendors/">Vendors</b-nav-item>
          <b-nav-item to="/clients/">Clients</b-nav-item>
          <b-nav-item to="/client-orders/">Client Orders</b-nav-item>
        </b-nav>
      </div>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.router-link-active {
  font-weight: bold;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
