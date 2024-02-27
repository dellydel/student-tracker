import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}`;

const api = axios.create({
	baseURL: `${API_BASE_URL}/materials`,
});

export const getAllMaterials = async () => {
	try {
		const response = await api.get("/");
		return response.data;
	} catch (error) {
		console.error("Error fetching materials:", error);
		throw error;
	}
};
