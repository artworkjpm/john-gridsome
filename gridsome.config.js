// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const apiKeyEnv = process.env.API_KEY;
const baseEnv = process.env.BASE_ID;

module.exports = {
  siteName: "John's Furniture Store",
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: apiKeyEnv, // required
        baseId: baseEnv, // required
        tableName: 'Furniture', // required
        typeName: 'Product', // required
        //select: {}, // optional
        //route: '/products/:productId'
      },
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: apiKeyEnv, // required
        baseId: baseEnv, // required
        tableName: 'Vendors', // required
        typeName: 'Vendor', // required
      },
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: apiKeyEnv, // required
        baseId: baseEnv, // required
        tableName: 'Clients', // required
        typeName: 'Client', // required
      },
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: apiKeyEnv, // required
        baseId: baseEnv, // required
        tableName: 'Client orders', // required
        typeName: 'clientOrder', // required
      },
    },
  ],
  templates: {
    //'Product': '/products/:productId'
    //YOUR_TYPE_NAME: 'YOUR_OPTIONAL_ROUTE', // optional
  },
}
