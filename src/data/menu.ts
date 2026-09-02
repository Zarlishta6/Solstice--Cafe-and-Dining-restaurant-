export type MenuItem = {
  name: string;
  note: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "coffee",
    title: "Coffee & Pours",
    items: [
      { name: "Honey Flat White", note: "double, wildflower honey", price: "5.5" },
      { name: "Golden Hour Pour", note: "single origin, slow drip", price: "5.0" },
      { name: "Ash-Roasted Espresso", note: "house blend, two shots", price: "3.5" },
      { name: "Cardamom Cold Brew", note: "18hr steep, orange peel", price: "6.0" },
    ],
  },
  {
    id: "bakery",
    title: "From the Oven",
    items: [
      { name: "Cardamom Bun", note: "baked at dawn, still warm", price: "4.0" },
      { name: "Ember Sourdough", note: "48hr ferment, cultured butter", price: "6.0" },
      { name: "Oven-Baked Pear", note: "wildflower honey, fresh thyme", price: "7.5" },
      { name: "Olive Oil Cake", note: "burnt orange, crème fraîche", price: "6.5" },
    ],
  },
  {
    id: "plates",
    title: "Evening Plates",
    items: [
      { name: "Seared Duck Breast", note: "charred plum, toasted grain", price: "28.0" },
      { name: "Wood-Oven Squash", note: "sage brown butter, hazelnut", price: "19.0" },
      { name: "Line-Caught Bream", note: "fennel, preserved lemon", price: "26.0" },
      { name: "Fig & Honey Tart", note: "burnt crème, candied walnuts", price: "14.0" },
    ],
  },
];
