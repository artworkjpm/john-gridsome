<template>
  <div>
    <b-card-group columns>
      <div v-for="edge in $static.allProduct.edges" :key="edge.node.id">
        <b-card :title="edge.node.name" :img-src="edge.node.images[0].url" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2" v-if="furniture.includes(edge.node.id)">
          <b-card-text>
            {{ edge.node.type }}
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    furniture: Array
  },
  created() {
    //console.log(this.$props.furniture);
  }
};
</script>

<static-query>
query Product {
  allProduct {
    edges {
      node {
        type,
        name,
        id,
        description,
        designer,
        images {
          id,
          url,
        }
      }
    }
  }
}
</static-query>
<style>
/* .card-title {
  font-size: 18px;
} */
</style>
