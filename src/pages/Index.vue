<template>
  <div class="container">
    <div class="row">
      <Layout />
    </div>
    <div class="row">
      <div class="col-4 col-sm-2">
        <b-nav vertical>
          <b-nav-item @click="filterType('All')" :class="productType === 'All' ? 'active' : ''">All Products</b-nav-item>
          <b-nav-item @click="filterType('Lighting')" :class="productType === 'Lighting' ? 'active' : ''">Lighting</b-nav-item>
          <b-nav-item @click="filterType('Rugs')" :class="productType === 'Rugs' ? 'active' : ''">Rugs</b-nav-item>
          <b-nav-item @click="filterType('Chairs')" :class="productType === 'Chairs' ? 'active' : ''">Chairs</b-nav-item>
          <b-nav-item @click="filterType('Tables')" :class="productType === 'Tables' ? 'active' : ''">Tables</b-nav-item>
          <b-nav-item @click="filterType('Sofas')" :class="productType === 'Sofas' ? 'active' : ''">Sofas</b-nav-item>
        </b-nav>
      </div>
      <div class="col-8">
        <b-card-group columns>
          <div v-for="edge in $page.allProduct.edges" :key="edge.node.id">
            <b-card v-if="edge.node.type === productType || productType === 'All'" :title="edge.node.name" :img-src="edge.node.images[0].url" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
              <b-card-text>
                {{ edge.node.type }}
              </b-card-text>
            </b-card>
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",
  data() {
    return {
      makeBold: false,
      productType: "All"
    };
  },
  methods: {
    filterType(type) {
      this.productType = type;
    }
  }
};
</script>

<page-query>
query Product {
  allProduct {
    edges {
      node {
        type
        name
        id
        description
        designer
        images {
          id,
          url,
        }
      }
    }
  }
}
</page-query>

<style>
.active {
  font-weight: bold;
}
</style>
