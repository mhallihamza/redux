import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    tasks: [{id:0,descr:"good",isdone:"Yes"}],
    filter : [],
  };
  const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
      createtask: (state, action) => {
        state.tasks.unshift(action.payload);
      },
      filtertask: (state,action)=> {
        state.filter = state.tasks.filter(el=> el.isdone===action.payload)
      },
      clearfilter:(state)=> {
        state.filter=[]
      },
      deletetask:(state,action)=> {
        state.tasks = state.tasks.filter(el=>el.id!==action.payload)
      },
      updatetask:(state,action)=> {
         state.tasks = state.tasks.splice(action.payload.id,0,action.payload)
      },
    },
  });
  export const { createtask, filtertask,clearfilter,deletetask,updatetask} = taskSlice.actions;
  export default taskSlice.reducer;