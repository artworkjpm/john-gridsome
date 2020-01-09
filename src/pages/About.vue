<template>
  <div>
    <div v-for="(edge, index) in $page.allProduct.edges" :key="index">
      <img height="100px" :src="edge.node.images[0].url" />
    </div>
  </div>
</template>

<page-query>
query Product {
  allProduct {
    edges {
      node {
        images {
          id,
          url,
        }
      }
    }
  }
}
</page-query>
