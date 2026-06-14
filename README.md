HELLOW-REACT

> **A production-grade food ordering web app built while learning React from the ground up.**
> Not a tutorial clone — a real app built concept by concept, with every architectural decision documented.

-----

## What is HELLOW-REACT?

HELLOW-REACT is a responsive food ordering web application built with React. It started as a learning project but grew into a practical exploration of how modern frontend applications are actually architected — from bundling and HMR all the way to client-side routing and state management.

Every feature in this repo was built after understanding *why*, not just *how*.

-----

## Features

-  **Restaurant listing** — browse restaurants with category filtering
-  **Search** — live search using controlled components and `useState`
-  **Restaurant detail pages** — dynamic routing with `useParams`
-  **Cart functionality** — state managed via `useState` + prop drilling / context
-  **Lazy loading** — code splitting per route using `React.lazy` + `Suspense`
-  **Responsive design** — mobile-first layout
-----

## Architecture Decisions (and why)

### Parcel over CRA / Vite

Parcel was chosen deliberately to understand what a bundler actually does under the hood — instead of hiding behind pre-configured tooling.

What Parcel handles automatically:

- **HMR (Hot Module Replacement)** — written in C++, file-watching without full reloads
- **Code splitting** — per-route bundles for faster initial load
- **Minification + Compression** — production build optimisation
- **Image optimisation** — automatic compression pipeline
- **Consistent hashing** — cache-busting on content change only

### Client-side Routing (not `<a href>`)

Using `<a href="/about">` causes a full page reload — the browser fetches a new HTML document, React remounts from scratch, and all state is lost.

`react-router-dom`’s `<Link>` component intercepts navigation, updates the URL via the History API, and only re-renders the changed component. Zero network call. This is what makes React apps feel instant.

### Component Export Convention

```js
// Default export — for components (PascalCase)
export default RestaurantCard;
import RestaurantCard from "./RestaurantCard";

// Named export — for constants and utilities
export const SWIGGY_API_URL = "...";
import { SWIGGY_API_URL } from "./constants";
```

### `useEffect` Rules

- Never call `useState` or `useEffect` inside conditionals, loops, or nested functions
- React’s hook system depends on call order being consistent across renders — breaking this causes silent state corruption

-----

## Tech Stack

|Layer     |Technology         |
|----------|-------------------|
|UI Library|React 18           |
|Bundler   |Parcel             |
|Routing   |React Router DOM   |
|State     |useState, useEffect|
|Styling   |CSS (modular)      |
|Language  |JavaScript ES6+    |

-----

## Project Structure

```
HELLOW-REACT/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Body.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   └── Cart.js
│   ├── utils/
│   │   ├── constants.js        ← API URLs, config
│   │   ├── useRestaurantMenu.js ← Custom hook
│   │   └── mockData.js
│   └── App.js
├── index.html
├── index.css
└── package.json
```

-----

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npx parcel index.html

# Production build
npx parcel build index.html
```

-----

## Key Concepts Explored

|Concept                              |Implementation                       |
|-------------------------------------|-------------------------------------|
|Component-based architecture         |Reusable cards, headers, modals      |
|Controlled vs uncontrolled components|Search bar, filters                  |
|Client-side routing                  |React Router v6                      |
|Code splitting                       |`React.lazy` + `Suspense`            |
|Custom hooks                         |`useRestaurantMenu` for data fetching|
|Monolith vs microservices            |Architectural comparison in docs     |
|HMR & Parcel internals               |Documented in notes                  |

-----

## Why this matters

Most developers learn React through tutorial clones where the hard parts are pre-configured. This project was built with the opposite approach — start from `index.html`, wire up Parcel manually, understand why `<Link>` exists, understand why hooks have rules. The goal was to be able to explain every line, not just write it.

-----

*Built by [Anjali Sawant](https://github.com/Anjalieee) — 2nd Year IT, Cummins College of Engineering, Pune*
*Part of an ongoing deep-dive into React internals — May 2026 onwards*

Note for self

#Parcel
Dev-build
local server
HMR- Hot module Replacement
File watching algo- written in c++
CAching- faster builds
minification
bundling
image optimisation
compressing
consistent hashing
code splitting
diagnostics and good error handling

TWO TYPES OF EXPORTS:
1. default export for components with CaptalNames
2. Named export constants from constants with lower_case these atr constants

2 SUBSEQUENT IMPORTS:
1. import Component from "./path"
2. import { constant } from "./path"

MONOLITH | Micro-service architecture

- useEffect usage

- never create states and use usestate hook inside an if/for loops/ functions condition. Causes inconsistency.

Now, dont do a href = about.... because that reloads the entire page. why? use a link component to only re-render the updated component

Routing in we apps
1. Client-side Routing is what we are implementing as no network calls, just component renders
2. Server side routing

Dynamic routing:
-
