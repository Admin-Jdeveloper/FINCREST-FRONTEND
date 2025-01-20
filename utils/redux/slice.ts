import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light', // Example state
    isSidebarOpen: false,
    accounts:[],
    transactions:[],
    credit:[]
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
   add_accountdetails: (state, action: PayloadAction<any>) => {
      state.accounts = action.payload
    },
    add_transactiondetails: (state, action: PayloadAction<any>) => {
      state.transactions = action.payload
    },
    add_creditdetails: (state, action: PayloadAction<any>) => {
      state.credit = action.payload
    },
    


    
  },
});

export const { toggleTheme, toggleSidebar ,add_accountdetails , add_transactiondetails , add_creditdetails } = uiSlice.actions;
export default uiSlice.reducer;