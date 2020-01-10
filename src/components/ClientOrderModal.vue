<template>
  <div>
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th>Name</th>
          <th>Fulfil by</th>
          <th>Status</th>
          <th>Total order cost</th>
          <th>Invoice</th>
          <th>Bill to</th>
        </tr>
      </thead>
      <tbody v-for="item in $static.allClientOrder.edges" :key="item.node.id">
        <tr v-if="orderNumbers.includes(item.node.id)">
          <td>
            {{ item.node.name }}
            <p>ID: {{ item.node.id }}</p>
          </td>
          <td style="white-space: nowrap;">{{ item.node.fulfillBy }}</td>
          <td>
            <div class="badge" :class="getClass(item.node.status)">{{ item.node.status }}</div>
          </td>
          <td>${{ item.node.totalOrderCost.toLocaleString() }}</td>
          <td>
            <div v-for="file in item.node.invoice" :key="file.id">
              <p>{{ file.filename }}</p>
              <p>size: {{ file.size }}kb</p>
              <g-image :src="file.thumbnails.large.url" style="max-width: 5rem;" />
              <p><a :href="file.url" target="_blank">View PDF</a></p>
            </div>
          </td>
          <td>{{ item.node.billTo[0] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: { orderNumbers: Array },
  name: "ClientOrderModal",
  methods: {
    getClass(status) {
      if (status === "Received") {
        return "badge-success";
      } else if (status === "Shipped") {
        return "badge-info";
      } else if (status === "Invoiced") {
        return "badge-warning";
      } else if (status === "Preparing") {
        return "badge-primary";
      }
    }
  }
};
</script>
<static-query>
query clientOrder {
  allClientOrder {
    edges {
      node {
        name
        client
        fulfillBy
        status
        totalOrderCost
        id
        billTo
        invoice {
          url
          id
          size
          filename
          thumbnails {
            large {
              url
            }
          }
        }
      }
    }
  }
}
</static-query>
