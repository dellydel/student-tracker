import axios from "axios";

const API_BASE_URL = `${process.env.REACT_APP_API_GATEWAY_BASE_URL}`;

const api = axios.create({
	baseURL: `${API_BASE_URL}/registration`,
});

export const getCourseRegistrations = async (email) => {
	try {
		const response = await api.get(`/?email=${email}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching registrations by email for ${email}:`, error);
		throw error;
	}
};
