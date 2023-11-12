import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourses = async () => {
	return axios.get(`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/courses`);
};

export const useCoursesData = () => {
	return useQuery({
		queryKey: ["courses"],
		queryFn: fetchCourses,
		select: (data) => data.data.Items.map((course) => course),
	});
};
