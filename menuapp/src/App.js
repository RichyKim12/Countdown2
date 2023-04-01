import  { useState } from 'react';
const PRODUCTS={ "breakfast": [
    {"food": "pancakes", "price": 5.00, "vegetarian": true},
    {"food": "waffles", "price": 5.00, "vegetarian": true},
    {"food": "orange juice", "price": 2.00, "vegetarian": true}
  ],
  "lunch": [
    {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
    {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
    {"food": "hamburger", "price": 8.00, "vegetarian": false}
  ],
  "dinner": [
    {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
    {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
    {"food": "chili", "price": 8.00, "vegetarian": false}
  ]
}

export default function App() {
  return <Menu products={PRODUCTS} />;
}

function Menu({products}) {
  return (
    <div>
      <OptionButton />
      <ProductTable products={products} />
    </div>
  );

}

function ProductTable({products}){
  // Go through product list and output
  // Sort by Categories vs actual products
}

function OptionButton() {
  return (
    <button>'Show Vegetarian Options'</button>
  );
}