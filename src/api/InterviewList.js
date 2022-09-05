import { defaultInstance } from "./utils";

export const getInterview = async () => {
	try {
		const { data } = await defaultInstance.get();
		return data;
	} catch (error) {
		console.log(error);
	}
};
