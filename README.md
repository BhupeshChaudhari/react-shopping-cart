# React Shopping Cart

## Overview
This project is a simple shopping cart application built with React-Vite and Redux. It fetches products from an API, allows users to add or remove items from the cart, and displays the total amount of items and price in the cart.

## Project Structure
```
shopping-cart/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cartitem.jsx
│   │   ├── Counter.jsx
│   │   ├── Navbar.jsx
│   │   ├── Product.jsx
│   │   ├── Spinner.css
│   │   ├── Spinner.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── CartSlice.jsx
│   │   │   ├── CounterSlice.jsx
│   │   ├── Store.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslint.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
```

## Installation

1.Clone the Repository
```
git clone https://github.com/yourusername/shopping-cart.git
cd shopping-cart
```
2. Install Dependencies
```
npm install
```
3. Start the development server
```
npm start
```

## Usage

- Home Page: View the list of products. Click "Add to Cart" to add items to the cart.
- Cart Page: View items in the cart, total items, and total amount. Click "Remove Item" to remove items from the 
  cart. Click "Checkout Now" to proceed to checkout.

## Technologies Used
- React
- Redux Toolkit
- React Router
- CSS (TailwindCSS for styling)
- Fetch API for data fetching

