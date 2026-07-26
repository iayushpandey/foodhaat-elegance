export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  image: string;
  category: CategoryId;
  tag?: "Chef's Pick" | "Bestseller" | "New";
};

export type CategoryId =
  | "indian"
  | "chinese"
  | "south"
  | "rolls"
  | "shakes"
  | "burgers"
  | "pasta"
  | "dosa"
  | "desserts"
  | "beverages";

import indian from "@/assets/cat-indian.jpg";
import chinese from "@/assets/cat-chinese.jpg";
import south from "@/assets/cat-south.jpg";
import rolls from "@/assets/cat-rolls.jpg";
import shakes from "@/assets/cat-shakes.jpg";
import burgers from "@/assets/cat-burgers.jpg";

export const categoryMeta: { id: CategoryId; name: string; image: string }[] = [
  { id: "indian", name: "Indian", image: indian },
  { id: "chinese", name: "Chinese", image: chinese },
  { id: "south", name: "South Indian", image: south },
  { id: "rolls", name: "Rolls", image: rolls },
  { id: "shakes", name: "Shakes", image: shakes },
  { id: "burgers", name: "Burgers", image: burgers },
  { id: "pasta", name: "Pasta", image: chinese },
  { id: "dosa", name: "Dosa", image: south },
  { id: "desserts", name: "Desserts", image: shakes },
  { id: "beverages", name: "Beverages", image: shakes },
];

export const menu: MenuItem[] = [
  // Indian
  { name: "Paneer Butter Masala", desc: "Cottage cheese in silky tomato-cashew gravy.", price: 260, image: indian, category: "indian", tag: "Bestseller" },
  { name: "Dal Makhani", desc: "Slow-cooked black lentils, cream, smoked butter.", price: 240, image: indian, category: "indian" },
  { name: "Shahi Paneer", desc: "Royal Mughlai paneer curry with fragrant spices.", price: 280, image: indian, category: "indian", tag: "Chef's Pick" },
  { name: "Chole Bhature", desc: "Spiced chickpeas with fluffy fried bhature.", price: 210, image: indian, category: "indian" },
  { name: "Kadhai Paneer", desc: "Paneer tossed with peppers in kadhai masala.", price: 270, image: indian, category: "indian" },
  { name: "Veg Biryani", desc: "Long-grain basmati layered with garden veggies.", price: 250, image: indian, category: "indian" },

  // Chinese
  { name: "Veg Hakka Noodles", desc: "Wok-tossed noodles with crunchy vegetables.", price: 200, image: chinese, category: "chinese", tag: "Bestseller" },
  { name: "Chilli Paneer Dry", desc: "Indo-Chinese classic, hot & tangy.", price: 260, image: chinese, category: "chinese" },
  { name: "Veg Manchurian", desc: "Crispy veg dumplings in a savoury glaze.", price: 230, image: chinese, category: "chinese" },
  { name: "Schezwan Fried Rice", desc: "Fiery schezwan tossed with rice & veg.", price: 220, image: chinese, category: "chinese" },
  { name: "Honey Chilli Potato", desc: "Sweet, spicy, sticky crisp potatoes.", price: 210, image: chinese, category: "chinese" },

  // South
  { name: "Masala Dosa", desc: "Crispy dosa with spiced potato filling.", price: 180, image: south, category: "south", tag: "Chef's Pick" },
  { name: "Idli Sambar", desc: "Steamed rice cakes with lentil stew.", price: 140, image: south, category: "south" },
  { name: "Uttapam", desc: "Thick pancake with onions & tomatoes.", price: 160, image: south, category: "south" },
  { name: "Rava Dosa", desc: "Lacy semolina crepe, coconut chutney.", price: 190, image: south, category: "south" },

  // Rolls
  { name: "Paneer Tikka Roll", desc: "Smoky paneer wrapped in a soft paratha.", price: 180, image: rolls, category: "rolls", tag: "Bestseller" },
  { name: "Veg Kathi Roll", desc: "Spiced veggies, mint chutney, warm wrap.", price: 150, image: rolls, category: "rolls" },
  { name: "Cheese Corn Roll", desc: "Melted cheese, sweet corn, chilli mayo.", price: 170, image: rolls, category: "rolls" },

  // Shakes
  { name: "Belgian Chocolate Shake", desc: "Rich cocoa, whipped cream, chocolate drizzle.", price: 220, image: shakes, category: "shakes", tag: "Chef's Pick" },
  { name: "Oreo Cookie Shake", desc: "Vanilla ice cream blended with Oreo.", price: 210, image: shakes, category: "shakes" },
  { name: "Strawberry Shake", desc: "Fresh strawberries, milk, whipped cream.", price: 200, image: shakes, category: "shakes" },
  { name: "Cold Coffee", desc: "Iced espresso, milk, chocolate shavings.", price: 180, image: shakes, category: "shakes" },

  // Burgers
  { name: "Aloo Tikki Burger", desc: "Spiced potato patty, mint mayo, lettuce.", price: 140, image: burgers, category: "burgers" },
  { name: "Paneer Grill Burger", desc: "Grilled paneer, cheese, house sauce.", price: 190, image: burgers, category: "burgers", tag: "Bestseller" },
  { name: "Cheese Overload Burger", desc: "Double cheese, jalapeños, crispy onions.", price: 220, image: burgers, category: "burgers" },

  // Pasta
  { name: "Alfredo White Sauce", desc: "Penne in creamy parmesan white sauce.", price: 260, image: chinese, category: "pasta" },
  { name: "Arrabbiata Red Sauce", desc: "Spicy tomato basil sauce, olives.", price: 240, image: chinese, category: "pasta" },
  { name: "Pink Sauce Pasta", desc: "The best of both worlds, herbed.", price: 270, image: chinese, category: "pasta" },

  // Dosa
  { name: "Mysore Masala Dosa", desc: "Red chutney lined, crisp & fiery.", price: 200, image: south, category: "dosa" },
  { name: "Cheese Dosa", desc: "Kids' favourite, oozing with cheese.", price: 210, image: south, category: "dosa" },
  { name: "Paper Dosa", desc: "Extra-thin, extra-crisp, family sized.", price: 190, image: south, category: "dosa" },

  // Desserts
  { name: "Gulab Jamun", desc: "Warm milk dumplings in cardamom syrup.", price: 90, image: shakes, category: "desserts" },
  { name: "Sizzling Brownie", desc: "Chocolate brownie, vanilla scoop, hot fudge.", price: 220, image: shakes, category: "desserts", tag: "New" },
  { name: "Rasmalai", desc: "Soft cottage cheese in saffron milk.", price: 120, image: shakes, category: "desserts" },

  // Beverages
  { name: "Fresh Lime Soda", desc: "Sweet, salty or plain — your call.", price: 80, image: shakes, category: "beverages" },
  { name: "Masala Chai", desc: "Slow-brewed, cardamom & ginger.", price: 60, image: shakes, category: "beverages" },
  { name: "Mango Lassi", desc: "Alphonso mango, thick yogurt, saffron.", price: 130, image: shakes, category: "beverages" },
];
