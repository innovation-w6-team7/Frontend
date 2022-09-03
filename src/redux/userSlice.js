import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {},
	reducers: {
		loadTodoList: (state, action) => {
			state = action.payload;
		},
	},
});

export const { loadTodoList } = userSlice.actions;
export default userSlice.reducer;
