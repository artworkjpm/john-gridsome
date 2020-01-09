<template>
  <div class="container">
    <div class="row">
      <Layout />
    </div>
    <div class="col">
      <table class="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Billing address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $page.allClient.edges" :key="item.node.id">
            <td>{{ item.node.name }}</td>
            <td><g-image :src="item.node.photosOfSpace[0].thumbnails.large.url" style="max-width: 20rem;" /></td>
            <td>{{ item.node.billingAddress }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<page-query>
query Clients {
  allClient{
    edges {
      node{
        id,
        billingAddress,
		name,
        photosOfSpace{
            thumbnails{
                large{
                    url
                }
            }
        }
        clientOrders,
      }
    }
  }
}
</page-query>
