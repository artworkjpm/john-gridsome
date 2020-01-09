<template>
  <div>
    <Layout />
    <div class="col-6">
      <b-card-group columns>
        <b-card :title="product.name" :img-src="product.images[0].url" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text> {{ product.id }} </b-card-text>

          <g-link :to="'/products/' + product.id"> Full Details >></g-link>
          <!-- <g-link :to="'products/' + edge.node.images[0].id"> Full Details</g-link> -->
          <!-- <g-link class="link--red" to="/products">Events</g-link> -->
          <!-- <router-link :to="{ name: 'product', params: { productId: edge.node.images[0].id } }">Details</router-link> -->
        </b-card>
      </b-card-group>
    </div>

    <div v-for="(edge, index) in $page.allProduct.edges" :key="index">
      <img height="100px" :src="edge.node.images[0].url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }
};
</script>
