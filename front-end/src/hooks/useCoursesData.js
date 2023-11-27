import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourses = async () => {
	return axios.get(`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/courses`);
};

const fetchCoursesById = async (courseIds) => {
	return axios.post(
		`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/courses`,
		courseIds,
	);
};

export const useCoursesData = () => {
	return useQuery({
		queryKey: ["courses"],
		queryFn: fetchCourses,
		select: (data) => data.data.Items.map((course) => course),
	});
};

export const useCoursesByIdData = ({ courseIds }) => {
	return useQuery({
		queryKey: ["courses", courseIds],
		queryFn: () => fetchCoursesById(courseIds),
		select: (data) => data.data.Items.map((course) => course),
		enabled: courseIds?.length,
	});
};
