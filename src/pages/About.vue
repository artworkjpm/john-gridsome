<template>
  <div>
    <div class="col-6">
      <b-card-group columns>
        <b-card v-for="(edge, index) in $page.allProduct.edges" :key="index" title="Card Title" :img-src="edge.node.images[0].url" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-card-group>
    </div>

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
