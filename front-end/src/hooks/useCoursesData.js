import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourses = async () => {
	return axios.get(`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses`);
};

const fetchCourseById = async (courseId) => {
	return axios.get(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses?courseId=${courseId}`,
	);
};

const fetchCoursesById = async (courseIds) => {
	return axios.post(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
		courseIds,
	);
};

export const useCoursesData = () => {
	return useQuery({
		queryKey: ["courses"],
		queryFn: fetchCourses,
		select: (data) => data.data.map((course) => course),
	});
};

export const useCourseByIdData = (courseId) => {
	return useQuery({
		queryKey: ["courses", courseId],
		queryFn: () => fetchCourseById(courseId),
		enabled: !!courseId,
	});
};

export const useCoursesByIdData = ({ courseIds }) => {
	return useQuery({
		queryKey: ["courses", courseIds],
		queryFn: () => fetchCoursesById(courseIds),
		select: (data) => data.data.map((course) => course),
		enabled: courseIds?.length,
	});
};
