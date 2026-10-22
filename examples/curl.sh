#!/usr/bin/env bash
# Run cardmarket-price-guide synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~cardmarket-price-guide/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"games": ["Pokemon"], "cardNames": ["Charizard"], "productType": "single", "sortBy": "trendDesc", "maxItems": 100}'
