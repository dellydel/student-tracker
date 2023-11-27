import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRegistrations = async () => {
	return axios.get(
		`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/registration`,
	);
};

export const useRegistrationData = (email) => {
	return useQuery({
		queryKey: ["registrations"],
		queryFn: fetchRegistrations,
		select: (data) =>
			data.data.Items.map((registration) => registration.email === email),
	});
};
