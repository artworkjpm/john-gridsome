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
            <th>Orders</th>
            <th>Billing address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $page.allClient.edges" :key="item.node.id">
            <td>{{ item.node.name }}</td>
            <td><g-image :src="item.node.photosOfSpace[0].thumbnails.large.url" style="max-width: 20rem;" /></td>
            <td style="white-space: nowrap;">
              <ol class="pl-2">
                <li v-for="order in item.node.clientOrders" :key="order">{{ order }}</li>
              </ol>
              <b-button v-b-modal.modal-1 class="mt-2 btn btn-success" @click="getOrderNumber(item.node.clientOrders)"
                >View orders <span class="badge badge-secondary"> {{ item.node.clientOrders.length }}</span></b-button
              >
            </td>
            <td>{{ item.node.billingAddress }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal id="modal-1" title="Client Orders">
      <p class="my-4"><ClientOrderModal :orderNumbers="orderNumbers" /></p>
    </b-modal>
  </div>
</template>
<script>
import ClientOrderModal from "../components/ClientOrderModal";
export default {
  components: { ClientOrderModal },
  data() {
    return {
      orderNumbers: Array
    };
  },
  methods: {
    getOrderNumber(orderNumbers) {
      this.orderNumbers = orderNumbers;
      this.$bvModal.show("modal-1");
    }
  }
};
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
