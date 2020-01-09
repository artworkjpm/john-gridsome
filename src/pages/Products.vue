<template>
  <div class="container">
    <div class="row">
      <Layout />
    </div>
    <div class="row">
      <div class="col-2">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="filterType('All')">All Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="filterType('Lighting')">Lighting</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="filterType('Rugs')">Rugs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="filterType('Chairs')">Chairs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="filterType('Tables')">Tables</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" @click="filterType('Sofas')">Sofas</a>
          </li>
        </ul>
      </div>
      <div class="col">
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
