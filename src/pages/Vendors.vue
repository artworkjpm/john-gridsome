<template>
  <div class="container">
    <div class="row">
      <Layout />
    </div>
    <div class="col">
      <table class="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>ID</th>
            <th>Vendor furniture</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $page.allVendor.edges" :key="item.node.id">
            <td>
              <g-image :src="item.node.logo[0].thumbnails.small.url" />
              <div style="white-space: nowrap">Tel: {{ item.node.phoneNumber }}</div>
            </td>
            <td>{{ item.node.name }}</td>
            <td>{{ item.node.id }}</td>
            <td><ProductCard :furniture="item.node.furniture" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard";
export default {
  components: { ProductCard }
};
</script>
<page-query>
query Vendor {
  allVendor{
    edges {
      node{
		name,
        id,
        phoneNumber,
        furniture,
        logo{
            thumbnails{
                small{
                    url
                }
            }
        }
      }
    }
  }
}
</page-query>
