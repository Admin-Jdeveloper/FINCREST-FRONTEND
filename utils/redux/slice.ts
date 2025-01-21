import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    
    accounts:[],
    transactions:[],
   
  },
  reducers: {
    
   add_accountdetails: (state, action: PayloadAction<any>) => {
      state.accounts = action.payload
    },
    add_transactiondetails: (state, action: PayloadAction<any>) => {
      state.transactions = action.payload
    },
 
    


    
  },
});

export const {  add_accountdetails , add_transactiondetails  } = uiSlice.actions;
export default uiSlice.reducer;