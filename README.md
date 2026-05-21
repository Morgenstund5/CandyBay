https://candy-bay-nu.vercel.app/

# CandyBay

A fictional dark-web ecommerce interface inspired by the German series “How to Sell Drugs Online (Fast)”.

## Description

This is a fictional ecommerce project built as part of my frontend portfolio.

While learning German, I discovered the series “How to Sell Drugs Online (Fast)” — a comedy centered around two teenagers building an online drug marketplace. The show is filled with internet culture, startup references, and developer humor, which inspired me to recreate a similar platform.

<img src="/candy-bay/src/assets/ss-1.png" width="45%" alt="HTSDOF screenshot">
<img src="/candy-bay/src/assets/ss-2.png" width="45%" alt="HTSDOF screenshot">
<!-- ![HTSDOF screenshot](/candy-bay/src/assets/ss-1.png | width=50%) -->
<!-- ![HTSDOF screenshot](/candy-bay/src/assets/ss-2.png | width=50%) -->

Through this project, I focused on building real-world __frontend skills__ such as:

- State management
- API integration
- Responsive Design

## Tech Stack

- React
- React Router
- JavaScript
- Context API
- BCH Price API

## Features

- Dynamic BCH pricing using real-time API conversion
- Responsive design for desktop and mobile
- Multi-step checkout flow
- Form validation and error handling
- Custom 404 Error Page
- Simulated blockchain payment confirmation

## Architecture Decisions

### State Management

Global Cart, Products and live BCH Price are managed through the React Context API to avoid unnecessary complexity and excessive prop drilling.

This approach maintains shared state centralized and accessible across the application. Each major piece of state is isolated within its corresponding Context file for better scalability and maintainability.

### BCH Pricing System

Bitcoin Cash (BCH) was chosen due to its low transaction fees and fast confirmation times, making it suitable for everyday transactions. 

Live BCH price is fetched and stored globally through Context API state management. Products prices are stored in USD to avoid complexity caused by cryptocurrency price fluctuations. 

Prices are dynamically converted to BCH through a dedicated 'convertPrice()' function, located in utils/ConvertPrice.jsx. This keeps pricing logic centralized and reusable accross the application.

### Loading States & Async Simulation

To simulate a realistic frontend and backend interaction, the application includes loading states and async UI flows across multiple sections.

Examples include:
- product fetching simulation in the Shop section
- BCH price loading before conversion
- simulated payment confirmation delays during checkout

These interactions were intentionally designed to practice conditional rendering, asynchronous state handling, and user feedback patterns commonly found in real-world ecommerce applications.

### Multi-step Checkout Flow

The checkout process was intentionally designed as a multi-step flow to simulate real-world ecommerce experience.

## Challenges & Learnings

Some of the main challenges during development included:
- designing responsive layouts for all kinds of devices while mantaining style
- creating visually appealing animations
- managing context, state and API integration to handle and use critical data

## Disclaimer

CandyBay is a fictional parody project created exclusively for educational and portfolio purposes.

It does not promote or facilitate illegal activity of any kind.
