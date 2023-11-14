interface Price {
  size: string;
  price: string;
  currency: string;
}

export interface JapaneseFood {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string;
  allergens: string;
  prices: Price[];
  type: string;
  index: number;
}
