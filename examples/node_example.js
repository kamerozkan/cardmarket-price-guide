// Run cardmarket-price-guide on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "games": [
    "Pokemon"
  ],
  "cardNames": [
    "Charizard"
  ],
  "productType": "single",
  "sortBy": "trendDesc",
  "maxItems": 100
};
const run = await client.actor('kamerozkan/cardmarket-price-guide').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
