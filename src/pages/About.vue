<template>
  <div class="container">
    <div class="row">
      <Layout />
    </div>
    <div class="col-6">
      <p>
        Put together quickly using Gridsome, the AirTable "Product catalog" base and queries to GraphQL to display data.
      </p>
      <p>At first I found it hard to understand the Gridsome process, but reading the docs I was able to make pages and query the data to be displayed using <code>&lt;page-query&gt;</code> for pages, and <code>&lt;static-query&gt;</code> for components</p>
      <p>Some of the data in the tables of "Product catalog" are linked to other tables, when this occurred, I created a component to call that other table, then filtered the what data to show using "v-if"</p>
      <p>I can talk about my process more in person</p>
      <p><a href="https://github.com/artworkjpm/john-gridsome" target="_blank" rel="noopener noreferrer">Github Repo for this web app</a></p>
      <p>Created by <a href="https://jpm.netlify.com" target="_blank">John Moran.</a></p>
    </div>
  </div>
</template>
