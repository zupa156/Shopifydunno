import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
import express from 'express';

const shopify = shopifyApi({
  
  apiKey: 'APIKeyFromPartnersDashboard',
  apiSecretKey: 'APISecretFromPartnersDashboard',
  scopes: ['read_products'],
  hostName: 'ngrok-tunnel-address',
  });

const app = express();