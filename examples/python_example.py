"""Run cardmarket-price-guide on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'games': ['Pokemon'],
 'cardNames': ['Charizard'],
 'productType': 'single',
 'sortBy': 'trendDesc',
 'maxItems': 100}
run = client.actor("kamerozkan/cardmarket-price-guide").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
