# Custom Domain Setup Guide

This guide walks you through connecting a custom domain to your Rithwik Indus Power website deployed on the Internet Computer.

## Prerequisites

Before you begin, ensure you have:
- **Domain ownership**: You own the domain you want to connect (e.g., `rithwikinduspower.com`)
- **DNS access**: You can modify DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
- **Deployed canister**: Your site is already deployed to the Internet Computer and you have the canister URL/ID

## Required Information

You will need the following values:

1. **Your desired custom domain**: The domain name you want to use (e.g., `rithwikinduspower.com` or `www.rithwikinduspower.com`)
2. **Your canister ID**: Found in your deployment output or `.dfx/local/canister_ids.json` (for local) or `canister_ids.json` (for mainnet)
3. **Your current IC URL**: The default URL where your site is currently accessible (e.g., `https://[canister-id].ic0.app` or `https://[canister-id].raw.ic0.app`)

## Step-by-Step Setup

### Step 1: Configure DNS Records at Your Registrar

Log in to your domain registrar's DNS management panel and add the following DNS records:

#### Option A: Using Root Domain (e.g., `rithwikinduspower.com`)

Add a **CNAME** record:
- **Type**: CNAME
- **Name**: `@` (or leave blank, depending on your registrar)
- **Value**: `icp1.io`
- **TTL**: 3600 (or Auto)

**Note**: Some registrars don't support CNAME records at the root domain. In that case, use Option B or check if your registrar supports CNAME flattening/ANAME records.

#### Option B: Using Subdomain (e.g., `www.rithwikinduspower.com`)

Add a **CNAME** record:
- **Type**: CNAME
- **Name**: `www`
- **Value**: `icp1.io`
- **TTL**: 3600 (or Auto)

### Step 2: Register Your Custom Domain with the Internet Computer

You need to register your custom domain with the Internet Computer boundary nodes. This can be done using the `dfx` command-line tool or through the NNS (Network Nervous System) dapp.

#### Using dfx (Recommended)

1. Install the latest version of `dfx` if you haven't already
2. Run the following command, replacing the placeholders with your actual values:

