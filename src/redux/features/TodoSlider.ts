import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id: string;
  title: string;
  description: string;
  isComplete?: boolean;
};

type TInit = {
  todos: TTodo[];
};

const initialState: TInit = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isComplete: false });
    },
    removeTodo: (state, action: PayloadAction< string>) =>{
      state.todos = state.todos.filter(item => item.id !== action.payload)
      
    },
    toggleComplete : (state, action:PayloadAction<string> ) =>{
      const task = state.todos.find(item => item.id === action.payload)
      task!.isComplete  = !task?.isComplete
      // state.todos.sort((a, d) =>{
      //   if(a.isComplete !== d.isComplete){
      //     return a.isComplete - d.isComplete
      //   }
      //   return a.title.localeCompare(d.title)
      // })
      
    }
  },
});

export const { addTodo, removeTodo , toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;
