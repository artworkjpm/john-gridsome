<template>
  <div class="container">
    <div class="row">
      <Layout />
    </div>
    <div class="col-6">
      <b-table striped hover :items="$page.allVendor.edges"></b-table>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $page.allVendor.edges" :key="item.node.id">
            <td></td>
          </tr>
        </tbody>
      </table>
      <!-- <b-card-group columns>
        <b-card v-for="edge in $page.allProduct.edges" :key="edge.node.images[0].id" :title="edge.node.name" :img-src="edge.node.images[0].url" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>
            {{ edge.node.designer }}
          </b-card-text>

        </b-card>
      </b-card-group>
      -->
    </div>
  </div>
</template>

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
          id,
          url,
        }
      }
    }
  }
}
</page-query>
