# Cardmarket Price Guide - MTG, Pokemon, Yu-Gi-Oh Card Prices

Cardmarket price guide for Magic, Pokemon, Yu-Gi-Oh, One Piece, Lorcana and 18 more card games: daily avg, low, trend and 1, 7, 30 day averages per card, foil or holo prices, joined with card names and expansion ids. Price change monitor mode. No login, no browser.

**[Run it on Apify Store](https://apify.com/kamerozkan/cardmarket-price-guide)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/cardmarket-price-guide); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/cardmarket-price-guide).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/cardmarket-price-guide) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "games": [
    "Pokemon"
  ],
  "cardNames": [
    "Charizard"
  ],
  "productType": "single",
  "sortBy": "trendDesc",
  "maxItems": 100
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "idProduct": 210069,
    "name": "Unlimited Booster Box",
    "cardName": "Unlimited Booster Box",
    "game": "Magic: The Gathering",
    "idGame": 1,
    "productType": "sealed",
    "category": "Magic Display",
    "idCategory": 7,
    "idExpansion": 3,
    "expansionName": "Unlimited",
    "idMetacard": null,
    "currency": "EUR",
    "avg": null,
    "low": null,
    "trend": 71800,
    "avg1": null,
    "avg7": null,
    "avg30": null,
    "foilVariant": null,
    "avgFoil": null,
    "lowFoil": null,
    "trendFoil": null,
    "avg1Foil": null,
    "avg7Foil": null,
    "avg30Foil": null,
    "trendVsAvg30Percent": null,
    "priceDate": "2026-10-22T02:44:58+0200",
    "dateAdded": "2007-01-01 00:00:00",
    "cardmarketUrl": "https://www.cardmarket.com/en/Magic/Products/Search?searchString=Unlimited%20Booster%20Box"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/cardmarket-price-guide/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
