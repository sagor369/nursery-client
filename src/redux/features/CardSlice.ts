import { createSlice } from "@reduxjs/toolkit";

export type TPlants = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  categoryId: string;
  imageUrl: string;
  totalQuantity: number;
  totalAmount: number;
};

type TInit = {
  plants: TPlants[];
};

const initialState: TInit = { plants: [] };

const selectCard = createSlice({
  name: "selectCard",
  initialState: initialState,
  reducers: {
    addToCard: (state, action) => {
      const findData = state.plants.find(
        (item) => item._id === action.payload._id
      );
      if (findData) {
        findData.totalQuantity = findData.totalQuantity + 1;
      } else {
        state.plants.push(action.payload);
      }
    },
    removeToCard: (state, action) => {
      const id = action.payload;
      state.plants = state.plants.filter((item) => item._id !== id);
    },
    quantityAdd: (state, action) => {
      const id = action.payload;
      const findData = state.plants.find((item) => item._id === id);
      if (findData) {
        console.log(findData, id);
        findData.totalQuantity = findData.totalQuantity + 1;
        findData.totalAmount = findData.price* findData.totalQuantity
      }
    },
    quantitymainus: (state, action) => {
      const id = action.payload;
      const findData = state.plants.find(({ _id }) => _id === id);
      if (findData && findData.totalQuantity > 1) {
        findData.totalQuantity = findData.totalQuantity - 1;
        findData.totalAmount = findData.price* findData.totalQuantity
      }
    },
  },
});

export const { addToCard, quantityAdd, quantitymainus, removeToCard } =
  selectCard.actions;
export default selectCard.reducer;
