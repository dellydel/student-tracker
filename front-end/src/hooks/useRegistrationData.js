import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRegistrations = async (email) => {
	const encodedEmail = encodeURIComponent(email);
	return axios.get(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/registration?email=${encodedEmail}`,
	);
};

export const useRegistrationData = (email) => {
	return useQuery({
		queryKey: ["registrations"],
		queryFn: () => fetchRegistrations(email),
		select: (data) => data.data.map((registration) => registration.product_id),
	});
};
