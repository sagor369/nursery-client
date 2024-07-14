export type TPlantCategory = {
  name: string;
  description: string;
  imageUrl: string;
};

export type TPlants = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  categoryId: string;
  imageUrl: string;
  rating: number
};

export type TProducts = {
  product: string;
  quantity: number;
};

export type TPayments = {
  userId: string;
  products: TProducts[];
  amount: number;
  quantitys: number;
  paymentId: string;
};
