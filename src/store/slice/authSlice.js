import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     userToken: localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null,
     pickerToken: localStorage.getItem('pickerToken') ? JSON.parse(localStorage.getItem('pickerToken')) : null,
     adminToken: localStorage.getItem('adminToken') ? JSON.parse(localStorage.getItem('adminToken')) : null
}

const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {
          setUserCredential: (state, action) => {
               state.userToken = action.payload;
               localStorage.setItem('userToken', JSON.stringify(action.payload));
          },
          setPickerCredential: (state, action) => {
               state.pickerToken = action.payload;
               localStorage.setItem('pickerToken', JSON.stringify(action.payload));
          },
          setAdminCredential: (state, action) => {
               state.adminToken = action.payload;
               localStorage.setItem('adminToken', JSON.stringify(action.payload));
          },
          userLogout: (state) => {
               console.log('user logout');
               state.userToken = null;
               localStorage.removeItem('userToken');
          },
          pickerLogout: (state) => {
               console.log('picker logout');
               state.pickerToken = null;
               localStorage.removeItem('pickerToken');
          },
          adminLogout: (state) => {
               state.adminToken = null;
               localStorage.removeItem('adminToken');
          }
     }
})

export const { setUserCredential, setPickerCredential, setAdminCredential, userLogout, pickerLogout, adminLogout } = authSlice.actions;
export default authSlice.reducer;