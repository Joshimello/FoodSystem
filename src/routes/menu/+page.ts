import { error } from '@sveltejs/kit'

const popularFood = [
  {
    name: "Classic Cheeseburger",
    price: "$8.99",
    rating: "4.5/5",
    img: "https://example.com/images/classic_cheeseburger.jpg"
  },
  {
    name: "Spicy Chicken Tacos",
    price: "$10.49",
    rating: "4.7/5",
    img: "https://example.com/images/spicy_chicken_tacos.jpg"
  },
  {
    name: "Margherita Pizza",
    price: "$12.99",
    rating: "4.8/5",
    img: "https://example.com/images/margherita_pizza.jpg"
  },
  {
    name: "Garlic Butter Shrimp Pasta",
    price: "$14.95",
    rating: "4.6/5",
    img: "https://example.com/images/garlic_butter_shrimp_pasta.jpg"
  },
  {
    name: "Veggie Sushi Roll",
    price: "$9.50",
    rating: "4.4/5",
    img: "https://example.com/images/veggie_sushi_roll.jpg"
  },
  {
    name: "BBQ Pulled Pork Sandwich",
    price: "$11.99",
    rating: "4.7/5",
    img: "https://example.com/images/bbq_pulled_pork_sandwich.jpg"
  },
  {
    name: "Creamy Mushroom Risotto",
    price: "$13.75",
    rating: "4.9/5",
    img: "https://example.com/images/creamy_mushroom_risotto.jpg"
  }
]

const shops = [
  {
    name: "The Burger Joint",
    priceRange: "$",
    rating: "4.5/5"
  },
  {
    name: "Taco Time",
    priceRange: "$",
    rating: "4.7/5"
  },
  {
    name: "Pizza Palace",
    priceRange: "$$",
    rating: "4.8/5"
  },
  {
    name: "Pasta Place",
    priceRange: "$$",
    rating: "4.6/5"
  },
  {
    name: "Sushi Spot",
    priceRange: "$$",
    rating: "4.4/5"
  },
  {
    name: "BBQ Bistro",
    priceRange: "$$",
    rating: "4.7/5"
  },
  {
    name: "Risotto Restaurant",
    priceRange: "$$",
    rating: "4.9/5"
  }
]

export const load = (({ params }) => {
  return {
    'popularFood': popularFood,
    'shops': shops
  }
})