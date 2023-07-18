import { error } from '@sveltejs/kit'

const popularFood = [
  {
    name: "Classic Cheeseburger",
    price: "$8.99",
    rating: "4.5/5",
    img: "https://source.unsplash.com/-Ml9CpVkxUQ"
  },
  {
    name: "Spicy Chicken Tacos",
    price: "$10.49",
    rating: "4.7/5",
    img: "https://source.unsplash.com/6WHl6T-fxU0"
  },
  {
    name: "Margherita Pizza",
    price: "$12.99",
    rating: "4.8/5",
    img: "https://source.unsplash.com/AcA8moIiD3g"
  },
  {
    name: "Garlic Butter Shrimp Pasta",
    price: "$14.95",
    rating: "4.6/5",
    img: "https://source.unsplash.com/eSeo6IzOV00"
  },
  {
    name: "Veggie Sushi Roll",
    price: "$9.50",
    rating: "4.4/5",
    img: "https://source.unsplash.com/-1GEAA8q3wk"
  },
  {
    name: "BBQ Pulled Pork Sandwich",
    price: "$11.99",
    rating: "4.7/5",
    img: "https://source.unsplash.com/FZ4y_IDUJ6w"
  },
  {
    name: "Creamy Mushroom Risotto",
    price: "$13.75",
    rating: "4.9/5",
    img: "https://source.unsplash.com/fUAuV0btigU"
  }
]

const shops = [
  {
    name: "The Burger Joint",
    priceRange: "$",
    rating: "4.5/5",
    img: "https://source.unsplash.com/random/?Restaurant&1"
  },
  {
    name: "Taco Time",
    priceRange: "$",
    rating: "4.7/5",
    img: "https://source.unsplash.com/random/?Restaurant&2"
  },
  {
    name: "Pizza Palace",
    priceRange: "$$",
    rating: "4.8/5",
    img: "https://source.unsplash.com/random/?Restaurant&3"
  },
  {
    name: "Pasta Place",
    priceRange: "$$",
    rating: "4.6/5",
    img: "https://source.unsplash.com/random/?Restaurant&4"
  },
  {
    name: "Sushi Spot",
    priceRange: "$$",
    rating: "4.4/5",
    img: "https://source.unsplash.com/random/?Restaurant&5"
  },
  {
    name: "BBQ Bistro",
    priceRange: "$$",
    rating: "4.7/5",
    img: "https://source.unsplash.com/random/?Restaurant&6"
  },
  {
    name: "Risotto Restaurant",
    priceRange: "$$",
    rating: "4.9/5",
    img: "https://source.unsplash.com/random/?Restaurant&7"
  }
]

export const load = (({ params }) => {
  return {
    'popularFood': popularFood,
    'shops': shops
  }
})