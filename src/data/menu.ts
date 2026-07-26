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

import paneerButterMasala from "@/assets/menu/paneer-butter-masala.jpg";
import dalMakhani from "@/assets/menu/dal-makhani.jpg";
import shahiPaneer from "@/assets/menu/shahi-paneer.jpg";
import choleBhature from "@/assets/menu/chole-bhature.jpg";
import kadhaiPaneer from "@/assets/menu/kadhai-paneer.jpg";
import vegBiryani from "@/assets/menu/veg-biryani.jpg";

import hakkaNoodles from "@/assets/menu/hakka-noodles.jpg";
import chilliPaneer from "@/assets/menu/chilli-paneer.jpg";
import vegManchurian from "@/assets/menu/veg-manchurian.jpg";
import schezwanFriedRice from "@/assets/menu/schezwan-fried-rice.jpg";
import honeyChilliPotato from "@/assets/menu/honey-chilli-potato.jpg";

import masalaDosa from "@/assets/menu/masala-dosa.jpg";
import idliSambar from "@/assets/menu/idli-sambar.jpg";
import uttapam from "@/assets/menu/uttapam.jpg";
import ravaDosa from "@/assets/menu/rava-dosa.jpg";

import paneerTikkaRoll from "@/assets/menu/paneer-tikka-roll.jpg";
import vegKathiRoll from "@/assets/menu/veg-kathi-roll.jpg";
import cheeseCornRoll from "@/assets/menu/cheese-corn-roll.jpg";

import chocolateShake from "@/assets/menu/chocolate-shake.jpg";
import oreoShake from "@/assets/menu/oreo-shake.jpg";
import strawberryShake from "@/assets/menu/strawberry-shake.jpg";
import coldCoffee from "@/assets/menu/cold-coffee.jpg";

import alooTikkiBurger from "@/assets/menu/aloo-tikki-burger.jpg";
import paneerGrillBurger from "@/assets/menu/paneer-grill-burger.jpg";
import cheeseBurger from "@/assets/menu/cheese-burger.jpg";

import alfredoPasta from "@/assets/menu/alfredo-pasta.jpg";
import arrabbiataPasta from "@/assets/menu/arrabbiata-pasta.jpg";
import pinkSaucePasta from "@/assets/menu/pink-sauce-pasta.jpg";

import mysoreDosa from "@/assets/menu/mysore-dosa.jpg";
import cheeseDosa from "@/assets/menu/cheese-dosa.jpg";
import paperDosa from "@/assets/menu/paper-dosa.jpg";

import gulabJamun from "@/assets/menu/gulab-jamun.jpg";
import sizzlingBrownie from "@/assets/menu/sizzling-brownie.jpg";
import rasmalai from "@/assets/menu/rasmalai.jpg";

import limeSoda from "@/assets/menu/lime-soda.jpg";
import masalaChai from "@/assets/menu/masala-chai.jpg";
import mangoLassi from "@/assets/menu/mango-lassi.jpg";

export const categoryMeta: { id: CategoryId; name: string; image: string }[] = [
  { id: "indian", name: "Indian", image: paneerButterMasala },
  { id: "chinese", name: "Chinese", image: hakkaNoodles },
  { id: "south", name: "South Indian", image: masalaDosa },
  { id: "rolls", name: "Rolls", image: paneerTikkaRoll },
  { id: "shakes", name: "Shakes", image: chocolateShake },
  { id: "burgers", name: "Burgers", image: paneerGrillBurger },
  { id: "pasta", name: "Pasta", image: alfredoPasta },
  { id: "dosa", name: "Dosa", image: mysoreDosa },
  { id: "desserts", name: "Desserts", image: sizzlingBrownie },
  { id: "beverages", name: "Beverages", image: mangoLassi },
];

export const menu: MenuItem[] = [
  // Indian
  { name: "Paneer Butter Masala", desc: "Cottage cheese in silky tomato-cashew gravy.", price: 260, image: paneerButterMasala, category: "indian", tag: "Bestseller" },
  { name: "Dal Makhani", desc: "Slow-cooked black lentils, cream, smoked butter.", price: 240, image: dalMakhani, category: "indian" },
  { name: "Shahi Paneer", desc: "Royal Mughlai paneer curry with fragrant spices.", price: 280, image: shahiPaneer, category: "indian", tag: "Chef's Pick" },
  { name: "Chole Bhature", desc: "Spiced chickpeas with fluffy fried bhature.", price: 210, image: choleBhature, category: "indian" },
  { name: "Kadhai Paneer", desc: "Paneer tossed with peppers in kadhai masala.", price: 270, image: kadhaiPaneer, category: "indian" },
  { name: "Veg Biryani", desc: "Long-grain basmati layered with garden veggies.", price: 250, image: vegBiryani, category: "indian" },

  // Chinese
  { name: "Veg Hakka Noodles", desc: "Wok-tossed noodles with crunchy vegetables.", price: 200, image: hakkaNoodles, category: "chinese", tag: "Bestseller" },
  { name: "Chilli Paneer Dry", desc: "Indo-Chinese classic, hot & tangy.", price: 260, image: chilliPaneer, category: "chinese" },
  { name: "Veg Manchurian", desc: "Crispy veg dumplings in a savoury glaze.", price: 230, image: vegManchurian, category: "chinese" },
  { name: "Schezwan Fried Rice", desc: "Fiery schezwan tossed with rice & veg.", price: 220, image: schezwanFriedRice, category: "chinese" },
  { name: "Honey Chilli Potato", desc: "Sweet, spicy, sticky crisp potatoes.", price: 210, image: honeyChilliPotato, category: "chinese" },

  // South
  { name: "Masala Dosa", desc: "Crispy dosa with spiced potato filling.", price: 180, image: masalaDosa, category: "south", tag: "Chef's Pick" },
  { name: "Idli Sambar", desc: "Steamed rice cakes with lentil stew.", price: 140, image: idliSambar, category: "south" },
  { name: "Uttapam", desc: "Thick pancake with onions & tomatoes.", price: 160, image: uttapam, category: "south" },
  { name: "Rava Dosa", desc: "Lacy semolina crepe, coconut chutney.", price: 190, image: ravaDosa, category: "south" },

  // Rolls
  { name: "Paneer Tikka Roll", desc: "Smoky paneer wrapped in a soft paratha.", price: 180, image: paneerTikkaRoll, category: "rolls", tag: "Bestseller" },
  { name: "Veg Kathi Roll", desc: "Spiced veggies, mint chutney, warm wrap.", price: 150, image: vegKathiRoll, category: "rolls" },
  { name: "Cheese Corn Roll", desc: "Melted cheese, sweet corn, chilli mayo.", price: 170, image: cheeseCornRoll, category: "rolls" },

  // Shakes
  { name: "Belgian Chocolate Shake", desc: "Rich cocoa, whipped cream, chocolate drizzle.", price: 220, image: chocolateShake, category: "shakes", tag: "Chef's Pick" },
  { name: "Oreo Cookie Shake", desc: "Vanilla ice cream blended with Oreo.", price: 210, image: oreoShake, category: "shakes" },
  { name: "Strawberry Shake", desc: "Fresh strawberries, milk, whipped cream.", price: 200, image: strawberryShake, category: "shakes" },
  { name: "Cold Coffee", desc: "Iced espresso, milk, chocolate shavings.", price: 180, image: coldCoffee, category: "shakes" },

  // Burgers
  { name: "Aloo Tikki Burger", desc: "Spiced potato patty, mint mayo, lettuce.", price: 140, image: alooTikkiBurger, category: "burgers" },
  { name: "Paneer Grill Burger", desc: "Grilled paneer, cheese, house sauce.", price: 190, image: paneerGrillBurger, category: "burgers", tag: "Bestseller" },
  { name: "Cheese Overload Burger", desc: "Double cheese, jalapeños, crispy onions.", price: 220, image: cheeseBurger, category: "burgers" },

  // Pasta
  { name: "Alfredo White Sauce", desc: "Penne in creamy parmesan white sauce.", price: 260, image: alfredoPasta, category: "pasta" },
  { name: "Arrabbiata Red Sauce", desc: "Spicy tomato basil sauce, olives.", price: 240, image: arrabbiataPasta, category: "pasta" },
  { name: "Pink Sauce Pasta", desc: "The best of both worlds, herbed.", price: 270, image: pinkSaucePasta, category: "pasta" },

  // Dosa
  { name: "Mysore Masala Dosa", desc: "Red chutney lined, crisp & fiery.", price: 200, image: mysoreDosa, category: "dosa" },
  { name: "Cheese Dosa", desc: "Kids' favourite, oozing with cheese.", price: 210, image: cheeseDosa, category: "dosa" },
  { name: "Paper Dosa", desc: "Extra-thin, extra-crisp, family sized.", price: 190, image: paperDosa, category: "dosa" },

  // Desserts
  { name: "Gulab Jamun", desc: "Warm milk dumplings in cardamom syrup.", price: 90, image: gulabJamun, category: "desserts" },
  { name: "Sizzling Brownie", desc: "Chocolate brownie, vanilla scoop, hot fudge.", price: 220, image: sizzlingBrownie, category: "desserts", tag: "New" },
  { name: "Rasmalai", desc: "Soft cottage cheese in saffron milk.", price: 120, image: rasmalai, category: "desserts" },

  // Beverages
  { name: "Fresh Lime Soda", desc: "Sweet, salty or plain — your call.", price: 80, image: limeSoda, category: "beverages" },
  { name: "Masala Chai", desc: "Slow-brewed, cardamom & ginger.", price: 60, image: masalaChai, category: "beverages" },
  { name: "Mango Lassi", desc: "Alphonso mango, thick yogurt, saffron.", price: 130, image: mangoLassi, category: "beverages" },
];
