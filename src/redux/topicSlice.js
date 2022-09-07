import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
	name: "topic",
	initialState: { list: [] },
	reducers: {
		setTopic: (state, action) => {
			state.list = action.payload;
		},
		deleteTopic: (state, action) => {
			if (state.list.length > 1) {
				const id = action.payload[0].id;
				state.list = state.list.filter((list) => list.id !== id);
			}
		},
	},
});

export const { setTopic, deleteTopic } = topicSlice.actions;
export default topicSlice.reducer;
