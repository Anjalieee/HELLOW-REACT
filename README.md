Building a responsive food ordering web application using React, implementing component-based architecture, client-side routing, and React Hooks such as useState and useEffect.
Configured the application using Parcel bundler, leveraging features like Hot Module Replacement (HMR), code splitting, caching, bundling, minification, image optimization, and fast development builds.
Applied modern React practices including reusable components, state management, modular imports/exports, and seamless navigation without full page reloads.
Explored scalable frontend architecture concepts such as microservices vs monolithic systems and optimized user experience through efficient rendering and routing.

Hello-React by Anjali Sawant.

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
