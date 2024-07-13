import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type TPlants = {
  _id: string
  name: string;
  price: number;
  quantity: number;
  description: string;
  categoryId: string;
  imageUrl: string;
};
type TInit = {
  plants: TPlants[]
}

const initialState:TInit= {plants: []}

const selectCard = createSlice({
 name: "selectCard",
 initialState: initialState ,
 reducers:{
  addToCard: (state, action) =>{
    
    state.plants.push(action.payload)
  },
  removeToCard: (state, action) =>{
    const id = action.payload._id 
     state.plants = state.plants.filter(item => item._id !== id)
  },
  quantityAdd : (state, action) =>{
    const id = action.payload._id 
    const findData = state.plants.find(({_id})=> _id === id)
    if(findData){findData?.quantity + 1}
  },
  quantitymainus : (state, action) =>{
    const id = action.payload._id 
    const findData = state.plants.find(({_id})=> _id === id)
    if(findData && findData.quantity >0){findData?.quantity - 1}
  },
 }
});

export const {addToCard, quantityAdd, quantitymainus, removeToCard} = selectCard.actions
export default selectCard.reducer
