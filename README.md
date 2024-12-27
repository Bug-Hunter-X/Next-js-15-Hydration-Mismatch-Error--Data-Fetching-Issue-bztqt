# Next.js 15 Hydration Mismatch Bug Report

This repository demonstrates a common hydration mismatch error encountered in Next.js 15 applications. The error occurs when fetching data within a page component during server-side rendering (SSR). The client-side hydration process then fails because the initial server-rendered content differs from the fully-rendered content on the client.

## Problem
The `pages/about.js` file attempts to fetch data from an API route (`/api/data`). However, the data fetching is asynchronous, leading to the server-side rendering completing before the API response is received.  This results in an empty data placeholder initially rendered, and the client receives fully populated data later leading to hydration mismatch. 

## Solution
The `pages/aboutSolution.js` file demonstrates the solution that uses `use` and `SWR` to handle the asynchronous data fetching effectively and preventing the mismatch.